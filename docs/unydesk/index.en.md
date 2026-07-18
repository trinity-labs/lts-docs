---
description: Public documentation for `UnyDesk`, the self-hosted remote access broker of the `TRINITY` ecosystem.
social_image: https://unydesk.app/assets/logo-unydesk.jpg
---

# UnyDesk
`UnyDesk` is the remote access service of the `TRINITY` Edge Networks ecosystem. It is the public surface used to download a host package, pair or claim a host, start a remote session and keep that session usable even when the best transport path is not immediately available.

Unlike `TRINITY`, which is the customer and service portal, `UnyDesk` is centered on:

- Host reachability
- Viewer-to-host session routing
- Live remote control
- Remote assistance flows
- Transport fallback behavior

## Start here
For a practical reading path, the recommended order is:

1. `Overview`
2. `Architecture`
3. `Bootstrap and access`
4. `Usage`
5. `Support and operations`
6. `Glossary`

```text
Viewer
  -> UnyDesk page
  -> Target host
  -> Session creation
  -> Broker signaling
  -> WebRTC direct path
  -> Fallback path if required
```

This section describes `UnyDesk` as a public product experience, not as source code or an internal protocol note.
