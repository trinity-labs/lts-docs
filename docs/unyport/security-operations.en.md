# Security and Operations
`UnyPort` combines a hardened web surface with a deliberately narrow set of operational write actions. The goal is to let operators inspect, verify and enter selected tools without turning the portal into an uncontrolled admin backdoor.

## Web security baseline
The middleware stack applies:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- A strict default `Content-Security-Policy`
- Optional `Strict-Transport-Security` when HTTPS is enabled

Requests that mutate state also pass through CSRF validation and trusted-origin checks.

## Authentication hardening
Current protection includes:

- JWT cookies with configurable session timeout
- Login rate limiting per client IP
- OAuth state cookies for provider callbacks
- Read-only versus write-capable role separation

This is a compact model, but it is coherent and visible in the code paths used by the running portal.

## Security page
The dedicated security page aggregates checks around:

- ASLR
- Kernel pointer restriction
- `dmesg` Restriction
- Unprivileged BPF
- IPv4 and IPv6 forwarding
- Permissions on `settings/users.json`
- Critical OpenRC services
- Watched processes
- Listening TCP ports

It is meant as an operator summary, not as a replacement for a full audit tool.

## Operations scope
Operationally, `UnyPort` is strongest when used for:

- Visibility
- Verification
- Controlled app entry
- User and branding administration
- Basic host troubleshooting

It is not yet the place for a full VM lifecycle or cluster orchestration workflow. The public README explicitly frames the current product as `V1`, monitoring first, with broader Xen mobility workflows expected later.

## Logs and support boundaries
The portal can expose selected log files, service state and host security signals. When the need moves beyond that scope:

- Use `TRINITY` for customer and service lifecycle actions
- Use `UnyDesk` for remote access or assistance sessions
- Use deeper system tooling when a full host intervention is required

That boundary keeps `UnyPort` operationally useful without overpromising.
