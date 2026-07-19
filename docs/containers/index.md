# Conteneurs

Cette page recense tous les `docker-compose.yml` et `Dockerfile` trouves dans les arbres Docker actuellement montes.

Les chemins scannes sont `TRINITY-DOCKER/var/docker` et `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER`.

Cette version publique conserve les memes manifests, mais redacte les secrets inline, les mots de passe et les chemins de fichiers secrets.

Inventaire: 32 chemins trouves, 30 contenus distincts.

## Fichiers docker-compose.yml

### `docker_dashboard/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_dashboard/docker-compose.yml`

```yaml
services:
  dashboard:
    image: golang:alpine
    container_name: dashboard
    working_dir: /app/unyport/backend
    command: sh -c "go mod tidy && go build -o ./tmp/main ./cmd/unyport && ./tmp/main"
    restart: always
    volumes:
      - ./unyport:/app/unyport
      - ./logs:/var/log/unyport
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "192.168.3.5:8899:8800"
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_demo/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_demo/docker-compose.yml`
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_demo/docker-compose.yml`

Note: Contenu identique pour les chemins ci-dessous.

```yaml
# docker-compose.yml — TRINITY / unyport
#
# DEV  : docker compose up -d
#        → compile au démarrage (cache Go actif = rapide dès le 2e lancement)
#        → frontend live via volume bind mount + UNYPORT_ASSETS (refresh navigateur)
#        → .go modifié → docker compose restart unyport
#
# PROD : commenter UNYPORT_ASSETS → assets embed + strip + UPX LZMA

services:
  unyport_demo:
    image: golang:alpine
    container_name: unyport_demo
    working_dir: /app/unyport/backend
    environment:
      # DEV  : assets servis depuis le disque (live, refresh navigateur)
      # PROD : commenter cette ligne → assets embed + compression maximale
      UNYPORT_ASSETS: /app/unyport/frontend/public
    command:
      - sh
      - -c
      - |
        go mod tidy &&
        echo ">>> PROD build : embedding assets..." &&
        rm -rf ./tmp/unyport &&
        cp -r ../frontend/public ./server/assets &&
        CGO_ENABLED=0 go build -tags prod -trimpath -ldflags "-s -w" \
          -o ./tmp/unyport ./cmd/unyport &&
        rm -rf ./server/assets &&
        apk add --no-cache upx &&
        upx --lzma ./tmp/unyport &&
        echo ">>> PROD done." && ls -lh ./tmp/unyport &&
        echo ">>> DEV build : assets served from disk..." &&
        CGO_ENABLED=0 go build -o ./tmp/main ./cmd/unyport &&
        echo ">>> DEV done." && ls -lh ./tmp/main &&
        ./tmp/main
    restart: unless-stopped
    volumes:
      - ./unyport:/app/unyport
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "192.168.3.5:8880:8800"
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_docs/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_docs/docker-compose.yml`

```yaml
services:
  docs:
    build:
      context: ./
    image: trinity-docs:latest
    container_name: trinity-docs
    environment:
      DOCS_SRC: /work
      SITE_OUT: /data/site
      PDF_OUT: /data/pdfs
      BUILD_INTERVAL: 30
      DOCS_INTERNAL_WATCHER: "0"
      DOCS_BUILD_ON_START: "0"
      NO_MKDOCS_2_WARNING: "1"
    volumes:
      - ./docs_artifacts:/data:rw
    command: ["sh", "/srv/run.sh"]
    ports:
      - "192.168.3.5:9000:9000"
    restart: always
```

### `docker_ide/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_ide/docker-compose.yml`

```yaml
services:
  vscode:
    build:
      context: .
      dockerfile: Dockerfile
    image: trinity-code-server-alpine:latest
    container_name: vscode
    ports:
      - "192.168.3.5:5734:8080"
    extra_hosts:
      - "host.docker.internal:host-gateway"
    user: root
    volumes:
      - /var/docker/docker_ide/config:/root/.config
      - /mnt/SSHFS/TRINITY-CLOUD/mnt/ENTREPRISE/SERVER/TRINITY/codex:/root/.codex
      - /var/docker/docker_ide/project:/home/coder
      - /var/docker/docker_ide/extensions:/root/.local/share/code-server/extensions
      - /var/docker/docker_ide/user:/root/.local/share/code-server/User
      - /var/docker/docker_ide/ssh/.ssh:/root/.ssh
      - /mnt/SSHFS/ALPINE-XEN:/home/coder/ALPINE-XEN
      - /mnt/SSHFS/ALPINE-BASTION:/home/coder/ALPINE-BASTION
      - /mnt/SSHFS/TRINITY-CLOUD:/home/coder/TRINITY-CLOUD
      - /mnt/SSHFS/TRINITY-EDGE:/home/coder/TRINITY-EDGE
      - /mnt/SSHFS/TRINITY-SERVER:/home/coder/TRINITY-SERVER
      #- /mnt/SSHFS/TRINITY-VPN:/home/coder/TRINITY-VPN
      - /mnt/SSHFS/TRINITY-XEN:/home/coder/TRINITY-XEN
      - /var/run/docker.sock:/var/run/docker.sock
      - /:/home/coder/TRINITY-DOCKER
    secrets:
      - PASSWORD_VSCODE

    command:
      - --bind-addr
      - 0.0.0.0:8080
      - --disable-telemetry
      - --disable-update-check

    restart: always

secrets:
  PASSWORD_VSCODE:
    file: <redacted-secret-file>
```

### `docker_postgres/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_postgres/docker-compose.yml`

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

### `docker_stage/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_stage/docker-compose.yml`

```yaml
services:
  trinity:
    image: oven/bun:alpine
    container_name: trinity-stage
    environment:
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: alpine_test
      DB_USER: trinity
      DB_PASSWORD: ${DB_PASSWORD:-}
      STORAGE_ROOT: "/mnt/storage/alpine/conversations"
      APP_PORT: 3000
      APP_HOST: 0.0.0.0
      APP_URL: ${APP_URL:-http://192.168.3.5:8899}
      APP_ENV_MODE: ${APP_ENV_MODE:-test}
      APP_COOKIE_DOMAIN: ${APP_COOKIE_DOMAIN:-}
      APP_COOKIE_SECURE: ${APP_COOKIE_SECURE:-0}
      APP_ALICE_FREE_ACCESS: ${APP_ALICE_FREE_ACCESS:-1}
      DB_BACKUP_DIR: /usr/src/sql/backups
      DB_BACKUP_SCHEDULE_UTC: ${DB_BACKUP_SCHEDULE_UTC:-02:17}
      DB_BACKUP_RETENTION_DAYS: ${DB_BACKUP_RETENTION_DAYS:-30}
      DB_BACKUP_SCHEDULER_ENABLED: ${DB_BACKUP_SCHEDULER_ENABLED:-0}
      TRINITY_WIRE_TRANSFER_ENABLED: ${TRINITY_WIRE_TRANSFER_ENABLED:-1}
      SHOP_IBAN: ${SHOP_IBAN:-}
      SHOP_BIC: ${SHOP_BIC:-}
      PAYPAL_API_BASE: ${PAYPAL_API_BASE:-}
      MOLLIE_API_BASE: ${MOLLIE_API_BASE:-}
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
      - "192.168.3.5:8899:3000"
    volumes:
      - /var/docker/docker_stage/app:/usr/src/app:rw
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

### `docker_trinity/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_trinity/docker-compose.yml`

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

### `docker_unydesk/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_unydesk/docker-compose.yml`

```yaml
# docker-compose.yml — TRINITY / unydesk
#
# DEV  : docker compose up -d
#        -> compile au démarrage avec cache Go actif
#        -> frontend live via volume bind mount + UNYDESK_ASSETS
#        -> HTML/CSS modifiés -> refresh navigateur, sans rebuild
#        -> .go modifié -> docker compose restart unydesk
#
# BUILD: binaires stripés + UPX --best --lzma pour le serveur et les hosts.
#        -> set UNYDESK_UPX_ULTRA=1 for slower release builds with maximum UPX search.

services:
  unydesk:
    image: golang:alpine
    container_name: unydesk
    working_dir: /app/unydesk/backend
    environment:
      UNYDESK_ASSETS: /app/unydesk/frontend/public
      SERVER_URL: "${SERVER_URL:-}"
      UNYDESK_FFMPEG_WINDOWS_AMD64_URL: "${UNYDESK_FFMPEG_WINDOWS_AMD64_URL:-https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip}"
      UNYDESK_STUN_URLS: "${UNYDESK_STUN_URLS:-}"
      UNYDESK_TURN_URLS: "${UNYDESK_TURN_URLS:-}"
      UNYDESK_TURN_USERNAME: "${UNYDESK_TURN_USERNAME:-}"
      UNYDESK_TURN_CREDENTIAL: "${UNYDESK_TURN_CREDENTIAL:-}"
      UNYDESK_ENABLE_PAIRED_UPX: "${UNYDESK_ENABLE_PAIRED_UPX:-1}"
      UNYDESK_PACK_EMBEDDED_FFMPEG: "${UNYDESK_PACK_EMBEDDED_FFMPEG:-1}"
      UNYDESK_UPX_FLAGS: "${UNYDESK_UPX_FLAGS:-}"
      UNYDESK_UPX_ULTRA: "${UNYDESK_UPX_ULTRA:-0}"
    command:
      - sh
      - -c
      - |
        apk add --no-cache curl upx unzip zip &&
        GO_BUILD_FLAGS="-trimpath -buildvcs=false" &&
        LDFLAGS_BASE="-s -w -buildid=" &&
        UPX_FLAGS="$${UNYDESK_UPX_FLAGS}" &&
        if [ -z "$${UPX_FLAGS}" ]; then UPX_FLAGS="--best --lzma"; fi &&
        if [ "$${UNYDESK_UPX_ULTRA:-0}" = "1" ]; then UPX_FLAGS="--ultra-brute --lzma"; fi &&
        go install github.com/josephspurrier/goversioninfo/cmd/goversioninfo@latest &&
        mkdir -p ./tmp/host-downloads &&
        rm -f ./tmp/unydesk ./tmp/host-downloads/SHA256SUMS ./tmp/host-downloads/unydesk-host-* ./tmp/host-downloads/*.zip &&
        rm -f ./cmd/unydesk-host/resource.syso &&
        FFMPEG_CACHE_DIR="./tmp/ffmpeg-cache/windows-amd64" &&
        FFMPEG_EMBED_DIR="./cmd/unydesk-host/embedded/ffmpeg/windows-amd64" &&
        FFMPEG_EMBED_GZ="$${FFMPEG_EMBED_DIR}/ffmpeg.exe.gz" &&
        FFMPEG_EMBED_MODE="$${UNYDESK_PACK_EMBEDDED_FFMPEG:-1}:$${UPX_FLAGS}" &&
        FFMPEG_EMBED_MARKER="$${FFMPEG_EMBED_GZ}.mode" &&
        mkdir -p "$${FFMPEG_CACHE_DIR}" "$${FFMPEG_EMBED_DIR}" &&
        if [ ! -s "$${FFMPEG_EMBED_GZ}" ] || [ "$$(cat "$${FFMPEG_EMBED_MARKER}" 2>/dev/null || true)" != "$${FFMPEG_EMBED_MODE}" ]; then \
          echo ">>> FFmpeg Windows amd64 embed cache missing; preparing monolithic host payload..." && \
          if [ ! -s "$${FFMPEG_CACHE_DIR}/ffmpeg.exe" ]; then \
            curl -fL --retry 3 --retry-delay 2 -o "$${FFMPEG_CACHE_DIR}/ffmpeg-win64.zip" "$${UNYDESK_FFMPEG_WINDOWS_AMD64_URL}" && \
            unzip -p "$${FFMPEG_CACHE_DIR}/ffmpeg-win64.zip" "*/bin/ffmpeg.exe" > "$${FFMPEG_CACHE_DIR}/ffmpeg.exe.tmp" && \
            test -s "$${FFMPEG_CACHE_DIR}/ffmpeg.exe.tmp" && \
            mv "$${FFMPEG_CACHE_DIR}/ffmpeg.exe.tmp" "$${FFMPEG_CACHE_DIR}/ffmpeg.exe"; \
          fi && \
          FFMPEG_EMBED_SOURCE="$${FFMPEG_CACHE_DIR}/ffmpeg.exe" && \
          if [ "$${UNYDESK_PACK_EMBEDDED_FFMPEG:-1}" = "1" ]; then \
            echo ">>> Packing embedded FFmpeg with UPX $${UPX_FLAGS}..." && \
            cp "$${FFMPEG_CACHE_DIR}/ffmpeg.exe" "$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe.tmp" && \
            if upx $${UPX_FLAGS} "$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe.tmp"; then \
              mv "$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe.tmp" "$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe" && \
              FFMPEG_EMBED_SOURCE="$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe"; \
            else \
              echo ">>> UPX skipped embedded FFmpeg; keeping plain FFmpeg payload." && \
              rm -f "$${FFMPEG_CACHE_DIR}/ffmpeg-upx.exe.tmp"; \
            fi; \
          fi && \
          gzip -n -9 -c "$${FFMPEG_EMBED_SOURCE}" > "$${FFMPEG_EMBED_GZ}.tmp" && \
          test -s "$${FFMPEG_EMBED_GZ}.tmp" && \
          mv "$${FFMPEG_EMBED_GZ}.tmp" "$${FFMPEG_EMBED_GZ}" && \
          printf "%s" "$${FFMPEG_EMBED_MODE}" > "$${FFMPEG_EMBED_MARKER}.tmp" && \
          mv "$${FFMPEG_EMBED_MARKER}.tmp" "$${FFMPEG_EMBED_MARKER}"; \
        fi &&
        cd ./cmd/unydesk-host &&
        $(go env GOPATH)/bin/goversioninfo -64 -icon ../../../frontend/public/assets/favicon.ico -application-icon ../../../frontend/public/assets/favicon.ico -o resource.syso versioninfo.json &&
        cd /app/unydesk/backend &&
        HOST_LDFLAGS="$${LDFLAGS_BASE}" &&
        WINDOWS_HOST_LDFLAGS="-H=windowsgui $${HOST_LDFLAGS}" &&
        CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build $${GO_BUILD_FLAGS} -ldflags "$${HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-linux-amd64 ./cmd/unydesk-host &&
        CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build $${GO_BUILD_FLAGS} -ldflags "$${HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-linux-arm64 ./cmd/unydesk-host &&
        CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build $${GO_BUILD_FLAGS} -tags ffmpegembed -ldflags "$${WINDOWS_HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-windows-amd64.exe ./cmd/unydesk-host &&
        CGO_ENABLED=0 GOOS=windows GOARCH=arm64 go build $${GO_BUILD_FLAGS} -ldflags "$${WINDOWS_HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-windows-arm64.exe ./cmd/unydesk-host &&
        CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build $${GO_BUILD_FLAGS} -ldflags "$${HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-darwin-amd64 ./cmd/unydesk-host &&
        CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build $${GO_BUILD_FLAGS} -ldflags "$${HOST_LDFLAGS}" -o ./tmp/host-downloads/unydesk-host-darwin-arm64 ./cmd/unydesk-host &&
        for binary in \
          ./tmp/host-downloads/unydesk-host-linux-amd64 \
          ./tmp/host-downloads/unydesk-host-linux-arm64; do \
          upx $${UPX_FLAGS} "$$binary"; \
        done &&
        cd ./tmp/host-downloads &&
        zip -9 -X -q -j unydesk-host-linux-amd64.zip unydesk-host-linux-amd64 &&
        zip -9 -X -q -j unydesk-host-linux-arm64.zip unydesk-host-linux-arm64 &&
        zip -9 -X -q -j unydesk-host-windows-amd64.zip unydesk-host-windows-amd64.exe &&
        zip -9 -X -q -j unydesk-host-windows-arm64.zip unydesk-host-windows-arm64.exe &&
        zip -9 -X -q -j unydesk-host-macos-amd64.zip unydesk-host-darwin-amd64 &&
        zip -9 -X -q -j unydesk-host-macos-arm64.zip unydesk-host-darwin-arm64 &&
        sha256sum unydesk-host-linux-amd64 unydesk-host-linux-arm64 unydesk-host-windows-amd64.exe unydesk-host-windows-arm64.exe unydesk-host-darwin-amd64 unydesk-host-darwin-arm64 unydesk-host-linux-amd64.zip unydesk-host-linux-arm64.zip unydesk-host-windows-amd64.zip unydesk-host-windows-arm64.zip unydesk-host-macos-amd64.zip unydesk-host-macos-arm64.zip > SHA256SUMS &&
        cd /app/unydesk/backend &&
        CGO_ENABLED=0 go build $${GO_BUILD_FLAGS} -ldflags "$${LDFLAGS_BASE}" -o ./tmp/unydesk ./cmd/unydesk &&
        upx $${UPX_FLAGS} ./tmp/unydesk &&
        echo ">>> BUILD done." && ls -lh ./tmp/unydesk ./tmp/host-downloads/unydesk-host-windows-amd64.exe &&
        echo ">>> DEV frontend served from disk: $${UNYDESK_ASSETS}" &&
        ./tmp/unydesk
    restart: unless-stopped
    volumes:
      - /var/docker/docker_unydesk/unydesk:/app/unydesk
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "192.168.3.5:8890:8890"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_unyport/docker-compose.yml`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_unyport/docker-compose.yml`

```yaml
# docker-compose.yml — TRINITY / unyport
#
# DEV  : docker compose up -d
#        → compile au démarrage (cache Go actif = rapide dès le 2e lancement)
#        → frontend live via volume bind mount + UNYPORT_ASSETS (refresh navigateur)
#        → .go modifié → docker compose restart unyport
#
# PROD : commenter UNYPORT_ASSETS → assets embed + strip + UPX LZMA

services:
  unyport:
    image: golang:alpine
    container_name: unyport
    working_dir: /app/unyport/backend
    environment:
      # DEV  : assets servis depuis le disque (live, refresh navigateur)
      # PROD : commenter cette ligne → assets embed + compression maximale
      UNYPORT_ASSETS: /app/unyport/frontend/public
    command:
      - sh
      - -c
      - |
        go mod tidy &&
        echo ">>> PROD build : embedding assets..." &&
        rm -rf ./tmp/unyport &&
        cp -r ../frontend/public ./server/assets &&
        CGO_ENABLED=0 go build -tags prod -trimpath -ldflags "-s -w" \
          -o ./tmp/unyport ./cmd/unyport &&
        rm -rf ./server/assets &&
        apk add --no-cache upx &&
        upx --lzma ./tmp/unyport &&
        echo ">>> PROD done." && ls -lh ./tmp/unyport &&
        echo ">>> DEV build : assets served from disk..." &&
        CGO_ENABLED=0 go build -o ./tmp/main ./cmd/unyport &&
        echo ">>> DEV done." && ls -lh ./tmp/main &&
        ./tmp/main
    restart: unless-stopped
    volumes:
      - ./unyport:/app/unyport
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "8800:8800"
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_acf/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_acf/docker-compose.yml`

```yaml
services:
# Docker Alpine Dashboard
  acf-dashboard:
    build:
      context: ./setup
      network: host
    restart: always
    volumes:
      - ./nginx/default.conf:/etc/nginx/http.d/default.conf:ro
      - ./acf/app:/usr/share/acf/app:ro
      - ./acf/lib:/usr/share/acf/lib:ro
      - ./acf/www/cgi-bin/:/usr/share/acf/www/cgi-bin:ro
      - ./acf/www/js:/usr/share/acf/www/js:ro
      - ./acf/www/index.html:/usr/share/acf/www/index.html:ro
      - ./acf/www/userskins:/usr/share/acf/www/userskins:ro
      - ./acf/www/skins/static:/usr/share/acf/www/skins/static:ro
      - ./acf/www/skins/dashboard/css:/usr/share/acf/www/skins/dashboard/css:ro
      - ./acf/www/skins/dashboard/img:/usr/share/acf/www/skins/dashboard/img:ro
      - ./acf/www/skins/dashboard/logs:/usr/share/acf/www/skins/dashboard/logs
      - ./acf/www/skins/dashboard/dashboard.css:/usr/share/acf/www/skins/dashboard/dashboard.css:ro
      - ./acf/www/skins/dashboard/dashboard.js:/usr/share/acf/www/skins/dashboard/dashboard.js:ro
      - ./acf/www/skins/dashboard/favicon.ico:/usr/share/acf/www/skins/dashboard/favicon.ico:ro
      - ./setup/acf.conf:/etc/acf/acf.conf:ro
      - <redacted-passwd-source>:/etc/acf/passwd:ro
      - ./setup/roles:/etc/acf/roles:ro
      - /mnt/data:/mnt/data:ro
      - /mnt/backup:/mnt/backup:ro
      - /media:/media:ro
      - /tmp:/mnt/tmp:rw
    environment:
      - TZ=Europe/Paris
      - 'ADVERTISE_IP=http://192.168.2.1:8090/'
    ports:
      - "192.168.2.1:8002:80"
    deploy:
      resources:
        limits:
          memory: 1024M
    storage_opt:
      size: 1024M
```

### `docker_alpine-hub/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_alpine-hub/docker-compose.yml`

```yaml
services:
  dashboard:
    image: alpine:latest
    container_name: alpine-dashboard
    command: ["/usr/bin/alpine-dashboard"]
    ports:
      - "8888:8080"
    volumes:
      - ./alpine-dashboard:/usr/bin/alpine-dashboard:ro
      - ./apps.d:/app/apps.d:ro
      - ./static:/app/static:ro
      - ./config:/etc/alpine-dashboard:ro
    working_dir: /app
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:8080/api/memory"]
      interval: 30s
      timeout: 5s
      retries: 3
```

### `docker_alpine/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_alpine/docker-compose.yml`

```yaml
services:
  alpine-fr:
    image: oven/bun:alpine
    container_name: alpine-fr
    environment:
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: alpine
      DB_USER: trinity
      STORAGE_ROOT: "/mnt/storage/alpine/conversations"
      APP_PORT: 3000
      APP_HOST: 0.0.0.0
      APP_URL: https://trinity-net.com
      APP_ENV_MODE: ${APP_ENV_MODE:-test}
      TRINITY_WIRE_TRANSFER_ENABLED: ${TRINITY_WIRE_TRANSFER_ENABLED:-1}
      SHOP_IBAN: ${SHOP_IBAN:-}
      SHOP_BIC: ${SHOP_BIC:-}
      PAYPAL_API_BASE: ${PAYPAL_API_BASE:-}
      MOLLIE_API_BASE: ${MOLLIE_API_BASE:-}
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
      - ./storage/alpine:/mnt/storage/alpine:rw
      - ./app:/usr/src/app:rw
      - <redacted-mail-config>:/etc/msmtprc:ro
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

### `docker_cloud/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_cloud/docker-compose.yml`

```yaml
services:
  filebrowser:
    container_name: filebrowser
    restart: always
    image: 'filebrowser/filebrowser:latest'
    user: "1001:1001"
    ports:
      - "192.168.2.1:8003:80"
    environment:
      - TZ=Europe/Paris
      - LC_ALL=fr_FR.UTF-8
    volumes:
      - "/mnt:/srv"
      - "./database/filebrowser.db:/database.db"
      - "./config:/config"
      - "./custom:/branding"
    deploy:
      resources:
        limits:
          memory: 2048M
    storage_opt:
      size: 1G
```

### `docker_dashboard/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_dashboard/docker-compose.yml`

```yaml
services:
  dashboard:
    image: golang:alpine
    container_name: dashboard
    working_dir: /app/unyport/backend
    command: sh -c "go mod tidy && go build -o ./tmp/main ./cmd/unyport && ./tmp/main"
    restart: unless-stopped
    volumes:
      - ./unyport:/app/unyport
      - ./logs:/var/log/unyport
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "192.168.3.5:8899:8800"
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_docs/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_docs/docker-compose.yml`

```yaml
services:
  docs:
    build:
      context: ./
    image: trinity-docs:latest
    container_name: trinity-docs
    environment:
      DOCS_SRC: /work
      SITE_OUT: /data/site
      PDF_OUT: /data/pdfs
      BUILD_INTERVAL: 30
    volumes:
      - ./docs_data:/work:rw
      - ./docs_artifacts:/data:rw
      - ./docs_service:/srv:ro
    command: >
      sh -c "
        echo '[docs] watcher started';
        while true; do
          echo '[docs] building PUBLIC at '$(date);
          mkdocs build -f /work/public/mkdocs.yml -d /data/site/public || echo '[docs] public build failed';

          echo '[docs] building ADMIN at '$(date);
          mkdocs build -f /work/admin/mkdocs.yml -d /data/site/admin || echo '[docs] admin build failed';

          sleep $$BUILD_INTERVAL;
        done
      "
    ports:
      - "9000:9000"
    restart: always
```

### `docker_ide/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_ide/docker-compose.yml`

```yaml
services:
  vscode:
    image: codercom/code-server:latest
    ports:
      - "192.168.3.5:5734:8080"
    extra_hosts:
      - "host.docker.internal:host-gateway"
    environment:
      - PASSWORD=<redacted>
    user: root
    volumes:
      - /var/docker/docker_ide/config:/root/.config
      - /var/docker/docker_ide/project:/home/coder
      - /var/docker/docker_ide/extensions:/root/.local/share/code-server/extensions
      - /var/docker/docker_ide/user:/root/.local/share/code-server/User
      - /var/docker/docker_ide/ssh/.ssh:/root/.ssh/
      - /mnt/SSHFS/TRINITY-CLOUD:/home/coder/TRINITY-CLOUD
      - /mnt/SSHFS/TRINITY-SERVER:/home/coder/TRINITY-SERVER
      - /mnt/SSHFS/TRINITY-VPN:/home/coder/TRINITY-VPN
      - /:/home/coder/TRINITY-DOCKER
    entrypoint: /bin/sh
    command: >
      /usr/bin/code-server
      --host 0.0.0.0
      --disable-telemetry
      --disable-update-check
    restart: always
```

### `docker_postgres/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_postgres/docker-compose.yml`

```yaml
services:

  postgres:
    image: postgres:18-alpine
    container_name: postgres
    environment:
      POSTGRES_USER: trinity
      POSTGRES_PASSWORD: <redacted>
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
    restart: unless-stopped
    networks:
      - internal-db

networks:
  internal-db:
    name: trinity-internal-db
    driver: bridge
```

### `docker_unyport/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_unyport/docker-compose.yml`

```yaml
# docker-compose.yml — TRINITY / unyport
#
# DEV  : docker compose up -d
#        → compile au démarrage (cache Go actif = rapide dès le 2e lancement)
#        → frontend live via volume bind mount + UNYPORT_ASSETS (refresh navigateur)
#        → .go modifié → docker compose restart unyport
#
# PROD : commenter UNYPORT_ASSETS → assets embed dans le binaire

services:
  unyport:
    image: golang:alpine
    container_name: unyport
    working_dir: /app/unyport/backend
    environment:
      # DEV  : assets servis depuis le disque (live, refresh navigateur)
      # PROD : commenter cette ligne → assets embed dans le binaire
      UNYPORT_ASSETS: /app/unyport/frontend/public
    command:
      - sh
      - -c
      - |
        go mod tidy &&
        CGO_ENABLED=0 go build -trimpath -ldflags "-s -w" \
          -o ./tmp/main ./cmd/unyport &&
        ./tmp/main
    restart: unless-stopped
    volumes:
      - ./unyport:/app/unyport
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
    ports:
      - "192.168.3.5:8800:8800"
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  go-cache:
  go-build-cache:
```

### `docker_wiki/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_wiki/docker-compose.yml`

```yaml
services:
  db:
    image: postgres:17-alpine
    environment:
      POSTGRES_DB: Tr1n1ty_Wiki
      POSTGRES_USER: adm1n1strat0r
      POSTGRES_PASSWORD: <redacted>
    restart: always
    volumes:
      - db-data:/var/lib/postgresql/data
    deploy:
      resources:
        limits:
          memory: 2048M
    storage_opt:
      size: 1G
#  adminer:
#    container_name: wiki-adminer
#    image: adminer:latest
#    depends_on:
#      - db
#    environment:
#      DB_TYPE: postgres
#      DB_HOST: db
#      DB_PORT: 5432
#      DB_NAME: Tr1n1ty_Wiki
#      DB_USER: adm1n1strat0r
#      DB_PASS: <redacted>
#    restart: unless-stopped
#    ports:
#      - "192.168.2.1:3001:5432"

  wiki:
    user: 0:0
    image: requarks/wiki:latest
    depends_on:
      - db
    environment:
      DB_TYPE: postgres
      DB_HOST: db
      DB_PORT: 5432
      DB_NAME: Tr1n1ty_Wiki
      DB_USER: adm1n1strat0r
      DB_PASS: <redacted>
    restart: always
    volumes:
     - ./src/custom.css:/wiki/assets/css/custom.bba3ccb5a4f0f6fd2dd6.css
     - ./src/login.css:/wiki/assets/css/login.7cbc30b8f0904a3c4e17.css
     - ./src/img:/wiki/assets/img
     - ./src/export:/wiki/export
    ports:
      - "192.168.2.1:8004:3000"
    hostname: TRIИITY
    deploy:
      resources:
        limits:
          memory: 2048M
    storage_opt:
      size: 1G

volumes:
  db-data:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: '/var/docker/docker_wiki/volumes/db-data'
  db-wiki:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: '/var/docker/docker_wiki/volumes/db-wiki'
```

### `tools/goaccess/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/tools/goaccess/docker-compose.yml`

```yaml
services:
  goaccess:
    image: allinurl/goaccess
    container_name: goaccess
    volumes:
      - /var/log/nginx:/logs:ro
      - /srv/goaccess:/report
    entrypoint: ["sh", "-c", "while true; do goaccess /logs/access.log --log-format=COMBINED -o /report/index.html; sleep 300; done"]
    restart: unless-stopped
```

### `trinity/trinity-adminer/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-adminer/docker-compose.yml`

```yaml
services:
  trinity-adminer:
    image: adminer:latest
    container_name: trinity-adminer
    restart: unless-stopped
    environment:
      ADMINER_DEFAULT_SERVER: trinity-database
    ports:
      - "3333:8080"
    restart: always
    networks:
      - trinity-database-network

networks:
  trinity-database-network:
    external: true
```

### `trinity/trinity-backend/apps/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-backend/apps/docker-compose.yml`

```yaml
services:

 trinity-backend-apps:
    image: oven/bun:alpine
    container_name: trinity-backend-apps
    restart: unless-stopped
    environment:
      APP_PORT: 3000
      APP_HOST: 0.0.0.0
      DB_HOST: trinity-database
      DB_NAME: trn-tracker
      DB_USER: trn-sysadmin
      DB_PASSWORD: <redacted>
    ports:
      - "1111:3000"
    working_dir: /usr/src/app
    command: ["/bin/sh", "-c", "bun install && bun --hot index.ts"]
    volumes:
      - ./backend:/usr/src/app:rw
    networks:
      - trinity-database-network

networks:
  trinity-database-network:
    external: true
```

### `trinity/trinity-backend/device/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-backend/device/docker-compose.yml`

```yaml
services:

 trinity-backend-device:
    image: oven/bun:alpine
    container_name: trinity-backend-device
    restart: unless-stopped
    environment:
      APP_PORT: 3000
      APP_HOST: 0.0.0.0
      DB_HOST: trinity-database
      DB_NAME: trn-tracker
      DB_USER: trn-sysadmin
      DB_PASSWORD: <redacted>
    ports:
      - "1122:3000"
    working_dir: /usr/src/app
    command: ["/bin/sh", "-c", "bun install && bun --hot index.ts"]
    volumes:
      - ./backend:/usr/src/app:rw
    networks:
      - trinity-database-network

networks:
  trinity-database-network:
    external: true
```

### `trinity/trinity-database/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-database/docker-compose.yml`

```yaml
services:
  trinity-database:
    image: postgres:18-alpine
    container_name: trinity-database
    restart: unless-stopped
    environment:
      POSTGRES_DB: trn-tracker
      POSTGRES_USER: trn-sysadmin
      POSTGRES_PASSWORD: <redacted>
    volumes:
      - ./database:/var/lib/postgresql/data:rw
    ports:
      - "2222:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U trn-sysadmin -d trn-tracker"]
      interval: 10s
      timeout: 5s
      retries: 5
    deploy:
      resources:
        limits:
          cpus: "1.0"
          memory: 1G
    networks:
      - trinity-database-network

networks:
  trinity-database-network:
    external: true
    
volumes:
    database:
```

### `trinity/trinity-docs/docker-compose.yml`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-docs/docker-compose.yml`

```yaml
services:
  docs:
    build:
      context: ./
    image: trinity-docs:latest
    container_name: trinity-docs
    environment:
      DOCS_SRC: /work
      SITE_OUT: /data/site
      PDF_OUT: /data/pdfs
      BUILD_INTERVAL: 30
    volumes:
      - ./docs_data:/work:rw
      - ./docs_artifacts:/data:rw
      - ./docs_service:/srv:ro
    command: >
      sh -c "
        echo '[docs] watcher started';
        while true; do
          echo '[docs] building PUBLIC at '$(date);
          mkdocs build -f /work/public/mkdocs.yml -d /data/site/public || echo '[docs] public build failed';

          echo '[docs] building ADMIN at '$(date);
          mkdocs build -f /work/admin/mkdocs.yml -d /data/site/admin || echo '[docs] admin build failed';

          sleep $$BUILD_INTERVAL;
        done
      "
    ports:
      - "127.0.0.1:9000:9000"
    restart: always
```

## Dockerfiles

### `docker_docs/Dockerfile`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_docs/Dockerfile`

```dockerfile
# ---------- builder ----------
FROM python:3.13-alpine AS builder

WORKDIR /build

RUN apk add --no-cache \
  build-base \
  python3-dev \
  libffi-dev \
  openssl-dev \
  cairo-dev \
  pango-dev \
  gdk-pixbuf-dev \
  harfbuzz-dev \
  fribidi-dev

COPY requirements-docs.txt /build/requirements-docs.txt

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /build/requirements-docs.txt

# ---------- runtime ----------
FROM python:3.13-alpine

WORKDIR /srv

ENV NO_MKDOCS_2_WARNING=1 \
    PYTHONUNBUFFERED=1

RUN apk add --no-cache \
  ca-certificates \
  cairo \
  pango \
  gdk-pixbuf \
  harfbuzz \
  fribidi \
  fontconfig \
  ttf-dejavu \
  shared-mime-info \
  && update-ca-certificates

COPY --from=builder /usr/local /usr/local
COPY docs_data/ /work/
COPY docs_service/ /srv/

EXPOSE 9000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "9000"]
```

### `docker_ide/Dockerfile`

Chemins:
- `TRINITY-DOCKER/var/docker/docker_ide/Dockerfile`

```dockerfile
FROM node:22-alpine

ENV PYTHON=/usr/bin/python3

RUN apk --no-cache upgrade \
    && apk --no-cache add \
        alpine-sdk \
        bash \
        bash-completion \
        bind-tools \
        ca-certificates \
        curl \
        docker-cli \
        docker-cli-compose \
        exiftool \
        fail2ban \
        fd \
        file \
        ffmpeg \
        git \
        go \
        iproute2 \
        iputils \
        jq \
        krb5-dev \
        libc6-compat \
        less \
        libstdc++ \
        lsof \
        make \
        nano \
        ncdu \
        netcat-openbsd \
        openssh-client \
        postgresql-client \
        procps \
        psmisc \
        py3-pip \
        py3-pillow \
        py3-scikit-learn \
        py3-scipy \
        py3-opencv \
        py3-onnxruntime \
        py3-virtualenv \
        py3-numpy \
        python3 \
        ripgrep \
        rsync \
        shellcheck \
        sqlite \
        strace \
        tree \
        tesseract-ocr \
        tesseract-ocr-data-eng \
        tesseract-ocr-data-fra \
        tzdata \
        unzip \
        perl \
        vim \
        wget \
        yq \
        zip \
    && ln -sf /usr/bin/python3 /usr/local/bin/python \
    && ln -sf /usr/bin/fd /usr/local/bin/fdfind \
    && printf '%s\n' '#!/usr/bin/env sh' 'exec docker compose "$@"' > /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose \
    && python3 -m pip install --no-cache-dir --break-system-packages \
        ImageHash \
        pytesseract \
        scikit-image \
    && npm install -g --ignore-scripts code-server \
    && cd /usr/local/lib/node_modules/code-server \
    && npm_config_unsafe_perm=true npm run postinstall \
    && npm cache clean --force \
    && curl -fsSL https://bun.sh/install | BUN_INSTALL=/usr/local bash \
    && bun add -g hono create-hono postgres

ENV PATH="/root/.bun/bin:${PATH}"

RUN ln -sf /root/.bun/bin/create-hono /usr/local/bin/create-hono

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["--bind-addr", "0.0.0.0:8080", "--disable-telemetry", "--disable-update-check"]
```

### `docker_acf/nginx/Dockerfile`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_acf/nginx/Dockerfile`

```dockerfile
# Nginx

FROM nginx:mainline-alpine

ENV USER=docker
ENV UID=1002
ENV GID=1002

RUN addgroup \
    --gid "$GID" \
	"$USER"

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "$(pwd)" \
    --ingroup "$USER" \
    --no-create-home \
    --uid "$UID" \
    "$USER"

RUN apk add --no-cache --virtual .build-deps nano

EXPOSE 8080 8443
 
CMD ["nginx", "-g", "daemon off;"]
```

### `docker_acf/setup/Dockerfile`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_acf/setup/Dockerfile`

```dockerfile
# Alpine ACF Dashboard

FROM alpine:latest

RUN rm -rvf /etc/apk/repositories \
&& touch /etc/apk/repositories

RUN echo https://dl-cdn.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories \
&& echo https://dl-cdn.alpinelinux.org/alpine/edge/community  >> /etc/apk/repositories \
&& echo https://dl-cdn.alpinelinux.org/alpine/edge/testing  >> /etc/apk/repositories

RUN apk update --no-cache
RUN apk upgrade --no-cache 

RUN apk add --no-cache alpine-conf \
openssh \
nginx \
fcgiwrap \
tzdata \
lua5.4 \
lua5.4-libs \
lua5.4-md5 \
haserl-lua5.4 \
git

ENV TZ=Europe/Paris

RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime

RUN echo "root:<redacted>" | chpasswd

RUN setup-acf \
&& setup-interfaces -a

RUN rm -rf /etc/nginx/nginx.conf \
&& rm -rf /etc/nginx/http.d/default.conf

RUN mkdir /etc/nginx/ssl \
&& mkdir /etc/nginx/cache \
&& mkdir /etc/nginx/cache/acf

ADD server.pem /etc/nginx/ssl

ADD nginx.conf /etc/nginx

ADD default.conf /etc/nginx/http.d

RUN rm -rf /var/www/localhost/htdocs \
&& ln -s /usr/share/acf/www/ /var/www/localhost/htdocs

RUN rc-service mini_httpd stop && rc-service sshd stop

ADD subprocess.so /usr/lib/lua/5.4

RUN cd / \
&& mkdir git \
&& cd git \
&& git clone https://github.com/trinity-labs/official

RUN cd /git/official \
&& rm -rf /usr/share/acf \
&& mkdir /usr/share/acf \
&& cp -a /git/official/. /usr/share/acf \
&& apk del git mini_httpd && apk upgrade && apk update \
&& rm -rf /git

EXPOSE 80

RUN touch /run/openrc/softlevel

CMD rc-service fcgiwrap restart & \
    nginx -g "daemon off;"
```

### `docker_docs/Dockerfile`

Chemins:
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/docker_docs/Dockerfile`
- `TRINITY-CLOUD/mnt/ENTREPRISE/DOCKER/trinity/trinity-docs/Dockerfile`

Note: Contenu identique pour les chemins ci-dessous.

```dockerfile
# ---------- builder ----------
FROM python:alpine AS builder

WORKDIR /build

RUN apk add --no-cache \
  build-base \
  python3-dev \
  libffi-dev \
  openssl-dev \
  cairo-dev \
  pango-dev \
  gdk-pixbuf-dev \
  harfbuzz-dev \
  fribidi-dev

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir \
      fastapi \
      "uvicorn[standard]" \
      mkdocs \
      mkdocs-material \
      mkdocs-i18n \
      mkdocs-with-pdf \
      pygments \
      weasyprint

# ---------- runtime ----------
FROM python:alpine

WORKDIR /srv

RUN apk add --no-cache \
  ca-certificates \
  cairo \
  pango \
  gdk-pixbuf \
  harfbuzz \
  fribidi \
  fontconfig \
  ttf-dejavu \
  shared-mime-info \
  && update-ca-certificates

COPY --from=builder /usr/local /usr/local

EXPOSE 9000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "9000"]
```
