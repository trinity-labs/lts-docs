# UnyDesk Overview
`UnyDesk` is the remote access service of the platform. It is the public entry point used when a user needs to reach a machine, assist another person, expose a downloadable host runtime or continue a remote session through more than one transport mode.

It exists to expose:

- Remote access entry points
- Host bootstrap and claim flows
- Host inventory visibility
- Session-oriented remote control workflows
- Downloadable host packages
- Browser-based viewer access
- Support-friendly fallback behavior when direct realtime transport is degraded

## What the public user sees
From a public perspective, `UnyDesk` usually appears as:

- A landing page for remote access
- A browser session page
- Downloadable host binaries for supported systems
- Host identity and trust flows
- A session status surface with route, signaling and transport indicators

The user does not need to understand broker internals to use the service. Publicly, what matters is that `UnyDesk` can:

- Identify the target host
- Request host acceptance
- Connect viewer and host
- Preserve control even when the best media path is not immediately usable

## Role in the ecosystem
`UnyDesk` is a standalone architecture with its own runtime and public interaction model. It is not a subfeature of `TRINITY`.

Its role beside the other surfaces is clear:

- **`TRINITY`** handles account, services, orders, invoices and support entry points
- **`UnyDesk`** handles remote access, live assistance and interactive host sessions
- **`UnyPort`** handles control, supervision and infrastructure visibility

## Main public concepts
The most important public concepts in `UnyDesk` are:

- **Host**: the machine that exposes remote access
- **Viewer**: the browser-side participant opening the session
- **Session**: the live relationship between viewer and host
- **Broker**: the signaling and routing layer
- **Claim or pairing**: the trust step that binds a host to an expected context
- **Standalone access**: a direct session link protected by a session-specific token

## Why it matters publicly
Remote access is not only about video. In practice, `UnyDesk` also needs to preserve:

- Host reachability
- Local approval rules
- Clipboard and file exchange
- Support visibility
- Acceptable behavior when WebRTC direct media is incomplete

That is why this documentation treats `UnyDesk` as a complete remote access product, not only as a download page.
