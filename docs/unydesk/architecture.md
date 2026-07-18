# UnyDesk Architecture
`UnyDesk` combines a broker surface, a software distribution surface and a live session surface.

Its public architecture is centered on:

- Authentication
- Bootstrap claim and provision flows
- Host and session state
- Websocket-backed live updates
- Distribution of host binaries for supported targets
- Direct WebRTC signaling through the broker API
- Screen fallback paths when direct realtime media is not usable

## Main public layers
The public reading of the architecture can be separated into five layers.

### 1. Distribution layer
This layer provides:

- Downloadable host binaries
- Platform-specific host packaging
- Bootstrap entry points
- A stable public path to retrieve the host software

The host application is not only a helper binary. It is the machine-side runtime that registers, identifies itself, sends heartbeats and accepts or refuses sessions.

### 2. Identity and trust layer
`UnyDesk` uses several public trust modes:

- Account-bound host registration
- Claim or pairing flows that associate a host with a user context
- Standalone session links with a dedicated token
- Optional local approval on the host before control begins

### 3. Broker and session layer
The broker layer handles:

- Session creation
- Host routing
- Offer and answer exchange
- ICE candidate exchange
- Host presence
- Dispatch state, delivery count and host acknowledgment visibility

### 4. Realtime transport layer
When possible, `UnyDesk` prefers a direct realtime path:

- Browser viewer creates a WebRTC offer
- Host posts the WebRTC answer
- ICE candidates are exchanged through the broker
- Video, input and auxiliary channels become available

This path is optimized for low-latency interaction such as live screen viewing, keyboard and mouse control, clipboard exchange and file transfer signaling.

### 5. Fallback delivery layer
The public architecture also includes explicit fallback paths:

- Peer-frame delivery over the screen data channel
- Peer-frame relay through a dedicated screen websocket
- Continued signaling through the broker websocket
- Session state polling while waiting for transport recovery

## Session path in plain words
```text
Viewer page
  -> session created
  -> routed to host
  -> host accepts
  -> broker carries signaling
  -> WebRTC direct path is attempted
  -> fallback path is used if direct media is incomplete
```

This architecture should be read as a remote access system, not as a generic file download page.
