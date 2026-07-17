# Support et exploitation
Le support `TRINITY` est a la fois commercial et technique. Cote public, cela signifie que la plateforme doit aider l'utilisateur a comprendre quand demander de l'aide et quoi inclure dans sa demande.

## Perimetre support
Le support `TRINITY` peut explicitement concerner :

- les commandes et questions de facturation
- le suivi de paiement
- l'acces aux factures
- les environnements Alpine Linux
- les services VM reposant sur Xen
- les situations Data Disk Mode
- l'usage d'`UnyDesk`
- l'usage d'`UnyPort`

## Bon format de demande support
Une bonne demande support est concrete et breve.

```markdown
Objet : VM visible mais service indisponible

Reference commande : TRI-2026-00421
Service : VM Alpine
Mode actuel : Data Disk Mode
Probleme observe : systeme de fichiers visible, application non demarree
Resultat attendu : confirmer s'il faut reprendre ou revenir en mode normal
```

## Avant d'escalader
Collectez d'abord le minimum :

- reference de commande
- etat facture ou paiement si utile
- nom de VM s'il existe
- mode courant : normal, maintenance ou DDM
- capture ou observation console precise

```bash
# Exemple de lot d'informations a relever
hostname
uptime
ip addr
lsblk
df -h
```

## Support ou libre-service
`TRINITY` cherche a exposer assez d'information pour permettre une action prudente sans transformer chaque situation en ticket support.

Le libre-service convient pour :

- lire une facture
- verifier un etat de paiement
- ouvrir une console
- confirmer si une VM est en ligne

Le support convient pour :

- livraison de commande bloquee
- incoherence de paiement
- etat VM peu clair
- action de reprise avec risque sur les donnees

## Surfaces a utiliser
Utilisez la bonne surface selon le besoin :

- `TRINITY` pour le compte, les commandes, les factures et le point d'entree service
- `UnyDesk` pour l'assistance distante et l'interaction
- `UnyPort` pour l'etat infra et la supervision
