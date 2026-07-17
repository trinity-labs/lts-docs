# Acces et authentification
`UnyPort` utilise un modele d'authentification compact construit autour des utilisateurs locaux, des cookies JWT et de la protection CSRF. L'application supporte aussi la connexion OAuth via GitHub et GitLab lorsque les reglages fournisseurs sont completes.

## Utilisateurs locaux et bootstrap
La source d'identite principale est `settings/users.json`.

Comportement important :

- si `users.json` n'existe pas, `UnyPort` initialise un premier compte admin
- l'email initialise est `demo@unyport.app`
- le mot de passe vient de `UNYPORT_ADMIN_PASSWORD` ou retombe sur la valeur integree
- le depot fournit aussi actuellement un utilisateur local de demo pour l'evaluation de la source

Cela signifie que le parcours de deploiement et le parcours d'evaluation du depot sont proches, mais pas identiques.

## Roles
Trois roles sont acceptes par le backend :

- `admin`
- `operator`
- `viewer`

Leur sens operationnel est :

- `viewer` : usage authentifie en lecture seule
- `operator` : usage authentifie avec ecritures courantes comme le profil et le mot de passe
- `admin` : acces complet, y compris administration des utilisateurs et du branding

Dans l'UI actuelle, les viewers peuvent consulter le portail mais ne peuvent pas enregistrer des changements de profil ni mettre a jour leurs identifiants.

## Fournisseurs OAuth
OAuth est implemente pour :

- GitHub
- GitLab

Les declarations fournisseurs vivent dans `settings/config.yaml`. Les valeurs d'exemple sont volontairement ignorees, de sorte qu'OAuth n'est actif que lorsqu'un vrai `client_id`, un vrai `client_secret` et une vraie `redirect_url` sont renseignes.

## Modele de session
Apres authentification, `UnyPort` emet un cookie JWT :

- signe avec `security.jwt_secret`
- stocke en cookie HTTP-only
- protege par le reglage `https` pour le comportement secure-cookie
- borne dans le temps selon `security_extra.session_timeout_mins`

## CSRF, limitation et trusted origins
L'application impose aussi :

- une protection CSRF avec un endpoint dedie `/api/csrf`
- une limitation de login, `5` tentatives par minute par defaut
- une validation des trusted origins pour les requetes qui modifient l'etat

Si `trusted_origins` est vide, `UnyPort` calcule une liste par defaut a partir des interfaces actives locales sur le port `8800`.

## Actions admin
Les actions d'ecriture reservees aux admins incluent actuellement :

- creer des utilisateurs
- changer les roles
- supprimer un utilisateur sauf son propre compte
- mettre a jour ou reinitialiser le branding de l'instance

Ce perimetre garde l'administration explicite et limitee.
