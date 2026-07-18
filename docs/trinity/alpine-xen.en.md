# Alpine Linux and Xen
`TRINITY` uses two technical foundations that users should recognize even if they do not manage them directly: **Alpine Linux** and **Xen**.

## Alpine Linux
Alpine Linux is the system base used for compact and controlled environments. Publicly, this matters because customers often encounter:

- A lightweight console environment
- A minimal package footprint
- A simple, direct system layout

```bash
cat /etc/os-release
uname -a
apk info | head
```

Typical user-facing interpretation:

- The system is intentionally small
- Recovery and maintenance can stay readable
- The platform favors predictable technical surfaces

## Xen
Xen is the virtualization layer underneath VM-oriented services. The customer does not usually manage Xen directly from `TRINITY`, but Xen explains why the platform can expose:

- Isolated virtual machines
- Stateful VM lifecycle information
- Maintenance and recovery modes

```text
Customer surface -> TRINITY
VM runtime       -> Alpine Linux guest
Virtualization   -> Xen layer
```

## Why both matter together
Alpine Linux and Xen form a practical model:

- Alpine Linux provides the guest operating environment
- Xen provides isolation and VM execution
- `TRINITY` Provides the customer-facing lifecycle and support surface

```yaml
platform_model:
  customer_surface: "TRINITY"
  guest_os: "Alpine Linux"
  hypervisor: "Xen"
  operational_modes:
    - normal
    - maintenance
    - data_disk_mode
```

## What users should retain
The key point is simple: the customer does not need to be a Xen specialist. The customer only needs to understand the model well enough to read a VM state, use a console carefully, and communicate accurately with support.
