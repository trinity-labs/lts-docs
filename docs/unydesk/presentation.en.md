# UnyDesk Presentation
`UnyDesk` is the remote desktop and assistance surface of the platform. It is not presented as a generic tool collection: it is the architecture dedicated to live access between a browser user and a registered machine.

## Product position
`UnyDesk` sits beside the other two architectures:

- **`TRINITY`**: account, orders, services, invoices and support entry
- **`UnyDesk`**: remote access, host packages, assistance sessions and live interaction
- **`UnyPort`**: local operations, supervision and controlled infrastructure visibility

This separation keeps each product understandable. A user who wants to manage billing goes to `TRINITY`. A user who wants to inspect a host goes to `UnyPort`. A user who wants to control or assist a machine uses `UnyDesk`.

## Visible capabilities
The public surface can expose:

- A landing page for remote access
- Host downloads for Linux, Windows and macOS targets
- Checksum access for release verification
- Account or standalone session entry
- Trusted-host and claim flows
- Session status and dispatch visibility
- Browser-based viewer control
- Fallback screen delivery when direct media is degraded

## Design principles
`UnyDesk` follows a few product rules:

- The host runtime is a first-class component
- Session state must remain understandable
- Trust must be explicit before access is useful
- Direct realtime transport is preferred, but not assumed
- The broker API is the contract between the user surface and the host side

## What is intentionally outside this page
This public documentation does not expose internal private paths, secrets or operator-only recovery procedures. Those topics belong to the restricted documentation surface.
