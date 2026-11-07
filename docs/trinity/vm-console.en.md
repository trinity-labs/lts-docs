# VM and console
Some services `TRINITY` This does not mean that each client becomes a hypervisor administrator. This means that the platform can display a machine state, console or maintenance context when the service allows.

## What the user can expect
A VM-oriented page can display:

- ✅ The name of the machine
- ✅ An on-line indicator or not
- ✅ A visibility is based on resources
- ✅ A console entry point
- ✅ Links to support or supervision

| Visible information | Immediate utility | Readable |
| --- | --- | --- |
| Name of VM | Identify the right machine | Stable name or technical reference |
| State | Know if VM is responding | `online`, `maintenance`, `récupération`, `unavailable` |
| IP address | Recognize the network target | Private or technical IP depending on the service |
| Console | Open a direct diagnosis | Access restricted to authorized cases |
| Resources | Briefly locate VM | CPU, RAM, disk or near indicators |
| Support Links | Climbing clean | Ticket, Cat or Help Channel |


## Typical console objectives
Console access is used to:

- ✅ Check boot status
- ✅ Inspect an mounted file system
- ✅ Read a hostname or IP
- ✅ Confirm if a resumption is possible

```bash
hostname
uname -à
ip addr
lsblk
df -h
```

## How to read a VM state
A public VM page should simply read:

- ✅ `online` Means that VM is responding in its current mode
- ✅ `maintenance` Means that a technical intervention is in progress or possible
- ✅ `récupération` Means that priority is access to data
- ✅ `unavailable` Means that you have to wait or ask for support

```text
online       -> accès normal ou technique attendu
maintenance  -> contexte d'intervention
récupération     -> contexte de préservation et de diagnostic
unavailable  -> attente ou support
```

| VM statement | What it means | Good reflex |
| --- | --- | --- |
| `online` | VM is available in its current mode | Check service or connectivity |
| `maintenance` | An intervention or preparation is underway | Avoid unrequested changes |
| `récupération` | Priority is recovery or preservation | Focus on reading and storage |
| `unavailable` | The VM or surface is not usable | Waiting or opening a ticket with context |

## Operational prudence
A console is powerful but narrow in its use. Before changing anything, you must know:

- ✅ If VM is in normal or DDM mode
- ✅ If the objective is diagnosis or modification
- ✅ If the support requests a specific action

```bash
# Vérifications prudentes en premier
mount
findmnt
cat /etc/os-release
```

| Verification | Why throw it | Risk if ignored |
| --- | --- | --- |
| `mount` | See active mountings | Acting on the wrong volume |
| `findmnt` | Read the tree of the mounting points | System and data consolidation |
| `cat /etc/os-release` | Identify the system invites | Applying the wrong procedure |
