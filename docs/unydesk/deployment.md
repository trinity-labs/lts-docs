# Deployment
`UnyDesk` is deployed as a standalone service. The important public point is that it has its own runtime, its own API and its own host distribution path.

## Runtime model
The service is built around:

- one Go backend
- one primary HTTP listening address
- optional native HTTP/3 when certificates are configured
- static frontend assets
- settings files for users, hosts, trusted hosts and public identity
- host download artifacts served from the configured download directory

## Reverse proxy model
For an Internet-facing deployment, the usual model is:

- expose `UnyDesk` behind a reverse proxy
- forward the original host and client address headers
- keep cookies and CSRF behavior consistent with the public URL
- expose websocket upgrade paths for host and session channels
- terminate TLS at the proxy unless native TLS/HTTP3 is intentionally enabled

## Public endpoints to preserve
Deployments must preserve:

- `/healthz`
- `/api/v1/info`
- `/api/v1/auth/*`
- `/api/v1/bootstrap/*`
- `/api/v1/hosts`
- `/api/v1/hosts/ws`
- `/api/v1/sessions`
- `/download/host/*`

If these routes are rewritten incorrectly, the frontend may load while host pairing or session routing fails.

## Operational expectation
A correct deployment should make it possible to open the UI, download a host package, authenticate or use a scoped invitation, see host presence and create a session without changing product names or crossing into `TRINITY` or `UnyPort` menus.
