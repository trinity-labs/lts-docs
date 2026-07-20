# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants d'`UnyPort`.

## Termes coeur
- `UnyPort` : Portail de supervision et de contrôle orienté opérateur
- `viewer` : Rôle authentifie en lecture seule
- `operator` : Rôle authentifie avec ecritures courantes
- `admin` : Rôle authentifie avec administration des utilisateurs et du branding
- `branding` : Configuration logo et couleurs de rôle stockee dans `branding.yaml`

## Termes plateforme
- `Alpine Linux` : Distribution Linux légère utilisée comme modele d'hôte privilégie
- `Xen` : Couche hyperviseur utilisée pour les infrastructures Dom0 et DomU
- `Dom0` : Domaine de contrôle Xen portant le contexte hyperviseur
- `DomU` : Domaine invite Xen vu comme machine virtuelle
- `LBU` : Mecanisme Alpine de sauvegarde et de persistance

## Termes runtime
- `SSE` : Server-sent events utilises pour les snapshots système live
- `proxy app` : Application interne exposee sous `/proxy/<name>/`
- `startup history` : Timeline de redemarrages stockee dans `startup-history.jsonl`
- `trusted origins` : Hôtes autorises pour les requetes de changement d'état protegees par CSRF

## Modele de lecture
```text
TRINITY = cycle de vie client
UnyDesk = accès distant
UnyPort = supervision hote et entree contrôlée
```
