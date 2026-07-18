# Metriques et surfaces
`UnyPort` est organisee autour d'un petit nombre de surfaces operationnelles alimentees par des donnees live. Le backend echantillonne le systeme toutes les `2` secondes et pousse des snapshots en SSE, tandis que le frontend les rend dans des pages pensees pour l'operateur.

## Modele de donnees live
Le pipeline live a quelques caracteristiques importantes :

- Un seul endpoint SSE : `/sse/system`
- Un anneau memoire de `60` snapshots
- Environ `2` minutes de contexte roulant
- Des echelles de graphes calculees cote serveur sur les `15` derniers snapshots

Cela garde un frontend leger et evite de dupliquer les calculs de telemetrie dans le navigateur.

## Dashboard
Le dashboard est la premiere surface de lecture :

- Hostname et role de l'hote
- Uptime
- Resumes CPU et memoire
- Raccourcis vers network, storage et security
- Heatmap annuelle des redemarrages derivee de `startup-history.jsonl` ou de `unyport.log`

## Hypervisor
La page hypervisor combine identite systeme et contexte plateforme :

- Lecture de version Alpine et noyau
- Role d'hote et runtime
- Donnees BIOS et carte mere lorsqu'elles existent
- Comparaison de versions avec les tags `TRINITY` boot recuperes depuis GitHub
- Informations hyperviseur Xen sur Dom0
- Domaines Xen actifs sur Dom0

## Resources
La page resources est la surface d'inspection large :

- Charge systeme
- Temperatures
- Top processus
- Resume de l'inventaire packages
- Resume des modules noyau
- Liste OpenRC et etat des services
- Navigation et tail des fichiers de log autorises

## Network et storage
La page `Network` montre :

- L'interface principale
- L'adresse IP
- Les debits RX et TX
- Les compteurs d'octets
- Une carte reseau construite a partir des interfaces de l'hote

La page `Storage` montre :

- Les disques montes
- L'espace utilise et libre
- Le type de systeme de fichiers
- L'etat de persistance LBU sur les hotes Alpine

## Security
La page security est une vraie surface operationnelle dediee, pas juste un resume a badges. Elle agr ege :

- Des controles de durcissement noyau
- Les permissions du fichier utilisateurs
- L'etat des services OpenRC
- La presence de certains processus surveilles
- Les ports TCP a l'ecoute

Cela fait d'`UnyPort` plus qu'un simple lecteur de ressources. C'est aussi un lecteur compact de posture de securite.
