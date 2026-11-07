# Exemples
## Exemple 1 - vérifier que le service répond
```sh
curl -ks https://<cloud-domain>/login | sed -n '1,80p'
```

Résultat attendu :

- ✅ Une réponse HTML
- ✅ Pas de page d'erreur proxy
- ✅ Pas de timeout

## Exemple 2 - vérifier le branding
```sh
curl -ks https://<cloud-domain>/static/custom.css | sed -n '1,80p'
```

Résultat attendu :

- ✅ Le CSS UnyCloud répond
- ✅ Les images référencées existent
- ✅ Le navigateur n'utilise pas un ancien cache

## Exemple 3 - distinguer login et branding
Si la page est visuellement incorrecte mais que le login fonctionne, commencer par le CSS.

Si le navigateur ne propose pas les identifiants enregistrés, commencer par le comportement de formulaire et le proxy.
