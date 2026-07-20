# Accès et authentification
`UnyPort` utilise un modèle d'authentification compact construit autour des utilisateurs locaux, des cookies JWT et de la protection CSRF. L'application supporte aussi la connexion OAuth via GitHub et GitLab lorsque les réglages fournisseurs sont complets.

## Utilisateurs locaux et bootstrap
La source d'identité principale est `settings/users.json`.

Comportement important :

- Si `users.json` n'existe pas, `UnyPort` initialise un premier compte admin
- L'email initialise est `démo@unyport.app`
- Le mot de passe vient de `UNYPORT_ADMIN_PASSWORD` ou retombe sur la valeur intégrée
- Le dépôt fournit aussi actuellement un utilisateur local de démo pour l'evaluation de la source

Cela signifie que le parcours de déploiement et le parcours d'evaluation du dépôt sont proches, mais pas identiques.

## Rôles
Trois rôles sont acceptés par le backend :

- `admin`
- `operator`
- `viewer`

Leur sens opérationnel est :

- `viewer` : Usage authentifié en lecture seule
- `operator` : Usage authentifié avec écritures courantes comme le profil et le mot de passe
- `admin` : Accès complet, y compris administration des utilisateurs et du branding

Dans l'UI actuelle, les viewers peuvent consulter le portail mais ne peuvent pas enregistrer des changements de profil ni mettre à jour leurs identifiants.

## Fournisseurs OAuth
OAuth est implemente pour :

- GitHub
- GitLab

Les declarations fournisseurs vivent dans `settings/config.yaml`. Les valeurs d'exemple sont volontairement ignorees, de sorte qu'OAuth n'est actif que lorsqu'un vrai `client_id`, un vrai `client_secret` et une vraie `redirect_url` sont renseignes.

## Modele de session
Apres authentification, `UnyPort` emet un cookie JWT :

- Signe avec `security.jwt_secret`
- Stocke en cookie HTTP-only
- Protege par le réglage `https` pour le comportement secure-cookie
- Borne dans le temps selon `security_extra.session_timeout_mins`

## CSRF, limitation et trusted origins
L'application impose aussi :

- Une protection CSRF avec un endpoint dédié `/api/csrf`
- Une limitation de login, `5` tentatives par minute par défaut
- Une validation des trusted origins pour les requetes qui modifient l'état

Si `trusted_origins` est vide, `UnyPort` calcule une liste par défaut à partir des interfaces actives locales sur le port `8800`.

## Actions admin
Les actions d'écriture reservees aux admins incluent actuellement :

- Creer des utilisateurs
- Changer les rôles
- Supprimer un utilisateur sauf son propre compte
- Mettre à jour ou reinitialiser le branding de l'instance

Ce périmètre garde l'administration explicite et limitéée.
