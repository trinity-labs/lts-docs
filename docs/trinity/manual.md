# Mode d'emploi TRINITY
Cette page est le point d'entrée pratique de `TRINITY`. Elle explique comment utiliser la plateforme depuis la première visite jusqu'a une situation plus technique autour d'une VM ou d'une reprise.

## Le parcours normal
Le parcours client habituel suit cette logique :

1. Decouvrir une offre
2. Creer un compte
3. Passer une commande
4. Effectuer un paiement
5. Consulter la facture et l'état de la commande
6. Acceder au service associe
7. Solliciter le support si nécessaire

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

- Le service exact souhaite
- L'identité de facturation
- Le niveau de support attendu
- Le besoin eventuel de console, de VM, d'`UnyDesk` ou d'`UnyPort`

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

- L'historique de commande
- Les factures PDF
- L'état de paiement
- L'état d'une VM
- L'accès console
- La visibilité du Data Disk Mode
- Les points d'entrée support et chat
- Les liens vers `UnyDesk` et `UnyPort`

## Quand le parcours devient plus technique
Certaines offres vont plus loin qu'un simple achat. Le parcours devient plus operationnel lorsqu'il faut :

- Vérifier une VM
- Ouvrir une console
- Récupérer un environnement
- Inspecter un volume de données
- Confirmer un état de service avant escalade support

```bash
# Exemple de session console une fois l'acces ouvert
hostname
uptime
ip addr
df -h
```

## Comment lire la suite
Les pages suivantes forment le mode d'emploi détaillé :

- `Compte et commandes`
- `Paiements et factures`
- `VM et console`
- `Data Disk Mode`
- `Alpine Linux et Xen`
- `Support et exploitation`
