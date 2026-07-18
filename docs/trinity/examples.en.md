# Examples
This page groups practical examples for common `TRINITY` situations.

## Example 1 - check a newly delivered VM
```bash
hostname
uptime
ip addr
df -h
```

Expected reading:

- The machine answers
- The uptime is coherent
- The network is visible
- The main filesystem is mounted

## Example 2 - identify a DDM context
```bash
lsblk
findmnt
cat /etc/os-release
```

Expected reading:

- Visible storage devices
- Mounted filesystems
- A lightweight Alpine userland

## Example 3 - prepare a payment support message
```markdown
Order reference: TRI-2026-00421
Payment provider: bank transfer
Observed status: pending for longer than expected
Invoice visible: no
Requested action: confirm whether settlement is still waiting
```

## Example 4 - summarize a VM issue for support
```json
{
  "vm": "vm-trinity01",
  "mode": "data_disk_mode",
  "state": "online",
  "issue": "service not yet returned to normal runtime",
  "evidence": [
    "hostname ok",
    "filesystem mounted",
    "application not started"
  ]
}
```

## Example 5 - customer-side reading of the platform
```text
TRINITY  -> account, orders, invoices, documentation
UnyDesk  -> remote access and assistance
UnyPort  -> status, host data, service supervision
```
