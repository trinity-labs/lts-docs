# Proxy applicatif
`UnyPort` peut exposer certaines applications internes via des reverse proxies contrôles montés sous `/proxy/<name>/`. Cela permet à l'opérateur d'entrer dans des outils internes depuis le même portail authentifié au lieu d'exposer chaque outil directement.

## Déclarer une application
Les applications proxifiées sont déclarées dans `settings/config.yaml` :

```yaml
apps:
  - name: TTYd
    host: ttyd
    port: 7681
    type: terminal
```

Au runtime, le portail exposé les métadonnées via `/api/apps` et monte le proxy sous :

```text
/proxy/ttyd/
```

## Comportement du proxy
Le reverse proxy réalise une petite quantité de durcissement et de réécriture :

- Suppression des headers de forwarding non fiables
- Définition de `X-Forwarded-For`, `X-Forwarded-Proto` et `X-Forwarded-Prefix`
- Réécriture des headers `Location` pour garder les redirections sous le préfixe monté
- Réécriture des chemins de cookies pour que les cookies backend restent scopes au proxy
- Redirection des réponses `401` et `403` non JSON vers la racine du portail

## Cas spécifique TTYd
Le code applique une CSP plus permissive uniquement pour le montage `ttyd`, afin que les assets du terminal web et les flux websocket puissent fonctionner correctement. Les autres applications proxifiées gardent le comportement durci standard.

## Pourquoi c'est utile
Cette couche proxy garde `UnyPort` ciblée :

- Les opérateurs ont un point d'entrée authentifié unique
- Les applications internes n'ont pas besoin de leur propre exposition publique
- Le produit reste petit tout en servant de pont vers des outils orientés terminal

La fonctionnalité doit donc être comprise comme une passerelle contrôlée, pas comme une marketplace d'applications.
