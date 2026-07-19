# Docker UnyDesk
Cette page remplace l'ancien inventaire global `Containers` pour le projet `UnyDesk` uniquement.

Source retenue :

- `/home/coder/TRINITY-DOCKER/var/docker/docker_unydesk/docker-compose.yml`

Aucun `Dockerfile` dedie n'a ete trouve pour `UnyDesk`. Le runtime utilise l'image amont `golang:alpine`.

## `docker_unydesk/docker-compose.yml`
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
