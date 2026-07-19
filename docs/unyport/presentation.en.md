# UnyPort Presentation
`UnyPort` is the control and supervision application exposed around `TRINITY` infrastructure. It is oriented toward operators, not toward end-user commerce. The product value is clarity: one entry point, one session model, one host view and a small number of focused operational pages.


## Visible pages
The current interface is centered on:

- `Dashboard`
- `Hypervisor`
- `Resources`
- `Network`
- `Storage`
- `Security`
- `Settings`

These pages are populated by a mix of static system facts and live snapshots pushed over SSE.

## Primary users
`UnyPort` is meant for:

- Administrators
- Operators
- Read-only viewers

The application distinguishes those roles explicitly so the same portal can be used for observation, routine operations and controlled administration without exposing all write actions to every user.

## Position inside the ecosystem
`UnyPort` should be read as the supervision companion to `TRINITY`:

- `TRINITY` Handles the customer lifecycle
- `UnyDesk` Handles remote access and assistance
- `UnyPort` Handles infrastructure state, proxy access and operator context

That positioning is consistent with the repository itself, the public README and the current runtime routes.
