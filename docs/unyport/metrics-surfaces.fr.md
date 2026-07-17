# Metriques et surfaces
`UnyPort` est organisee autour d'un petit nombre de surfaces operationnelles alimentees par des donnees live. Le backend echantillonne le systeme toutes les `2` secondes et pousse des snapshots en SSE, tandis que le frontend les rend dans des pages pensees pour l'operateur.

## Modele de donnees live
Le pipeline live a quelques caracteristiques importantes :

- un seul endpoint SSE : `/sse/system`
- un anneau memoire de `60` snapshots
- environ `2` minutes de contexte roulant
- des echelles de graphes calculees cote serveur sur les `15` derniers snapshots

Cela garde un frontend leger et evite de dupliquer les calculs de telemetrie dans le navigateur.

## Dashboard
Le dashboard est la premiere surface de lecture :

- hostname et role de l'hote
- uptime
- resumes CPU et memoire
- raccourcis vers network, storage et security
- heatmap annuelle des redemarrages derivee de `startup-history.jsonl` ou de `unyport.log`

## Hypervisor
La page hypervisor combine identite systeme et contexte plateforme :

- lecture de version Alpine et noyau
- role d'hote et runtime
- donnees BIOS et carte mere lorsqu'elles existent
- comparaison de versions avec les tags `TRINITY` boot recuperes depuis GitHub
- informations hyperviseur Xen sur Dom0
- domaines Xen actifs sur Dom0

## Resources
La page resources est la surface d'inspection large :

- charge systeme
- temperatures
- top processus
- resume de l'inventaire packages
- resume des modules noyau
- liste OpenRC et etat des services
- navigation et tail des fichiers de log autorises

## Network et storage
La page `Network` montre :

- l'interface principale
- l'adresse IP
- les debits RX et TX
- les compteurs d'octets
- une carte reseau construite a partir des interfaces de l'hote

La page `Storage` montre :

- les disques montes
- l'espace utilise et libre
- le type de systeme de fichiers
- l'etat de persistance LBU sur les hotes Alpine

## Security
La page security est une vraie surface operationnelle dediee, pas juste un resume a badges. Elle agr ege :

- des controles de durcissement noyau
- les permissions du fichier utilisateurs
- l'etat des services OpenRC
- la presence de certains processus surveilles
- les ports TCP a l'ecoute

Cela fait d'`UnyPort` plus qu'un simple lecteur de ressources. C'est aussi un lecteur compact de posture de securite.
