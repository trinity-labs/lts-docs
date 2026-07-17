# Glossary
This glossary gives a compact reading of the most important `UnyPort` terms.

## Core terms
- `UnyPort`: operator-facing supervision and control portal
- `viewer`: authenticated read-only role
- `operator`: authenticated role with routine write actions
- `admin`: authenticated role with user and branding administration
- `branding`: instance logo and role-color configuration stored in `branding.yaml`

## Platform terms
- `Alpine Linux`: lightweight Linux distribution used as the preferred host model
- `Xen`: hypervisor layer used for Dom0 and DomU infrastructure
- `Dom0`: Xen control domain hosting hypervisor-wide context
- `DomU`: Xen guest domain seen as a virtual machine
- `LBU`: Alpine Linux backup and persistence mechanism

## Runtime terms
- `SSE`: server-sent events used for live system snapshots
- `proxy app`: internal application exposed under `/proxy/<name>/`
- `startup history`: restart timeline stored in `startup-history.jsonl`
- `trusted origins`: allowed hosts for CSRF-protected state-changing requests

## Reading model
```text
TRINITY = customer lifecycle
UnyDesk = remote access
UnyPort = host supervision and controlled entry
```
