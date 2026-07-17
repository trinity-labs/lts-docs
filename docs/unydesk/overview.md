# UnyDesk Overview
`UnyDesk` is the remote access service of the platform. It is the public entry point used when a user needs to reach a machine, assist another person, expose a downloadable host runtime or continue a remote session through more than one transport mode.

It exists to expose:

- remote access entry points
- host bootstrap and claim flows
- host inventory visibility
- session-oriented remote control workflows
- downloadable host packages
- browser-based viewer access
- support-friendly fallback behavior when direct realtime transport is degraded

## What the public user sees
From a public perspective, `UnyDesk` usually appears as:

- a landing page for remote access
- a browser session page
- downloadable host binaries for supported systems
- host identity and trust flows
- a session status surface with route, signaling and transport indicators

The user does not need to understand broker internals to use the service. Publicly, what matters is that `UnyDesk` can:

- identify the target host
- request host acceptance
- connect viewer and host
- preserve control even when the best media path is not immediately usable

## Role in the ecosystem
`UnyDesk` is a standalone architecture with its own runtime and public interaction model. It is not a subfeature of `TRINITY`.

Its role beside the other surfaces is clear:

- **`TRINITY`** handles account, services, orders, invoices and support entry points
- **`UnyDesk`** handles remote access, live assistance and interactive host sessions
- **`UnyPort`** handles control, supervision and infrastructure visibility

## Main public concepts
The most important public concepts in `UnyDesk` are:

- **host**: the machine that exposes remote access
- **viewer**: the browser-side participant opening the session
- **session**: the live relationship between viewer and host
- **broker**: the signaling and routing layer
- **claim or pairing**: the trust step that binds a host to an expected context
- **standalone access**: a direct session link protected by a session-specific token

## Why it matters publicly
Remote access is not only about video. In practice, `UnyDesk` also needs to preserve:

- host reachability
- local approval rules
- clipboard and file exchange
- support visibility
- acceptable behavior when WebRTC direct media is incomplete

That is why this documentation treats `UnyDesk` as a complete remote access product, not only as a download page.
