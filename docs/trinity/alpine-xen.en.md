# Alpine Linux and Xen
`TRINITY` is based on two technical foundations that must be publicly recognized even without directly administering them: **Alpine Linux** and **Xen**.

## Alpine Linux
Alpine Linux is the system base used for compact environments and controls. Publicly, this matters because the client often encounters:

- Light console
- A reduced system footprint
- A simple and direct organization

```bash
cat /etc/os-release
uname -à
apk info | head
```

Practical customer-side reading:

- The system is deliberately sober
- Maintenance and recovery remain legible
- The platform favours predictable technical surfaces

| Alpine Linux aspect | What the client sees | Practical interest |
| --- | --- | --- |
| Light system | Sob and fast console | Diagnosis more direct |
| Simple tools | Readable basic controls | Clearer picture |
| Compact organization | Little visual abstraction | Read more predictable |

## Xen
Xen is the virtualization layer underlying VM oriented services. The customer does not drive Xen directly from `TRINITY`, but Xen explains why the platform can expose:

- Remote virtual machines
- Readable VM states
- Maintenance and Recovery Modes

```text
Surface client -> TRINITY
Système invite -> Alpine Linux
Virtualisation -> Xen
```

| Layer | Role | Visible from TRINITY |
| --- | --- | --- |
| `TRINITY` | Customer surface area and life cycle | Yes |
| Alpine Linux | System invites some VM | Yes, via console and system state |
| Xen | Hypervisor and insulation | Indirectly via VM modes |

## Why both count together
Alpine Linux and Xen form a simple model:

- Alpine Linux provides the VM system environment
- Xen provides execution and insulation
- `TRINITY` Provides customer surface, life cycle and support

```yaml
modèle_plateforme:
  surface_client: "TRINITY"
  systeme_invite: "Alpine Linux"
  hyperviseur: "Xen"
  modes_operationnels:
    - normal
    - maintenance
    - data_disk_mode
```

| Element | Main function | What to remember |
| --- | --- | --- |
| Alpine Linux | Rotating the system invites | Read a simple and efficient console |
| Xen | Wear and isolate VM | Understanding technical states and modes |
| TRINITY | Orchestrating Customer Access | Linking command, service and support |

## What to remember
The essential is simple: the customer does not need to be Xen specialist. Above all, he must understand the model well enough to read a VM state, use a console with caution and speak precisely to the support.
