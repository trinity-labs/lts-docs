# Glossaire
Ce glossaire donne une lecture compacte des termes les plus importants d'`UnyPort`.

## Termes coeur
- `UnyPort` : Portail de supervision et de contrôle orienté opérateur
- `viewer` : Rôle authentifié en lecture seule
- `operator` : Rôle authentifié avec écritures courantes
- `admin` : Rôle authentifié avec administration des utilisateurs et du branding
- `branding` : Configuration logo et couleurs de rôle stockée dans `branding.yaml`

## Termes plateforme
- `Alpine Linux` : Distribution Linux légère utilisée comme modèle d'hôte privilégie
- `Xen` : Couche hyperviseur utilisée pour les infrastructures Dom0 et DomU
- `Dom0` : Domaine de contrôle Xen portant le contexte hyperviseur
- `DomU` : Domaine invite Xen vu comme machine virtuelle
- `LBU` : Mécanisme Alpine de sauvegarde et de persistance

## Termes runtime
- `SSE` : Server-sent events utilisés pour les snapshots système live
- `proxy app` : Application interne exposée sous `/proxy/<name>/`
- `startup history` : Timeline de redémarrages stockée dans `startup-history.jsonl`
- `trusted origins` : Hôtes autorisés pour les requêtes de changement d'état protégées par CSRF

## Modèle de lecture
```text
TRINITY = cycle de vie client
UnyDesk = accès distant
UnyPort = supervision hôte et entree contrôlée
```
