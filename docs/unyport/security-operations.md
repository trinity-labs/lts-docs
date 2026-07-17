# Security and Operations
`UnyPort` combines a hardened web surface with a deliberately narrow set of operational write actions. The goal is to let operators inspect, verify and enter selected tools without turning the portal into an uncontrolled admin backdoor.

## Web security baseline
The middleware stack applies:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- a strict default `Content-Security-Policy`
- optional `Strict-Transport-Security` when HTTPS is enabled

Requests that mutate state also pass through CSRF validation and trusted-origin checks.

## Authentication hardening
Current protection includes:

- JWT cookies with configurable session timeout
- login rate limiting per client IP
- OAuth state cookies for provider callbacks
- read-only versus write-capable role separation

This is a compact model, but it is coherent and visible in the code paths used by the running portal.

## Security page
The dedicated security page aggregates checks around:

- ASLR
- kernel pointer restriction
- `dmesg` restriction
- unprivileged BPF
- IPv4 and IPv6 forwarding
- permissions on `settings/users.json`
- critical OpenRC services
- watched processes
- listening TCP ports

It is meant as an operator summary, not as a replacement for a full audit tool.

## Operations scope
Operationally, `UnyPort` is strongest when used for:

- visibility
- verification
- controlled app entry
- user and branding administration
- basic host troubleshooting

It is not yet the place for a full VM lifecycle or cluster orchestration workflow. The public README explicitly frames the current product as `V1`, monitoring first, with broader Xen mobility workflows expected later.

## Logs and support boundaries
The portal can expose selected log files, service state and host security signals. When the need moves beyond that scope:

- use `TRINITY` for customer and service lifecycle actions
- use `UnyDesk` for remote access or assistance sessions
- use deeper system tooling when a full host intervention is required

That boundary keeps `UnyPort` operationally useful without overpromising.
