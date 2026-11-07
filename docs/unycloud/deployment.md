# Déploiement
`UnyCloud` est déployé comme un service Filebrowser derrière reverse proxy.

## Forme générale
```text
<cloud-host>
  -> docker_cloud
  -> conteneur filebrowser
  -> stockage monté

TRINITY-SERVER
  -> nginx
  -> <cloud-domain>
```

## Éléments persistants
Les éléments importants sont :

- ✅ La base Filebrowser
- ✅ La configuration
- ✅ Le branding
- ✅ Le stockage monté

Le conteneur est remplaçable, mais ces éléments doivent survivre aux redémarrages.

## Exposition
Le service applicatif reste interne. L'exposition publique passe par `nginx`, TLS et les en-têtes de sécurité.

## Principe de maintenance
Un redémarrage Docker ne suffit pas toujours à diagnostiquer un incident. Il faut distinguer :

- ✅ Le conteneur
- ✅ La base
- ✅ Le stockage
- ✅ Le branding
- ✅ Le reverse proxy
- ✅ Le cache navigateur
