# Docker UnyPort
Diese Seite bringt Docker-Events zusammen, die dem Projekt entsprechen `UnyPort` Nur.

Ausgewählte Quelle:

- ➡️ `/var/docker/docker_unyport/docker-compose.yml`

Keine `Dockerfile` gewidmet wurde gefunden für `UnyPort`Runtime verwendet Upstream-Bild `golang:alpine`.

## Öffentliche Zusammenfassung
| Element | Öffentlicher Wert |
| --- | --- |
| Dienst | `unyport` |
| Bild | `golang:alpine` |
| Container | `unyport` |
| Arbeitsverzeichnis | `/app/unyport/backend` |
| Freier Hafen | `8800:8800` |
| Frontend-Vermögenswerte | `/app/unyport/frontend/public` |
| Neustartmodus | `unless-stopped` |

## Volumen
| Art der Art | Quelle | Bestimmungsort | Rolle |
| --- | --- | --- | --- |
| Antragscode | `./unyport` | `/app/unyport` | Quellen Backend/Frontend |
| Go Cache Module | `go-cache` | `/root/go/pkg/mod` | Beschleunigte Abhängigkeiten |
| Cache Go gebaut | `go-build-cache` | `/root/.cache/go-build` | Beschleunigung der Rekompilierungen |

## Öffentliche Variablen
| Variabel | Wert | Verwendung |
| --- | --- | --- |
| `UNYPORT_ASSETS` | `/app/unyport/frontend/public` | Serviert Frontend-Assets von Disk im Dev-Modus |

## Verhalten
| Phase | Aktion |
| --- | --- |
| Beginn | `go mod tidy`, Build Backend, Binärstart |
| Entwicklung | Frontend-Vermögenswerte aus dem begrenzten Volumen bedient |
| Produktion | Fahrzeugbestand, wenn `UNYPORT_ASSETS` wird zurückgezogen |
| Verdichtung | binär komprimiert mit `upx --lzma` |

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
