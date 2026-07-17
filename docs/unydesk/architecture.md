# UnyDesk Architecture
`UnyDesk` combines a broker surface, a software distribution surface and a live session surface.

Its public architecture is centered on:

- authentication
- bootstrap claim and provision flows
- host and session state
- websocket-backed live updates
- distribution of host binaries for supported targets
- direct WebRTC signaling through the broker API
- screen fallback paths when direct realtime media is not usable

## Main public layers
The public reading of the architecture can be separated into five layers.

### 1. Distribution layer
This layer provides:

- downloadable host binaries
- platform-specific host packaging
- bootstrap entry points
- a stable public path to retrieve the host software

The host application is not only a helper binary. It is the machine-side runtime that registers, identifies itself, sends heartbeats and accepts or refuses sessions.

### 2. Identity and trust layer
`UnyDesk` uses several public trust modes:

- account-bound host registration
- claim or pairing flows that associate a host with a user context
- standalone session links with a dedicated token
- optional local approval on the host before control begins

### 3. Broker and session layer
The broker layer handles:

- session creation
- host routing
- offer and answer exchange
- ICE candidate exchange
- host presence
- dispatch state, delivery count and host acknowledgment visibility

### 4. Realtime transport layer
When possible, `UnyDesk` prefers a direct realtime path:

- browser viewer creates a WebRTC offer
- host posts the WebRTC answer
- ICE candidates are exchanged through the broker
- video, input and auxiliary channels become available

This path is optimized for low-latency interaction such as live screen viewing, keyboard and mouse control, clipboard exchange and file transfer signaling.

### 5. Fallback delivery layer
The public architecture also includes explicit fallback paths:

- peer-frame delivery over the screen data channel
- peer-frame relay through a dedicated screen websocket
- continued signaling through the broker websocket
- session state polling while waiting for transport recovery

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
