# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants d'`UnyPort`.

## Termes coeur
- `UnyPort` : Portail de supervision et de contrôle orienté opérateur
- `viewer` : Rôle authentifié en lecture seule
- `operator` : Rôle authentifié avec écritures courantes
- `admin` : Rôle authentifié avec administration des utilisateurs et du branding
- `branding` : Configuration logo et couleurs de rôle stockee dans `branding.yaml`

## Termes plateforme
- `Alpine Linux` : Distribution Linux légère utilisée comme modèle d'hôte privilégie
- `Xen` : Couche hyperviseur utilisée pour les infrastructures Dom0 et DomU
- `Dom0` : Domaine de contrôle Xen portant le contexte hyperviseur
- `DomU` : Domaine invite Xen vu comme machine virtuelle
- `LBU` : Mecanisme Alpine de sauvegarde et de persistance

## Termes runtime
- `SSE` : Server-sent events utilises pour les snapshots système live
- `proxy app` : Application interne exposée sous `/proxy/<name>/`
- `startup history` : Timeline de redemarrages stockee dans `startup-history.jsonl`
- `trusted origins` : Hôtes autorises pour les requetes de changement d'état protégées par CSRF

## Modele de lecture
```text
TRINITY = cycle de vie client
UnyDesk = accès distant
UnyPort = supervision hôte et entree contrôlée
```
