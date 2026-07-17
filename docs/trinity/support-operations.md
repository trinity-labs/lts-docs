# Support and operations
`TRINITY` support is both commercial and technical. Publicly, this means the platform must help the user understand when to ask for help and what to include in the request.

## Support scope
`TRINITY` support can explicitly concern:

- orders and billing questions
- payment follow-up
- invoice access
- Alpine Linux environments
- Xen-backed VM services
- Data Disk Mode situations
- `UnyDesk` usage
- `UnyPort` usage

## Good support request format
A useful support request is concrete and short.

```markdown
Subject: VM visible but service unavailable

Order reference: TRI-2026-00421
Service: Alpine VM
Current mode: Data Disk Mode
Observed issue: filesystem visible, application not started
Expected result: confirm if recovery or normal restart is required
```

## Before escalating
Collect the minimum facts first:

- order reference
- invoice or payment state if relevant
- VM name if one exists
- current mode: normal, maintenance or DDM
- exact screenshot or console observation

```bash
# Example evidence set from a console
hostname
uptime
ip addr
lsblk
df -h
```

## Support versus self-service
`TRINITY` aims to expose enough information for the user to act safely without turning every situation into a support ticket.

Self-service is appropriate for:

- reading an invoice
- checking a payment state
- opening a console
- confirming whether a VM is online

Support is appropriate for:

- blocked order delivery
- payment inconsistency
- unclear VM state
- recovery action with risk of data loss

## Related surfaces
Use the right surface for the right need:

- `TRINITY` for account, orders, invoices and service entry
- `UnyDesk` for remote assistance and interactive access
- `UnyPort` for infrastructure state and operational supervision
