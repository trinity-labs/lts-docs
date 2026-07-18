---
description: Public documentation for `UnyPort`, the operator-facing Alpine Linux and Xen control surface in the `TRINITY` ecosystem.
social_image: https://unyport.app/media/img/logos/logo-unyport-full.png
---

# UnyPort
`UnyPort` is the operator-facing control surface of the `TRINITY` ecosystem. It is built as a lightweight Go application for Alpine Linux environments, with explicit awareness of Xen, live system state, controlled app proxying and day-to-day host supervision.

Publicly, `UnyPort` brings together:

- Authenticated operator access
- Live host and service visibility
- Xen-aware context for Dom0 and DomU environments
- Controlled access to selected internal apps such as `ttyd`
- Operational pages for security, storage, network and system state

`UnyPort` works alongside two companion surfaces:

- `TRINITY` For customer lifecycle, orders, billing and service entry points
- `UnyDesk` For remote access and assistance workflows

## Start here
For a practical reading path, the recommended order is:

1. `Introduction`
2. `Architecture`
3. `Manual`
4. `Access and authentication`
5. `Metrics and surfaces`
6. `Deployment`
7. `Alpine Linux and Xen`
8. `Security and operations`
9. `Examples`

```text
Operator sign-in
  -> Dashboard
  -> Host role detection
  -> Metrics and logs
  -> Security and versions
  -> Proxy app if needed
  -> Admin settings when authorized
```

This section therefore describes `UnyPort` as a real operational surface, not as a generic dashboard theme or a raw source repository.
