# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants d'`UnyPort`.

## Termes coeur
- `UnyPort` : Portail de supervision et de controle oriente operateur
- `viewer` : Role authentifie en lecture seule
- `operator` : Role authentifie avec ecritures courantes
- `admin` : Role authentifie avec administration des utilisateurs et du branding
- `branding` : Configuration logo et couleurs de role stockee dans `branding.yaml`

## Termes plateforme
- `Alpine Linux` : Distribution Linux legere utilisee comme modele d'hote privilegie
- `Xen` : Couche hyperviseur utilisee pour les infrastructures Dom0 et DomU
- `Dom0` : Domaine de controle Xen portant le contexte hyperviseur
- `DomU` : Domaine invite Xen vu comme machine virtuelle
- `LBU` : Mecanisme Alpine de sauvegarde et de persistance

## Termes runtime
- `SSE` : Server-sent events utilises pour les snapshots systeme live
- `proxy app` : Application interne exposee sous `/proxy/<name>/`
- `startup history` : Timeline de redemarrages stockee dans `startup-history.jsonl`
- `trusted origins` : Hotes autorises pour les requetes de changement d'etat protegees par CSRF

## Modele de lecture
```text
TRINITY = cycle de vie client
UnyDesk = acces distant
UnyPort = supervision hote et entree controlee
```
