# Mode d'emploi TRINITY
Cette page est le point d'entree pratique de `TRINITY`. Elle explique comment utiliser la plateforme depuis la premiere visite jusqu'a une situation plus technique autour d'une VM ou d'une reprise.

## Le parcours normal
Le parcours client habituel suit cette logique :

1. decouvrir une offre
2. creer un compte
3. passer une commande
4. effectuer un paiement
5. consulter la facture et l'etat de la commande
6. acceder au service associe
7. solliciter le support si necessaire

```text
Visite du site
  -> Lecture de la documentation publique
  -> Creation du compte
  -> Saisie des informations de facturation
  -> Confirmation de la commande
  -> Paiement
  -> Suivi du cycle de vie du service
  -> Usage de la VM, de la console, d'UnyDesk ou d'UnyPort si disponible
```

## Avant de commander
Preparez quelques informations simples :

- le service exact souhaite
- l'identite de facturation
- le niveau de support attendu
- le besoin eventuel de console, de VM, d'`UnyDesk` ou d'`UnyPort`

```yaml
preparation_client:
  offre: "support TRINITY ou service infrastructure"
  profil_facturation: "entreprise ou particulier"
  besoin_console: true
  besoin_assistance_distante: false
  besoin_supervision: true
```

## Ce que TRINITY peut exposer
Selon le service, `TRINITY` peut exposer :

- l'historique de commande
- les factures PDF
- l'etat de paiement
- l'etat d'une VM
- l'acces console
- la visibilite du Data Disk Mode
- les points d'entree support et chat
- les liens vers `UnyDesk` et `UnyPort`

## Quand le parcours devient plus technique
Certaines offres vont plus loin qu'un simple achat. Le parcours devient plus operationnel lorsqu'il faut :

- verifier une VM
- ouvrir une console
- recuperer un environnement
- inspecter un volume de donnees
- confirmer un etat de service avant escalade support

```bash
# Exemple de session console une fois l'acces ouvert
hostname
uptime
ip addr
df -h
```

## Comment lire la suite
Les pages suivantes forment le mode d'emploi detaille :

- `Compte et commandes`
- `Paiements et factures`
- `VM et console`
- `Data Disk Mode`
- `Alpine Linux et Xen`
- `Support et exploitation`
