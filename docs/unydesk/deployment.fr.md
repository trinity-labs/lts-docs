# Déploiement
`UnyDesk` se déploie comme un service autonome. Le point public important est qu'il possède son propre runtime, sa propre API et son propre chemin de distribution host.

## Modèle runtime
Le service repose sur :

- un backend Go
- une adresse HTTP principale d'écoute
- un HTTP/3 natif optionnel lorsque les certificats sont configurés
- des assets frontend statiques
- des fichiers de réglage pour utilisateurs, hosts, hosts approuvés et identité publique
- des artefacts de téléchargement host servis depuis le répertoire configuré

## Modèle reverse proxy
Pour une exposition Internet, le modèle habituel est :

- exposer `UnyDesk` derrière un reverse proxy
- transmettre les headers d'hôte et d'adresse client d'origine
- garder les cookies et CSRF cohérents avec l'URL publique
- exposer les chemins websocket pour les canaux host et session
- terminer TLS au proxy sauf activation volontaire du TLS/HTTP3 natif

## Endpoints publics à préserver
Les déploiements doivent préserver :

- `/healthz`
- `/api/v1/info`
- `/api/v1/auth/*`
- `/api/v1/bootstrap/*`
- `/api/v1/hosts`
- `/api/v1/hosts/ws`
- `/api/v1/sessions`
- `/download/host/*`

Si ces routes sont réécrites incorrectement, le frontend peut charger alors que le pairing host ou le routage session échoue.

## Attendu opérationnel
Un déploiement correct doit permettre d'ouvrir l'UI, télécharger un package host, s'authentifier ou utiliser une invitation bornée, voir la présence host et créer une session sans changer les noms produits ni basculer dans les menus `TRINITY` ou `UnyPort`.
