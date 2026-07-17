# Evolution
Cette page synthetise la maniere dont `UnyPort` a evolue fonctionnellement a travers l'historique visible du depot et le code actuel.

## Direction monitoring-first
Des le depart, `UnyPort` evolue comme un control plane oriente monitoring :

- etat systeme live avant l'orchestration
- lecture des roles d'hote avant l'abstraction
- un portail operateur unique avant plusieurs dashboards

Cette direction est explicite dans le README et reste visible dans les routes comme dans l'UI.

## Meilleure ergonomie operateur
Les travaux recents ont rendu le produit plus praticable au quotidien :

- navigation mobile et hamburger
- separation plus nette des pages
- heatmap de redemarrage
- carte reseau refinee
- remontee visible des versions

Ce ne sont pas de simples retouches cosmetiques. Cela change la vitesse de lecture d'un hote par un operateur.

## Lecture plateforme plus mature
Le code actuel montre une lecture d'infrastructure plus mature que ne le laissaient penser les premieres pages overview :

- distinction Dom0 versus DomU
- inspection hyperviseur et domaines Xen
- lecture Alpine LBU
- lecture OpenRC sans dependre d'outils lourds externes
- controles de securite relies a l'hote reel

`UnyPort` ressemble ainsi davantage a un observateur natif de plateforme qu'a un shell d'administration web generique.

## Packaging operationnel plus solide
Le depot a aussi evolue dans sa facon d'etre livre :

- mode developpement avec assets live
- build production avec assets embarques
- binaires strips
- compression UPX
- HTTPS et HTTP/3 en option

Cette evolution packaging soutient directement la promesse single binary et low overhead.

## Maturite de l'identite et de l'instance
La surface produit actuelle inclut maintenant :

- administration des utilisateurs locaux
- support des fournisseurs OAuth
- stockage du profil et de la cle SSH
- recuperation publique du branding
- personnalisation admin du branding

Cela transforme `UnyPort` d'un dashboard local en vraie surface operateur multi-utilisateurs.

## Limite actuelle et etape suivante
Au `2026-07-17`, le produit public doit encore etre compris comme une `V1` :

- fort sur le monitoring
- fort sur le contexte hote
- utile pour l'entree proxy controlee
- pas encore un orchestrateur complet du cycle de vie Xen

Le README annonce explicitement une future `V2` autour de workflows d'orchestration plus larges. La documentation actuelle doit donc presenter `UnyPort` comme un portail d'exploitation serieux, mais a perimetre volontairement borne.
