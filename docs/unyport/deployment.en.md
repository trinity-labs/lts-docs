# Deployment
Deposit `docker_unyport` provides both the source tree and a running container model. The deployment history remains voluntarily simple: a Go application, a main listening port and a small directory `settings/` next to the binary.

## Useful tree
The important paths are:

- ➡️ `docker-compose.yml`
- ➡️ `unyport/backend/`
- ➡️ `unyport/frontend/public/`
- ➡️ `unyport/backend/settings/settings.yaml`
- ➡️ `unyport/backend/settings/config.yaml`
- ➡️ `unyport/backend/settings/users.json`

## Development Mode
The supplied component starts a container `golang:alpine` and compiles the project at launch.

Developmental characteristics:

- ✅ Frontend Asset are served from the disk via `UNYPORT_ASSETS`
- ✅ Go module and build caches are mounted in volumes named
- ✅ The default port is `8800:8800`
- ✅ The container solves `host.docker.internal` via `host-gateway`

## Production mode
The same logic also prepares a binary production:

- ✅ The frontend assets are copies in `server/assets`
- ✅ The binary is compiled with `-tags prod`
- ✅ Symbols are deleted
- ✅ `upx --lzma` Is applied in the container

The README presented this as the compact package path, while the development keeps live assets on disk.

## Runtime files
In the runtime, `UnyPort` Waits:

- ➡️ `settings/settings.yaml`
- ➡️ `settings/config.yaml`
- ➡️ `settings/users.json`

The application shall, operationally, also write:

- ➡️ `logs/unyport.log`
- ➡️ `logs/startup-history.jsonl`
- ✅ `settings/branding.yaml` When a branding personnalise is saved

## HTTPS and HTTP/3
By default, the application listens in simple HTTP on `:8800`.

The optional HTTPS and QUIC behavior is driven by `settings/settings.yaml` :

- ➡️ `security_extra.https`
- ➡️ `http3.enabled`
- ➡️ `http3.cert_file`
- ➡️ `http3.key_file`
- ➡️ `http3.port`
- ➡️ `http3.redirect_http`

When HTTP/3 is enabled correctly, `UnyPort` can serve the TLS on the configured port and redirect `:8800` to this lister TLS.

## Reverse proxy and first login
For deployment exposed to the Internet, the usual pattern is:

- ✅ Binder `UnyPort` local or at a controlled host address
- ✅ Place Nginx or another reverse proxy in front
- ✅ Enable secure-cookie behavior with `security_extra.https: true`
- ✅ Replace OAuth placeholders before public opening
- ✅ Change the given or demo IDs immediately

This keeps the minimal deployment without pretending that a demo configuration is ready for production.
