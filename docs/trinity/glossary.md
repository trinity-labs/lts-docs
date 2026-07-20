# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants de `TRINITY`.

## Termes coeur
- `TRINITY` : Portail public et surface de cycle de vie client
- `compte client` : Endroit ou restent visibles identité de facturation, commandes et factures
- `commande` : Enregistrement visible côté client d'un service demande
- `facture` : Document de facturation lie à une commande
- `état de paiement` : État visible du règlement

## Termes VM
- `VM` : Machine virtuelle exposée via la plateforme lorsque le service l'autorise
- `console` : Accès texte direct à une VM
- `online` : La machine répond dans son mode courant
- `maintenance` : La machine est accessible pour intervention technique
- `récupération` : La machine est exposée surtout pour inspection ou restauration

## Termes plateforme
- `Alpine Linux` : Système d'exploitation léger utilise dans de nombreux environnements
- `Xen` : Couche hyperviseur de virtualisation
- `DDM` : Data Disk Mode, mode orienté stockage et récupération
- `UnyDesk` : Surface d'accès distant et d'assistance
- `UnyPort` : Surface de supervision et de pilotage

## Lecture opérationnelle
```text
TRINITY = cycle de vie client
Alpine Linux = système invite
Xen = couche de virtualisation
DDM = mode de maintenance et de reprise
```
