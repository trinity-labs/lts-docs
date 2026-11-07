# Architecture d'UnyCloud
`UnyCloud` est une façade produit au-dessus d'un runtime issu de Filebrowser. L'architecture reste compacte : un binaire compatible, un conteneur applicatif, une base locale, un arbre de branding, un stockage monté et un reverse proxy HTTPS.

## Couche 1 - navigateur et domaine
L'entrée publique est :

```text
https://<cloud-domain>
```

Le navigateur ne parle pas directement au conteneur. Il passe par le reverse proxy TRINITY, qui applique TLS, les en-têtes de sécurité et les ajustements nécessaires au login.

## Couche 2 - reverse proxy
Le proxy `nginx` côté TRINITY route vers le backend Filebrowser interne :

```text
<cloud-domain>
  -> nginx TRINITY-SERVER
  -> backend interne Filebrowser
```

Cette couche compte aussi pour le comportement de login, notamment lorsque le bundle SPA Filebrowser ne fournit pas nativement les attributs attendus par le navigateur.

## Couche 3 - runtime compatible Filebrowser
Le runtime UnyCloud conserve le contrat Filebrowser : mêmes commandes, même base, mêmes fichiers de configuration et même nom de binaire possible pour les services existants. Le service lit :

- Une base persistante
- Un fichier de configuration
- Un arbre de branding
- Un stockage racine monté

## Couche 4 - stockage
Le stockage est présenté au conteneur comme racine de navigation. L'objectif est de rendre les fichiers disponibles sans coupler l'interface web à un backend applicatif lourd.

## Couche 5 - branding et durcissement
Le branding actif est servi via `/static/custom.css` et les images associées. Le CSS porte l'apparence UnyCloud, tandis que les corrections de comportement de login restent plutôt du ressort du reverse proxy ou du fork applicatif selon le niveau concerné.
