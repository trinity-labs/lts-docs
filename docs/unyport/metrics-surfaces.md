# Metrics and Surfaces
`UnyPort` is organized around a small number of operational surfaces backed by live data. The backend samples the system every `2` seconds and pushes snapshots over SSE, while the frontend renders those snapshots as focused operator pages.

## Live data model
The live pipeline has a few important characteristics:

- one SSE endpoint: `/sse/system`
- one in-memory ring of `60` snapshots
- roughly `2` minutes of rolling live context
- chart scales computed server-side from the last `15` snapshots

This keeps the frontend light and avoids duplicating telemetry math in the browser.

## Dashboard
The dashboard is the first reading surface:

- hostname and host role
- uptime
- CPU and memory summaries
- quick links toward network, storage and security
- yearly restart heatmap derived from `startup-history.jsonl` or `unyport.log`

## Hypervisor
The hypervisor page combines system identity and platform context:

- Alpine and kernel version reading
- host role and runtime
- BIOS and board data when available
- version comparison against `TRINITY` boot tags fetched from GitHub
- Xen hypervisor information on Dom0
- active Xen domains on Dom0

## Resources
The resources page is the broad inspection surface:

- load average
- temperatures
- top processes
- package inventory summary
- kernel modules summary
- OpenRC service list and status
- allowed log-file browsing and tailing

## Network and storage
The `Network` page shows:

- main interface
- IP address
- RX and TX rates
- byte totals
- a network map built from host interfaces

The `Storage` page shows:

- mounted disks
- used and free space
- filesystem type
- LBU persistence state on Alpine hosts

## Security
The security page is a dedicated operational surface, not just a badge summary. It aggregates:

- kernel hardening checks
- users file permissions
- OpenRC service state
- watched process presence
- listening TCP ports

That makes `UnyPort` more than a resource viewer. It is also a compact security status reader.
