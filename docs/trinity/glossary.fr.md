# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants de `TRINITY`.

## Termes coeur
- `TRINITY` : Portail public et surface de cycle de vie client
- `compte client` : Endroit ou restent visibles identite de facturation, commandes et factures
- `commande` : Enregistrement visible cote client d'un service demande
- `facture` : Document de facturation lie a une commande
- `etat de paiement` : Etat visible du reglement

## Termes VM
- `VM` : Machine virtuelle exposee via la plateforme lorsque le service l'autorise
- `console` : Acces texte direct a une VM
- `online` : La machine repond dans son mode courant
- `maintenance` : La machine est accessible pour intervention technique
- `recovery` : La machine est exposee surtout pour inspection ou restauration

## Termes plateforme
- `Alpine Linux` : Systeme d'exploitation leger utilise dans de nombreux environnements
- `Xen` : Couche hyperviseur de virtualisation
- `DDM` : Data Disk Mode, mode oriente stockage et recuperation
- `UnyDesk` : Surface d'acces distant et d'assistance
- `UnyPort` : Surface de supervision et de pilotage

## Lecture operationnelle
```text
TRINITY = cycle de vie client
Alpine Linux = systeme invite
Xen = couche de virtualisation
DDM = mode de maintenance et de reprise
```
