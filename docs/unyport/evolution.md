# Evolution
Cette page synthétise la maniè re dont `UnyPort` a évolue fonctionnellement a travers l'historique visible du dépôt et le code actuel.

## Direction monitoring-first
Des le depart, `UnyPort` évolue comme un control plane orienté monitoring :

- État système live avant l'orchestration
- Lecture des rôles d'hôte avant l'abstraction
- Un portail opérateur unique avant plusieurs dashboards

Cette direction est explicite dans le README et reste visible dans les routes comme dans l'UI.

## Meilleure ergonomie opérateur
Les travaux recents ont rendu le produit plus praticable au quotidien :

- Navigation mobile et hamburger
- Separation plus nette des pages
- Heatmap de redemarrage
- Carte réseau refinee
- Remontee visible des versions

Ce ne sont pas de simples retouches cosmetiques. Cela change la vitesse de lecture d'un hôte par un opérateur.

## Lecture plateforme plus mature
Le code actuel montre une lecture d'infrastructure plus mature que ne le laissaient penser les premières pages overview :

- Distinction Dom0 versus DomU
- Inspection hyperviseur et domaines Xen
- Lecture Alpine LBU
- Lecture OpenRC sans dependre d'outils lourds externes
- Contrôles de sécurité relies a l'hôte réel

`UnyPort` ressemble ainsi davantage a un observateur natif de plateforme qu'a un shell d'administration web générique.

## Packaging opérationnel plus solide
Le dépôt a aussi évolue dans sa façon d'être livre :

- Mode developpement avec assets live
- Build production avec assets embarques
- Binaires strips
- Compression UPX
- HTTPS et HTTP/3 en option

Cette évolution packaging soutient directement la promesse single binary et low overhead.

## Maturite de l'identité et de l'instance
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

Le README annonce explicitement une future `V2` autour de workflows d'orchestration plus larges. La documentation actuelle doit donc présenter `UnyPort` comme un portail d'exploitation serieux, mais a périmètre volontairement borne.
