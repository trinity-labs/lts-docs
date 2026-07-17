# Data Disk Mode
Data Disk Mode, often shortened to **DDM**, is one of the most important technical notions exposed publicly by `TRINITY`.

## What DDM means
DDM is a maintenance-oriented VM mode. The goal is not to present the environment as a normal application runtime, but as a controlled context for checking data, storage and system state.

In practice, DDM is useful when the user or support needs to:

- inspect a disk
- verify filesystems
- recover data
- confirm that a broken environment can still be mounted
- work on a service that should not boot normally yet

## How to recognize DDM
The interface usually makes DDM explicit through labels and a console layout dedicated to recovery or maintenance.

```text
Normal service mode:
  service first
  application behavior expected

Data Disk Mode:
  storage and system first
  recovery behavior expected
```

## Safe DDM checks
The first actions in DDM should stay conservative.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

These commands help answer simple questions:

- what disks are visible
- what is mounted
- how much space remains
- whether the expected filesystem is present

## Typical DDM workflow
```text
Enter DDM
  -> identify disks
  -> confirm mounts
  -> inspect filesystem
  -> collect evidence
  -> recover data or prepare support escalation
```

## What DDM is not
DDM should not be read as:

- a normal application success state
- a replacement for backups
- an invitation to make uncontrolled system changes

DDM is a controlled technical mode whose value is clarity, recovery and inspection.
