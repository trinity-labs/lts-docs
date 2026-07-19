# Docker UnyDesk
Cette page publique conserve uniquement les informations utiles pour comprendre le runtime Docker `UnyDesk`.

Source de référence :

- `/home/coder/TRINITY-DOCKER/var/docker/docker_unydesk/docker-compose.yml`

Les détails de build internes, les commandes longues de packaging et les valeurs sensibles ne sont pas publiés ici.

## Service
`UnyDesk` tourne dans un conteneur Go Alpine et compile le backend ainsi que les binaires hôtes au démarrage.

```yaml
services:
  unydesk:
    image: golang:alpine
    container_name: unydesk
    working_dir: /app/unydesk/backend
    restart: unless-stopped
    ports:
      - "192.168.3.5:8890:8890"
    volumes:
      - /var/docker/docker_unydesk/unydesk:/app/unydesk
      - go-cache:/root/go/pkg/mod
      - go-build-cache:/root/.cache/go-build
```

## Variables publiques
Les variables suivantes pilotent les aspects publics du runtime et du packaging :

```yaml
environment:
  UNYDESK_ASSETS: /app/unydesk/frontend/public
  SERVER_URL: "${SERVER_URL:-}"
  UNYDESK_FFMPEG_WINDOWS_AMD64_URL: "${UNYDESK_FFMPEG_WINDOWS_AMD64_URL:-https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip}"
  UNYDESK_STUN_URLS: "${UNYDESK_STUN_URLS:-}"
  UNYDESK_TURN_URLS: "${UNYDESK_TURN_URLS:-}"
  UNYDESK_TURN_USERNAME: "${UNYDESK_TURN_USERNAME:-}"
  UNYDESK_TURN_CREDENTIAL: "<redacted>"
  UNYDESK_ENABLE_PAIRED_UPX: "${UNYDESK_ENABLE_PAIRED_UPX:-1}"
  UNYDESK_PACK_EMBEDDED_FFMPEG: "${UNYDESK_PACK_EMBEDDED_FFMPEG:-1}"
  UNYDESK_UPX_FLAGS: "${UNYDESK_UPX_FLAGS:-}"
  UNYDESK_UPX_ULTRA: "${UNYDESK_UPX_ULTRA:-0}"
```

## Volumes
Le service s'appuie sur trois volumes principaux :

- Code applicatif : `/var/docker/docker_unydesk/unydesk:/app/unydesk`
- Cache modules Go : `go-cache:/root/go/pkg/mod`
- Cache build Go : `go-build-cache:/root/.cache/go-build`

## Exposition
Le port applicatif est exposé sur l'adresse interne Docker host :

```text
192.168.3.5:8890 -> 8890/tcp
```

L'accès public passe ensuite par le reverse proxy de la plateforme.

## Note admin
La documentation admin conserve les détails d'exploitation complets lorsque ceux-ci sont nécessaires aux mainteneurs.
