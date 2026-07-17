# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants d'`UnyPort`.

## Termes coeur
- `UnyPort` : portail de supervision et de controle oriente operateur
- `viewer` : role authentifie en lecture seule
- `operator` : role authentifie avec ecritures courantes
- `admin` : role authentifie avec administration des utilisateurs et du branding
- `branding` : configuration logo et couleurs de role stockee dans `branding.yaml`

## Termes plateforme
- `Alpine Linux` : distribution Linux legere utilisee comme modele d'hote privilegie
- `Xen` : couche hyperviseur utilisee pour les infrastructures Dom0 et DomU
- `Dom0` : domaine de controle Xen portant le contexte hyperviseur
- `DomU` : domaine invite Xen vu comme machine virtuelle
- `LBU` : mecanisme Alpine de sauvegarde et de persistance

## Termes runtime
- `SSE` : server-sent events utilises pour les snapshots systeme live
- `proxy app` : application interne exposee sous `/proxy/<name>/`
- `startup history` : timeline de redemarrages stockee dans `startup-history.jsonl`
- `trusted origins` : hotes autorises pour les requetes de changement d'etat protegees par CSRF

## Modele de lecture
```text
TRINITY = cycle de vie client
UnyDesk = acces distant
UnyPort = supervision hote et entree controlee
```
