# Proxy applicatif
`UnyPort` peut exposer certaines applications internes via des reverse proxies contrôles montés sous `/proxy/<name>/`. Cela permet a l'opérateur d'entrer dans des outils internes depuis le même portail authentifie au lieu d'exposer chaque outil directement.

## Declarer une application
Les applications proxyfiees sont declarees dans `settings/config.yaml` :

```yaml
apps:
  - name: TTYd
    host: ttyd
    port: 7681
    type: terminal
```

Au runtime, le portail exposé les metadonnees via `/api/apps` et monte le proxy sous :

```text
/proxy/ttyd/
```

## Comportement du proxy
Le reverse proxy realise une petite quantite de durcissement et de reecriture :

- Suppression des headers de forwarding non fiables
- Definition de `X-Forwarded-For`, `X-Forwarded-Proto` et `X-Forwarded-Prefix`
- Reecriture des headers `Location` pour garder les redirections sous le prefixe monté
- Reecriture des chemins de cookies pour que les cookies backend restent scopes au proxy
- Redirection des réponses `401` et `403` non JSON vers la racine du portail

## Cas spécifique TTYd
Le code applique une CSP plus permissive uniquement pour le montage `ttyd`, afin que les assets du terminal web et les flux websocket puissent fonctionner correctement. Les autres applications proxyfiees gardent le comportement durci standard.

## Pourquoi c'est utile
Cette couche proxy garde `UnyPort` ciblee :

- Les opérateurs ont un point d'entrée authentifie unique
- Les applications internes n'ont pas besoin de leur propre exposition publique
- Le produit reste petit tout en servant de pont vers des outils orientés terminal

La fonctionnalité doit donc être comprise comme une passerelle contrôlée, pas comme une marketplace d'applications.
