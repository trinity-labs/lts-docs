# Glossary
This glossary gives a compact reading of the most important `UnyPort` terms.

## Core terms
- `UnyPort`: Operator-facing supervision and control portal
- `viewer`: Authenticated read-only role
- `operator`: Authenticated role with routine write actions
- `admin`: Authenticated role with user and branding administration
- `branding`: Instance logo and role-color configuration stored in `branding.yaml`

## Platform terms
- `Alpine Linux`: Lightweight Linux distribution used as the preferred host model
- `Xen`: Hypervisor layer used for Dom0 and DomU infrastructure
- `Dom0`: Xen control domain hosting hypervisor-wide context
- `DomU`: Xen guest domain seen as a virtual machine
- `LBU`: Alpine Linux backup and persistence mechanism

## Runtime terms
- `SSE`: Server-sent events used for live system snapshots
- `proxy app`: Internal application exposed under `/proxy/<name>/`
- `startup history`: Restart timeline stored in `startup-history.jsonl`
- `trusted origins`: Allowed hosts for CSRF-protected state-changing requests

## Reading model
```text
TRINITY = customer lifecycle
UnyDesk = remote access
UnyPort = host supervision and controlled entry
```
