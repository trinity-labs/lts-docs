# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants de `TRINITY`.

## Termes coeur
- `TRINITY` : portail public et surface de cycle de vie client
- `compte client` : endroit ou restent visibles identite de facturation, commandes et factures
- `commande` : enregistrement visible cote client d'un service demande
- `facture` : document de facturation lie a une commande
- `etat de paiement` : etat visible du reglement

## Termes VM
- `VM` : machine virtuelle exposee via la plateforme lorsque le service l'autorise
- `console` : acces texte direct a une VM
- `online` : la machine repond dans son mode courant
- `maintenance` : la machine est accessible pour intervention technique
- `recovery` : la machine est exposee surtout pour inspection ou restauration

## Termes plateforme
- `Alpine Linux` : systeme d'exploitation leger utilise dans de nombreux environnements
- `Xen` : couche hyperviseur de virtualisation
- `DDM` : Data Disk Mode, mode oriente stockage et recuperation
- `UnyDesk` : surface d'acces distant et d'assistance
- `UnyPort` : surface de supervision et de pilotage

## Lecture operationnelle
```text
TRINITY = cycle de vie client
Alpine Linux = systeme invite
Xen = couche de virtualisation
DDM = mode de maintenance et de reprise
```
