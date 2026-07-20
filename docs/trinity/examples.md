# Exemples
Cette page regroupe des exemples pratiques pour des situations courantes dans `TRINITY`.

## Exemple 1 - vérifier une VM nouvellement livree
```bash
hostname
uptime
ip addr
df -h
```

Lecture attendue :

- La machine répond
- L'uptime est cohérent
- Le réseau est visible
- Le système principal est monté

## Exemple 2 - identifier un contexte DDM
```bash
lsblk
findmnt
cat /etc/os-release
```

Lecture attendue :

- Les disques sont visibles
- Les montages actifs sont lisibles
- Un userland Alpine léger est présent

## Exemple 3 - préparer un message support paiement
```markdown
Référence commande : TRI-2026-00421
Fournisseur paiement : virement bancaire
Statut observe : en attente plus longtemps que prevu
Facture visible : non
Action demandee : confirmer si le règlement est encore en attente
```

## Exemple 4 - résumer un incident VM pour le support
```json
{
  "vm": "vm-trinity01",
  "mode": "data_disk_mode",
  "état": "online",
  "problème": "service pas encore revenu en mode normal",
  "indices": [
    "hostname ok",
    "système de fichiers monté",
    "application non démarrée"
  ]
}
```

## Exemple 5 - lecture client de l'écosystème
```text
TRINITY  -> compte, commandes, factures, documentation
UnyDesk  -> accès distant et assistance
UnyPort  -> état, données hôtes, supervision service
```
