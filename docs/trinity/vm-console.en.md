# VMs and console
Some `TRINITY` services expose a VM-related surface. This does not mean every customer becomes a hypervisor administrator. It means the platform can present a machine state, a console, or a maintenance context when the service allows it.

## What the user can expect
A VM-oriented page may expose:

- The machine name
- Whether it is online
- Basic resource visibility
- A console entry point
- Links toward support or monitoring

![VM and console view](../assets/images/screens/trinity-console.png)

*Repository capture of a `TRINITY` VM screen in Data Disk Mode.*

## Typical console goals
Console access is useful to:

- Verify boot state
- Inspect a mounted filesystem
- Read a hostname or IP
- Confirm whether recovery work is possible

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Reading a VM state
A customer-facing VM page should be interpreted in a simple way:

- `online` Means the VM responds in its current mode
- `maintenance` Means the machine is available for a technical intervention
- `recovery` Means the focus is data and filesystem access
- `unavailable` Means the service needs time or assistance

```text
online       -> normal or expected technical access
maintenance  -> intervention context
recovery     -> preservation and diagnostics context
unavailable  -> wait or contact support
```

## Operational caution
A console is powerful but narrow. It is not the same thing as full service documentation. Before changing anything, the user should know:

- Whether the VM is in normal mode or DDM
- Whether the goal is diagnosis or modification
- Whether support requested a precise action

```bash
# Safe first checks
mount
findmnt
cat /etc/os-release
```
