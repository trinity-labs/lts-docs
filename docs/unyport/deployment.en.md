# Deployment
The repository `docker_unyport` ships both the source tree and a working containerized runtime model. The deployment story is intentionally simple: one Go application, one main listening port and a small settings directory next to the binary.

## Repository layout
The important paths are:

- `docker-compose.yml`
- `unyport/backend/`
- `unyport/frontend/public/`
- `unyport/backend/settings/settings.yaml`
- `unyport/backend/settings/config.yaml`
- `unyport/backend/settings/users.json`

## Development mode
The bundled compose file starts a `golang:alpine` container and builds the project at startup.

Development characteristics:

- Frontend assets are served from disk through `UNYPORT_ASSETS`
- Go module and build caches are mounted as named volumes
- The default exposed port is `8800:8800`
- The container resolves `host.docker.internal` through `host-gateway`

## Production mode
The same compose logic also prepares a production binary:

- Frontend assets are copied into `server/assets`
- The binary is built with `-tags prod`
- Symbols are stripped
- `upx --lzma` Is applied in the container

The README describes this as the compact package path, while development keeps live assets on disk.

## Runtime files
At runtime, `UnyPort` expects:

- `settings/settings.yaml`
- `settings/config.yaml`
- `settings/users.json`

Operationally, it also writes:

- `logs/unyport.log`
- `logs/startup-history.jsonl`
- `settings/branding.yaml` When custom branding is saved

## HTTPS and HTTP/3
By default, the application listens on plain HTTP `:8800`.

Optional HTTPS and QUIC behavior is controlled from `settings/settings.yaml`:

- `security_extra.https`
- `http3.enabled`
- `http3.cert_file`
- `http3.key_file`
- `http3.port`
- `http3.redirect_http`

When HTTP/3 is enabled correctly, `UnyPort` can serve TLS on the configured port and redirect `:8800` toward that TLS listener.

## Reverse proxy and first login
For Internet-facing deployments, the usual pattern is:

- Bind `UnyPort` locally or to a controlled host address
- Put Nginx or another reverse proxy in front
- Enable secure cookie behavior with `security_extra.https: true`
- Replace OAuth placeholders before enabling public OAuth login
- Change seeded or demo credentials immediately

This keeps the deployment minimal without pretending that a demo configuration is production-ready.
