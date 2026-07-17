# UnyDesk Introduction
`UnyDesk` is the remote access architecture of the platform. It gives users and operators a controlled way to reach a machine through a browser session, a host runtime and a broker API.

The product is organized around three public roles:

- **host**: the machine that exposes access
- **viewer**: the browser-side user opening the session
- **broker**: the `UnyDesk` service that authenticates, routes and synchronizes the session

`UnyDesk` is intentionally separate from `TRINITY` and `UnyPort`. `TRINITY` handles customer lifecycle and service entry points. `UnyPort` handles local supervision and operations. `UnyDesk` handles interactive remote access.

## What UnyDesk solves
`UnyDesk` is used when the user needs to:

- download or run a host package
- claim or trust a host
- create a remote session
- route the viewer to the right host
- exchange signaling between browser and host
- continue the session when the best realtime path is not available

## Public architecture in one view
```text
Browser viewer
  -> UnyDesk broker
  -> trusted or claimed host
  -> session signaling
  -> WebRTC or fallback screen path
```

The broker remains the stable coordination point. The media path can be direct when possible, but session state, routing and fallback behavior remain visible through `UnyDesk`.

## Documentation path
Read this section in this order:

- `Presentation` for the product view
- `Architecture` for the runtime model
- `Manual` for the practical user path
- `Host distribution` for downloads and packages
- `Session broker` for session lifecycle and signaling
- `Security and operations` for public operating boundaries
