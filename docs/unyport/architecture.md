# UnyPort Architecture
`UnyPort` is structured as a compact operator stack: a Go backend, a static frontend, a small configuration surface and a telemetry loop that reads host state directly from Linux and Xen-visible interfaces. The goal is operational clarity rather than framework complexity.

## Layer 1 - runtime and assets
The first layer is the application runtime itself:

- a Go backend under `unyport/backend`
- a static frontend under `unyport/frontend/public`
- a development mode that serves assets from disk through `UNYPORT_ASSETS`
- a production mode that embeds frontend assets into the binary

In the bundled `docker-compose.yml`, the project is built inside a `golang:alpine` container and exposes the application on port `8800`.

## Layer 2 - transport and routing
The second layer is the operator transport surface:

- HTTP on `:8800` by default
- optional HTTPS and HTTP/3 when configured in `settings/settings.yaml`
- JSON APIs under `/api/*`
- live metrics over `/sse/system`
- app reverse proxies under `/proxy/<app>/`

```text
Browser SPA
  -> /api/system
  -> /api/security
  -> /api/services
  -> /sse/system
  -> /proxy/ttyd/
```

## Layer 3 - identity and persisted state
Identity is intentionally simple and local-first:

- local users are stored in `settings/users.json`
- branding is stored in `settings/branding.yaml`
- runtime settings live in `settings/settings.yaml`
- proxied app and OAuth provider declarations live in `settings/config.yaml`
- logs are written in `logs/`

The repository can also seed a first admin automatically when `users.json` does not exist and `UNYPORT_ADMIN_PASSWORD` is provided or defaults are accepted.

## Layer 4 - telemetry and host awareness
`UnyPort` reads the platform directly instead of relying on a separate monitoring agent:

- `/proc` and `/sys` for CPU, memory, uptime, network and temperatures
- OpenRC state for services
- `settings/users.json` file mode and kernel sysctls for security checks
- `xl info` and `xl list` for Dom0 Xen context
- `startup-history.jsonl` and `unyport.log` for restart history

The SSE broker samples every `2` seconds, keeps a ring of `60` snapshots in memory and computes chart scales server-side before pushing data to the frontend.

## Layer 5 - operator UX
The visible interface is then organized into purpose-driven pages:

- dashboard for quick status and restart history
- hypervisor page for host role, Xen and version context
- resources page for CPU, memory, processes, packages, modules, services and logs
- network page for interface activity and topology map
- storage page for disks and LBU state
- security page for hardening checks
- settings page for branding and future provider settings

This architecture should therefore be read as a supervision portal with a precise scope, not as a generic website or an all-purpose virtualization suite.
