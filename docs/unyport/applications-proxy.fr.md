# Proxy applicatif
`UnyPort` peut exposer certaines applications internes via des reverse proxies controles montes sous `/proxy/<name>/`. Cela permet a l'operateur d'entrer dans des outils internes depuis le meme portail authentifie au lieu d'exposer chaque outil directement.

## Declarer une application
Les applications proxyfiees sont declarees dans `settings/config.yaml` :

```yaml
apps:
  - name: TTYd
    host: ttyd
    port: 7681
    type: terminal
```

Au runtime, le portail expose les metadonnees via `/api/apps` et monte le proxy sous :

```text
/proxy/ttyd/
```

## Comportement du proxy
Le reverse proxy realise une petite quantite de durcissement et de reecriture :

- suppression des headers de forwarding non fiables
- definition de `X-Forwarded-For`, `X-Forwarded-Proto` et `X-Forwarded-Prefix`
- reecriture des headers `Location` pour garder les redirections sous le prefixe monte
- reecriture des chemins de cookies pour que les cookies backend restent scopes au proxy
- redirection des reponses `401` et `403` non JSON vers la racine du portail

## Cas specifique TTYd
Le code applique une CSP plus permissive uniquement pour le montage `ttyd`, afin que les assets du terminal web et les flux websocket puissent fonctionner correctement. Les autres applications proxyfiees gardent le comportement durci standard.

## Pourquoi c'est utile
Cette couche proxy garde `UnyPort` ciblee :

- les operateurs ont un point d'entree authentifie unique
- les applications internes n'ont pas besoin de leur propre exposition publique
- le produit reste petit tout en servant de pont vers des outils orientes terminal

La fonctionnalite doit donc etre comprise comme une passerelle controlee, pas comme une marketplace d'applications.
