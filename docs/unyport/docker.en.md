# Docker UnyPort
This page brings together Docker events corresponding to the project `UnyPort` Only.

Source selected:

- ➡️ `<deployment-root>/unyport/docker-compose.yml`

None `Dockerfile` dedicated was found for `UnyPort`. Runtime uses upstream image `golang:alpine`.

## Public summary
| Element | Public value |
| --- | --- |
| Service | `unyport` |
| Image | `golang:alpine` |
| Container | `unyport` |
| Work Directory | `/app/unyport/backend` |
| Exposed port | `8800:8800` |
| Assets frontend | `/app/unyport/frontend/public` |
| Reboot mode | `unless-stopped` |

## Volumes
| Type | Source | Destination | Role |
| --- | --- | --- | --- |
| Application code | `./unyport` | `/app/unyport` | sources backend/frontend |
| Go cache modules | `go-cache` | `/root/go/pkg/mod` | Accelerated dependencies |
| Cache Go built | `go-build-cache` | `/root/.cache/go-build` | Acceleration of recompilations |

## Public variables
| Variable | Value | Use |
| --- | --- | --- |
| `UNYPORT_ASSETS` | `/app/unyport/frontend/public` | serves frontend assets from disk in dev mode |

## Behaviour
| Phase | Action |
| --- | --- |
| Starting | `go mod tidy`, build backend, binary launch |
| Development | frontend assets served from the bounded volume |
| Production | Asset of vehicles if `UNYPORT_ASSETS` is withdrawn |
| Compression | binary compressed with `upx --lzma` |

## `docker_unyport/docker-compose.yml`
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
