# Metrics and Surfaces
`UnyPort` is organized around a small number of operational surfaces backed by live data. The backend samples the system every `2` seconds and pushes snapshots over SSE, while the frontend renders those snapshots as focused operator pages.

## Live data model
The live pipeline has a few important characteristics:

- One SSE endpoint: `/sse/system`
- One in-memory ring of `60` snapshots
- Roughly `2` minutes of rolling live context
- Chart scales computed server-side from the last `15` snapshots

This keeps the frontend light and avoids duplicating telemetry math in the browser.

## Dashboard
The dashboard is the first reading surface:

- Hostname and host role
- Uptime
- CPU and memory summaries
- Quick links toward network, storage and security
- Yearly restart heatmap derived from `startup-history.jsonl` or `unyport.log`

## Hypervisor
The hypervisor page combines system identity and platform context:

- Alpine and kernel version reading
- Host role and runtime
- BIOS and board data when available
- Version comparison against `TRINITY` boot tags fetched from GitHub
- Xen hypervisor information on Dom0
- Active Xen domains on Dom0

## Resources
The resources page is the broad inspection surface:

- Load average
- Temperatures
- Top processes
- Package inventory summary
- Kernel modules summary
- OpenRC service list and status
- Allowed log-file browsing and tailing

## Network and storage
The `Network` page shows:

- Main interface
- IP address
- RX and TX rates
- Byte totals
- A network map built from host interfaces

The `Storage` page shows:

- Mounted disks
- Used and free space
- Filesystem type
- LBU persistence state on Alpine hosts

## Security
The security page is a dedicated operational surface, not just a badge summary. It aggregates:

- Kernel hardening checks
- Users file permissions
- OpenRC service state
- Watched process presence
- Listening TCP ports

That makes `UnyPort` more than a resource viewer. It is also a compact security status reader.
