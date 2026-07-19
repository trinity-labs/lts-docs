# Docker TRINITY
Cette page regroupe les manifests Docker correspondant au projet `TRINITY` uniquement.

Les secrets ne sont pas exposes dans la documentation publique : les chemins de fichiers secrets et le fichier mail hôte sont masques.

Sources retenues :

- `/home/coder/TRINITY-DOCKER/var/docker/docker_trinity/docker-compose.yml`
- `/home/coder/TRINITY-DOCKER/var/docker/docker_postgres/docker-compose.yml`

Aucun `Dockerfile` dedie n'a ete trouve pour `TRINITY` dans les chemins Docker montes. Le runtime applicatif utilise l'image amont `oven/bun:alpine`.

## `docker_trinity/docker-compose.yml`
```yaml
services:
  trinity:
    image: oven/bun:alpine
    container_name: trinity
    environment:
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: alpine
      DB_USER: trinity
      DB_PASSWORD: ${DB_PASSWORD:-}
      STORAGE_ROOT: "/mnt/storage/alpine/conversations"
      APP_PORT: 3000
      APP_HOST: 0.0.0.0
      APP_URL: https://trinity-net.com
      APP_ENV_MODE: ${APP_ENV_MODE:-prod}
      DB_BACKUP_DIR: /usr/src/sql/backups
      DB_BACKUP_SCHEDULE_UTC: ${DB_BACKUP_SCHEDULE_UTC:-02:17}
      DB_BACKUP_RETENTION_DAYS: ${DB_BACKUP_RETENTION_DAYS:-30}
      TRINITY_WIRE_TRANSFER_ENABLED: ${TRINITY_WIRE_TRANSFER_ENABLED:-1}
      SHOP_IBAN: ${SHOP_IBAN:-}
      SHOP_BIC: ${SHOP_BIC:-}
      PAYPAL_API_BASE: ${PAYPAL_API_BASE:-https://api-m.paypal.com}
      MOLLIE_API_BASE: ${MOLLIE_API_BASE:-https://api.mollie.com}
    secrets:
      - OPENROUTER_API_KEY
      - GROQ_API_KEY
      - SECRET_SALT
      - ALPINE_MAIL_TO
      - API_SECRET
      - INTERNAL_SECRET
      - JWT_SECRET
      - STRIPE_SECRET_KEY
      - STRIPE_PUBLISHABLE_KEY
      - STRIPE_WEBHOOK_SECRET
      - PAYPAL_CLIENT_ID
      - PAYPAL_CLIENT_SECRET
      - MOLLIE_API_KEY
      - SHOP_IBAN
      - SHOP_BIC
      - DB_PASSWORD
    ports:
      - "192.168.3.5:8888:3000"
    volumes:
      - ./app:/usr/src/app:rw
      - <redacted-mail-config>:/etc/msmtprc:ro
      - /mnt/SSHFS/TRINITY-CLOUD/mnt/ENTREPRISE/SERVER/TRINITY/storage/alpine:/mnt/storage/alpine:rw
      - /mnt/SSHFS/TRINITY-CLOUD/mnt/ENTREPRISE/SERVER/TRINITY/sql:/usr/src/sql:rw
      - /mnt/SSHFS/TRINITY-CLOUD/mnt/ENTREPRISE/SERVER/TRINITY/downloads:/usr/src/app/public/downloads:rw
    working_dir: /usr/src/app
    command: sh /usr/src/app/docker-entrypoint.sh
    restart: always
    networks:
      - internal-db

secrets:
  OPENROUTER_API_KEY:
    file: <redacted-secret-file>
  GROQ_API_KEY:
    file: <redacted-secret-file>
  SECRET_SALT:
    file: <redacted-secret-file>
  ALPINE_MAIL_TO:
    file: <redacted-secret-file>
  API_SECRET:
    file: <redacted-secret-file>
  INTERNAL_SECRET:
    file: <redacted-secret-file>
  JWT_SECRET:
    file: <redacted-secret-file>
  STRIPE_SECRET_KEY:
    file: <redacted-secret-file>
  STRIPE_PUBLISHABLE_KEY:
    file: <redacted-secret-file>
  STRIPE_WEBHOOK_SECRET:
    file: <redacted-secret-file>
  PAYPAL_CLIENT_ID:
    file: <redacted-secret-file>
  PAYPAL_CLIENT_SECRET:
    file: <redacted-secret-file>
  MOLLIE_API_KEY:
    file: <redacted-secret-file>
  SHOP_IBAN:
    file: <redacted-secret-file>
  SHOP_BIC:
    file: <redacted-secret-file>
  DB_PASSWORD:
    file: <redacted-secret-file>

networks:
  internal-db:
    external: true
    name: trinity-internal-db
```

## `docker_postgres/docker-compose.yml`
```yaml
services:

  postgres:
    image: postgres:18-alpine
    container_name: postgres
    environment:
      POSTGRES_USER: trinity
      POSTGRES_PASSWORD: ${DB_PASSWORD:-}
    secrets:
      - DB_PASSWORD
    ports:
      - "127.0.0.1:5432:5432"
    volumes:
      - ./database:/var/lib/postgresql/18/docker:rw
    restart: always
    networks:
      - internal-db

  adminer:
    image: adminer:latest
    container_name: trinity-adminer
    environment:
      ADMINER_DEFAULT_SERVER: postgres
    ports:
      - "192.168.3.5:8000:8080"
    depends_on:
      - postgres
    restart: always
    networks:
      - internal-db

networks:
  internal-db:
    name: trinity-internal-db
    driver: bridge

secrets:
  DB_PASSWORD:
    file: <redacted-secret-file>
```
