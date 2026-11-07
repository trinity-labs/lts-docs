# Mode d'emploi
Cette page décrit le parcours normal d'utilisation de `UnyCloud`.

## Parcours courant
1. ➡️ Ouvrir `<cloud-domain>`
2. ➡️ Se connecter avec les identifiants fournis
3. ➡️ Naviguer dans l'espace disponible
4. ➡️ Déposer, télécharger, renommer ou organiser les fichiers selon les droits
5. ➡️ Se déconnecter sur un poste partagé

```text
Ouvrir le cloud
  -> Login
  -> Parcourir les dossiers
  -> Transférer les fichiers
  -> Vérifier le résultat
```

## Bonnes pratiques
- ✅ Vérifier le dossier cible avant un dépôt
- ⭕ Éviter les noms de fichiers ambigus
- ⭕ Ne pas utiliser l'espace cloud comme coffre de secrets sans consigne explicite
- ✅ Prévenir le support si le login fonctionne mais que l'espace attendu est vide

## Symptômes fréquents
- ✅ Page blanche : incident frontend, proxy ou runtime
- ✅ Branding absent : problème sur `/static/custom.css` ou assets
- ✅ Identifiants non proposés par le navigateur : comportement login à contrôler côté proxy
- ✅ Fichiers absents : vérifier le périmètre de compte avant de conclure à une perte de données
