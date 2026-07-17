# VMs and console
Some `TRINITY` services expose a VM-related surface. This does not mean every customer becomes a hypervisor administrator. It means the platform can present a machine state, a console, or a maintenance context when the service allows it.

## What the user can expect
A VM-oriented page may expose:

- the machine name
- whether it is online
- basic resource visibility
- a console entry point
- links toward support or monitoring

![VM and console view](../assets/images/screens/trinity-console.png)

*Repository capture of a `TRINITY` VM screen in Data Disk Mode.*

## Typical console goals
Console access is useful to:

- verify boot state
- inspect a mounted filesystem
- read a hostname or IP
- confirm whether recovery work is possible

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Reading a VM state
A customer-facing VM page should be interpreted in a simple way:

- `online` means the VM responds in its current mode
- `maintenance` means the machine is available for a technical intervention
- `recovery` means the focus is data and filesystem access
- `unavailable` means the service needs time or assistance

```text
online       -> normal or expected technical access
maintenance  -> intervention context
recovery     -> preservation and diagnostics context
unavailable  -> wait or contact support
```

## Operational caution
A console is powerful but narrow. It is not the same thing as full service documentation. Before changing anything, the user should know:

- whether the VM is in normal mode or DDM
- whether the goal is diagnosis or modification
- whether support requested a precise action

```bash
# Safe first checks
mount
findmnt
cat /etc/os-release
```
