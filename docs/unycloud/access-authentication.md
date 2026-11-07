# Accès et authentification
`UnyCloud` est exposé derrière HTTPS et demande une authentification avant l'accès aux fichiers.

## Point d'entrée
Le point d'entrée utilisateur est :

```text
https://<cloud-domain>/login
```

## Login
L'interface de login est rendue par l'application Filebrowser. Le comportement visible dépend donc de deux niveaux :

- ✅ Le bundle applicatif Filebrowser
- ✅ Le reverse proxy TRINITY qui peut corriger certains attributs HTML

## Autofill navigateur
L'historique Filebrowser a montré un point important : la page de login n'est pas un HTML statique simple. Les champs peuvent être produits par une SPA, ce qui peut gêner l'autofill si les attributs `name` et `autocomplete` ne sont pas présents.

La règle d'exploitation est :

- ✅ problème visuel : vérifier le branding
- ✅ problème d'autofill : vérifier le proxy
- ✅ problème d'identifiants : vérifier le compte et la base Filebrowser

## Séparation des responsabilités
`UnyCloud` présente l'expérience. Filebrowser porte la gestion applicative des fichiers. Le reverse proxy porte l'exposition HTTPS et certains garde-fous de sécurité.
