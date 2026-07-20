# Évolution
Cette page synthétise la manière dont `UnyPort` à évolue fonctionnellement à travers l'historique visible du dépôt et le code actuel.

## Direction monitoring-first
Des le départ, `UnyPort` évolue comme un control plane orienté monitoring :

- État système live avant l'orchestration
- Lecture des rôles d'hôte avant l'abstraction
- Un portail opérateur unique avant plusieurs dashboards

Cette direction est explicite dans le README et reste visible dans les routes comme dans l'UI.

## Meilleure ergonomie opérateur
Les travaux récents ont rendu le produit plus praticable au quotidien :

- Navigation mobile et hamburger
- Séparation plus nette des pages
- Heatmap de redémarrage
- Carte réseau refinee
- Remontée visible des versions

Ce ne sont pas de simples retouches cosmétiques. Cela change la vitesse de lecture d'un hôte par un opérateur.

## Lecture plateforme plus mature
Le code actuel montre une lecture d'infrastructure plus mature que ne le laissaient penser les premières pages overview :

- Distinction Dom0 versus DomU
- Inspection hyperviseur et domaines Xen
- Lecture Alpine LBU
- Lecture OpenRC sans dépendre d'outils lourds externes
- Contrôles de sécurité relies à l'hôte réel

`UnyPort` ressemble ainsi davantage à un observateur natif de plateforme qu'à un shell d'administration web générique.

## Packaging opérationnel plus solide
Le dépôt à aussi évolue dans sa façon d'être livre :

- Mode développement avec assets live
- Build production avec assets embarqués
- Binaires strips
- Compression UPX
- HTTPS et HTTP/3 en option

Cette évolution packaging soutient directement la promesse single binary et low overhead.

## Maturité de l'identité et de l'instance
La surface produit actuelle inclut maintenant :

- Administration des utilisateurs locaux
- Support des fournisseurs OAuth
- Stockage du profil et de la clé SSH
- Récupération publique du branding
- Personnalisation admin du branding

Cela transforme `UnyPort` d'un dashboard local en vraie surface opérateur multi-utilisateurs.

## Limite actuelle et étape suivante
Au `2026-07-17`, le produit public doit encore être compris comme une `V1` :

- Fort sur le monitoring
- Fort sur le contexte hôte
- Utile pour l'entrée proxy contrôlée
- Pas encore un orchestrateur complet du cycle de vie Xen

Le README annonce explicitement une future `V2` autour de workflows d'orchestration plus larges. La documentation actuelle doit donc présenter `UnyPort` comme un portail d'exploitation sérieux, mais à périmètre volontairement borne.
