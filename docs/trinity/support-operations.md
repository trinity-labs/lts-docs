# Support et exploitation
Le support `TRINITY` est a la fois commercial et technique. Côté public, cela signifie que la plateforme doit aider l'utilisateur a comprendre quand demander de l'aide et quoi inclure dans sa demande.

## Perimetre support
Le support `TRINITY` peut explicitement concerner :

- Les commandes et questions de facturation
- Le suivi de paiement
- L'accès aux factures
- Les environnements Alpine Linux
- Les services VM reposant sur Xen
- Les situations Data Disk Mode
- L'usage d'`UnyDesk`
- L'usage d'`UnyPort`

| Sujet | Libre-service possible | Support recommande |
| --- | --- | --- |
| Facture PDF | Oui | Si le document est absent ou incoherent |
| Paiement | Oui, pour lire l'état | Si le statut reste bloque ou contradictoire |
| Commande | Oui, pour suivre la référence et le statut | Si la livraison ne progresse plus |
| VM | Oui, pour lire un état simple | Si le comportement devient ambigu ou risqué |
| Data Disk Mode | Lecture prudente possible | Oui des qu'une action de reprise est sensible |
| UnyDesk / UnyPort | Oui, pour utiliser la surface | Si l'accès ou l'interprétation pose problème |

## Bon format de demande support
Une bonne demande support est concrete et breve.

```markdown
Objet : VM visible mais service indisponible

Reference commande : TRI-2026-00421
Service : VM Alpine
Mode actuel : Data Disk Mode
Probleme observe : système de fichiers visible, application non demarree
Resultat attendu : confirmer s'il faut reprendre ou revenir en mode normal
```

## Avant d'escalader
Collectez d'abord le minimum :

- Reference de commande
- État facture ou paiement si utile
- Nom de VM s'il existe
- Mode courant : normal, maintenance ou DDM
- Observation console précise

```bash
# Exemple de lot d'informations a relever
hostname
uptime
ip addr
lsblk
df -h
```

| Information a relever | Pourquoi elle aide | Exemple |
| --- | --- | --- |
| Reference commande | Identifier le dossier | `TRI-2026-00421` |
| Etat paiement | Distinguer financier et technique | `confirme` |
| Nom de VM | Pointer le bon environnement | `VM-EXEMPLE01` |
| Mode courant | Situer le contexte | `normal`, `maintenance`, `DDM` |
| Observation console | Donner un symptome concret | volume non monte, service absent |

## Support ou libre-service
`TRINITY` cherche a exposer assez d'information pour permettre une action prudente sans transformer chaque situation en ticket support.

Le libre-service convient pour :

- Lire une facture
- Vérifier un état de paiement
- Ouvrir une console
- Confirmer si une VM est en ligne

Le support convient pour :

- Livraison de commande bloquee
- Incoherence de paiement
- État VM peu clair
- Action de reprise avec risque sur les données

| Situation | Libre-service | Ticket support |
| --- | --- | --- |
| Lire une facture | Oui | Non, sauf document manquant |
| Verifier une VM en ligne | Oui | Non, si l'état est clair |
| Diagnostiquer un volume sensible | Limite | Oui |
| Recuperer un service apres incident | Limite | Oui |
| Comprendre un statut contradictoire | Non | Oui |

## Surfaces a utiliser
Utilisez la bonne surface selon le besoin :

- `TRINITY` Pour le compte, les commandes, les factures et le point d'entrée service
- `UnyDesk` Pour l'assistance distante et l'interaction
- `UnyPort` Pour l'état infra et la supervision
