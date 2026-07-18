# Exemples
Cette page regroupe des exemples pratiques pour des situations courantes dans `TRINITY`.

## Exemple 1 - verifier une VM nouvellement livree
```bash
hostname
uptime
ip addr
df -h
```

Lecture attendue :

- La machine repond
- L'uptime est coherent
- Le reseau est visible
- Le systeme principal est monte

## Exemple 2 - identifier un contexte DDM
```bash
lsblk
findmnt
cat /etc/os-release
```

Lecture attendue :

- Les disques sont visibles
- Les montages actifs sont lisibles
- Un userland Alpine leger est present

## Exemple 3 - preparer un message support paiement
```markdown
Reference commande : TRI-2026-00421
Fournisseur paiement : virement bancaire
Statut observe : en attente plus longtemps que prevu
Facture visible : non
Action demandee : confirmer si le reglement est encore en attente
```

## Exemple 4 - resumer un incident VM pour le support
```json
{
  "vm": "vm-trinity01",
  "mode": "data_disk_mode",
  "etat": "online",
  "probleme": "service pas encore revenu en mode normal",
  "indices": [
    "hostname ok",
    "systeme de fichiers monte",
    "application non demarree"
  ]
}
```

## Exemple 5 - lecture client de l'ecosysteme
```text
TRINITY  -> compte, commandes, factures, documentation
UnyDesk  -> acces distant et assistance
UnyPort  -> etat, donnees hotes, supervision service
```
