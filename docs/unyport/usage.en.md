# UnyPort Usage
`UnyPort` is used when the platform operator needs fast host visibility, a stable authentication surface and a small number of operational entry points. It is not optimized for commerce or customer workflow. It is optimized for supervised infrastructure reading.

## Use 1 - sign in and confirm host context
Operators usually start by:

- Signing in locally or through OAuth
- Reading the detected host role
- Confirming whether the surface is a Dom0, DomU, container or Alpine host

This first step changes the rest of the reading because a Dom0 exposes Xen-wide context while a DomU behaves like a VM-centric observer.

## Use 2 - read live system state
The most common ongoing use is real-time monitoring:

- CPU and per-core activity
- Memory usage and cache behavior
- Network throughput
- Storage occupancy
- Temperatures, processes and load

The portal is therefore useful as a live operational dashboard even before any deeper action is needed.

## Use 3 - inspect Alpine and Xen specifics
`UnyPort` is also used to answer Alpine and Xen specific questions:

- Is LBU present and committed
- What Alpine version is running
- What kernel is running
- What Xen version and scheduler are active on Dom0
- How many domains are running and how much memory they consume

## Use 4 - inspect services, logs and security
The resources and security surfaces support routine troubleshooting:

- Review OpenRC services
- Tail allowed log files
- Inspect listened ports
- Confirm security hardening status
- Identify critical processes or service crashes

## Use 5 - open an internal tool through the portal
When configured, `UnyPort` can also act as the entry point toward a proxied internal tool such as `ttyd`. This keeps the operator inside one authenticated surface while still exposing terminal-oriented workflows.

## Use 6 - know when to switch surface
`UnyPort` is not the only tool in the ecosystem.

- Use `TRINITY` when the need is service lifecycle, account, billing or customer operations.
- Use `UnyDesk` when the need is remote access or direct assistance.
- Stay in `UnyPort` when the need is host state, infrastructure context or a controlled proxy entry.
