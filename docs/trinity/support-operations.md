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

## Surfaces a utiliser
Utilisez la bonne surface selon le besoin :

- `TRINITY` Pour le compte, les commandes, les factures et le point d'entrée service
- `UnyDesk` Pour l'assistance distante et l'interaction
- `UnyPort` Pour l'état infra et la supervision
