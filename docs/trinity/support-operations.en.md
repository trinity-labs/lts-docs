# Support and operation
Support `TRINITY` This means that the platform must help the user understand when to ask for help and what to include in their application.

## Perimeter support
Support `TRINITY` may explicitly concern:

- Orders and billing questions
- Payment tracking
- Access to invoices
- Alpine Linux environments
- VM services based on Xen
- Data Disk Mode situations
- The use of`UnyDesk`
- The use of`UnyPort`

| Subject | Self-service possible | Recommended medium |
| --- | --- | --- |
| PDF bill | Yes | If the document is missing or inconsistent |
| Payment | Yes, to read the state | If status remains blocked or contradictory |
| Command | Yes, to follow the reference and status | If delivery no longer progresses |
| VM | Yes, to read a simple state | If the behaviour becomes ambiguous or risky |
| Data Disk Mode | Possible careful reading | Yes, as long as a recovery action is sensitive |
| UnyDesk / UnyPort | Yes, to use the surface | If access or interpretation is a problem |

## Good format of application support
A good support demand is concrete and brief.

```markdown
Objet : VM visible mais service indisponible

Référence commande : TRI-2026-00421
Service : VM Alpine
Mode actuel : Data Disk Mode
Probleme observe : système de fichiers visible, application non démarrée
Résultat attendu : confirmer s'il faut reprendre ou revenir en mode normal
```

## Before climbing
Collect the minimum first:

- Order reference
- Invoice or payment if useful
- Name of VM if it exists
- Current mode: normal, maintenance or DDM
- Precise console observation

```bash
# Exemple de lot d'informations à relever
hostname
uptime
ip addr
lsblk
df -h
```

| Information to be reported | Why she helps | Example |
| --- | --- | --- |
| Order reference | Identify folder | `TRI-2026-00421` |
| Payment status | Financial and technical distinction | `confirmé` |
| Name of VM | Pointing the right environment | `VM-EXEMPLE01` |
| Current mode | Locate context | `normal`, `maintenance`, `DDM` |
| Console observation | Give a concrete symptom | unmounted volume, service absent |

## Support or self-service
`TRINITY` seeks to expose enough information to allow prudent action without turning each situation into a support ticket.

Self-service is suitable for:

- Read an invoice
- Check a payment statement
- Open a console
- Confirm if VM is online

The support is suitable for:

- Blocked order delivery
- Inconsistency of payment
- VM statement unclear
- ⭕ Risk recovery action on data

| Situation | Self-service | Support ticket |
| --- | --- | --- |
| Read an invoice | Yes | No, unless document is missing |
| Check an online VM | Yes | No, if the state is clear |
| Diagnosis a sensitive volume | Limit | Yes |
| Recovering Service After Incident | Limit | Yes |
| Understanding an adversarial status | No | Yes |

## Surfaces to be used
Use the right surface as needed:

- `TRINITY` For the account, orders, invoices and service point of entry
- `UnyDesk` For remote support and interaction
- `UnyPort` For infra-state and supervision
