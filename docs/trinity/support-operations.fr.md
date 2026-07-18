# Support et exploitation
Le support `TRINITY` est a la fois commercial et technique. Cote public, cela signifie que la plateforme doit aider l'utilisateur a comprendre quand demander de l'aide et quoi inclure dans sa demande.

## Perimetre support
Le support `TRINITY` peut explicitement concerner :

- Les commandes et questions de facturation
- Le suivi de paiement
- L'acces aux factures
- Les environnements Alpine Linux
- Les services VM reposant sur Xen
- Les situations Data Disk Mode
- L'usage d'`UnyDesk`
- L'usage d'`UnyPort`

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

- Reference de commande
- Etat facture ou paiement si utile
- Nom de VM s'il existe
- Mode courant : normal, maintenance ou DDM
- Capture ou observation console precise

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

- Lire une facture
- Verifier un etat de paiement
- Ouvrir une console
- Confirmer si une VM est en ligne

Le support convient pour :

- Livraison de commande bloquee
- Incoherence de paiement
- Etat VM peu clair
- Action de reprise avec risque sur les donnees

## Surfaces a utiliser
Utilisez la bonne surface selon le besoin :

- `TRINITY` Pour le compte, les commandes, les factures et le point d'entree service
- `UnyDesk` Pour l'assistance distante et l'interaction
- `UnyPort` Pour l'etat infra et la supervision
