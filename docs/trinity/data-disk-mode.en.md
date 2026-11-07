# Data Disk Mode
Data Disk Mode, often abbreviated **DDM**, is one of the most important technical concepts publicly exposed by `TRINITY`.

## What the DDM means
The DDM is a maintenance oriented VM mode. The objective is not to present the environment as a normal application service, but as a controlled context to verify data, storage and system status.

In practice, the DMD is useful when:

- ✅ Inspecting a Disc
- ✅ Check File Systems
- ✅ Recovering Data
- ✅ Confirm that a broken environment can still be mounted
- ✅ Work on a service that should not restart normally immediately

## How to recognize DDM
The interface usually makes the DDM visible with dedicated wording and a maintenance or recovery-oriented console.

```text
Mode service normal :
  priorité au service
  comportement applicatif attendu

Data Disk Mode :
  priorité au stockage et au système
  comportement de reprise attendu
```

| Criterion | Normal mode | Data Disk Mode |
| --- | --- | --- |
| Priority | Application Service | Data, storage and recovery |
| Console | Operation or verification | Maintenance and recovery |
| Main Expectation | Service available | Readable volumes and reliable diagnosis |
| Level of caution | Standard | Strengthen before any change |

## Secure DDM checks
The first actions in DDM must remain conservative.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

These commands help answer simple questions:

- ✅ Which discs are visible
- ✅ Which mounting points are active
- ✅ What space is available
- ✅ If the expected file system is present

| Command | Issue | Type of response expected |
| --- | --- | --- |
| `lsblk` | What discs exist | List of volumes and sizes |
| `findmnt` | What mountings are active | Arborescence of mounting points |
| `df -h` | What space is available | Capacity and saturation |
| `cat /etc/fstab` | What installation is planned | Reference configuration |

## Typical DDM workflow
```text
Entrer en DDM
  -> identifier les disques
  -> confirmer les montages
  -> inspecter le système de fichiers
  -> collecter les indices
  -> récupérer les données ou préparer l'escalade support
```

## What the DDM is not
The DDM should not be read as:

- ✅ A normal application state
- ✅ A backup replacement
- ✅ An invitation to change the system without control

The DDM is a technical control mode whose main value is clarity, resumption and inspection.

| Not to be confused with | Why? | Reading correctly |
| --- | --- | --- |
| Normal restart | The aim is not to get back into production quickly. | Prioritize inspection and recovery |
| Full backup | DDM is not a backup policy | Use dedicated backups if they exist |
| free test space | The context remains sensitive | Limit actions to the necessary checks |
