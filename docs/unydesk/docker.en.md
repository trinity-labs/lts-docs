# Docker UnyDesk
This public page only retains the information useful to understand the Docker runtime `UnyDesk`.

Source of reference:

- `/var/docker/docker_unydesk/docker-compose.yml`

Internal build details, long packaging commands and sensitive values are not published here.

## Public summary
| Element | Public value |
| --- | --- |
| Service | `unydesk` |
| Image | `golang:alpine` |
| Container | `unydesk` |
| Work Directory | `/app/unydesk/backend` |
| Internal port | `8890/tcp` |
| Bind host | `192.168.3.5:8890` |
| Reboot mode | `unless-stopped` |

## Service
`UnyDesk` spins in a Go Alpine container and compiles the backend as well as the hosts binaries on startup.

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

## Public variables
The following variables are used to control the public aspects of running and packaging:

| Variable | Public value | Use |
| --- | --- | --- |
| `UNYDESK_ASSETS` | `/app/unydesk/frontend/public` | frontend assets served from the disc |
| `SERVER_URL` | environment variable | Public URL announced at runtime |
| `UNYDESK_FFMPEG_WINDOWS_AMD64_URL` | GitHub FFmpeg URL | Download source FFmpeg Windows amd64 |
| `UNYDESK_STUN_URLS` | environment variable | Public STUN configuration |
| `UNYDESK_TURN_URLS` | environment variable | public TURN configuration |
| `UNYDESK_TURN_USERNAME` | environment variable | TURN ID |
| `UNYDESK_TURN_CREDENTIAL` | `<redacted>` | secret hidden in public doc |
| `UNYDESK_ENABLE_PAIRED_UPX` | `1` default | activates UPX packaging of associated binary |
| `UNYDESK_PACK_EMBEDDED_FFMPEG` | `1` default | embedded FFmpeg in Windows payload |
| `UNYDESK_UPX_FLAGS` | environment variable | overload UPX flags |
| `UNYDESK_UPX_ULTRA` | `0` default | activates a slower UPX mode if positioned to `1` |

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
The service is based on three main volumes:

| Type | Source | Destination | Role |
| --- | --- | --- | --- |
| Application code | `/var/docker/docker_unydesk/unydesk` | `/app/unydesk` | sources backend/frontend |
| Go cache modules | `go-cache` | `/root/go/pkg/mod` | Go addictions persisted |
| Cache Go built | `go-build-cache` | `/root/.cache/go-build` | Go compilation cache |

## Exposure
The application port is displayed on the Docker host internal address:

| Host | Container | Use |
| --- | --- | --- |
| `192.168.3.5:8890` | `8890/tcp` | internal access before reverse proxy |

```text
192.168.3.5:8890 -> 8890/tcp
```

Public access then passes through the platform's proxy reverse.

## Administrative Note
The administrative documentation shall retain the full operating details when required by the maintainers.
