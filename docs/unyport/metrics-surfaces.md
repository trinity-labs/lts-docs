# Métriques et surfaces
`UnyPort` est organisee autour d'un petit nombre de surfaces opérationnelles alimentees par des données live. Le backend echantillonne le système toutes les `2` secondes et pousse des snapshots en SSE, tandis que le frontend les rend dans des pages pensees pour l'opérateur.

## Modele de données live
Le pipeline live à quelques caracteristiques importantes :

- Un seul endpoint SSE : `/sse/system`
- Un anneau mémoire de `60` snapshots
- Environ `2` minutes de contexte roulant
- Des echelles de graphes calculees côté serveur sur les `15` derniers snapshots

Cela garde un frontend léger et évite de dupliquer les calculs de télémétrie dans le navigateur.

## Dashboard
Le dashboard est la première surface de lecture :

- Hostname et rôle de l'hôte
- Uptime
- Resumes CPU et mémoire
- Raccourcis vers network, storage et security
- Heatmap annuelle des redemarrages derivee de `startup-history.jsonl` ou de `unyport.log`

## Hypervisor
La page hypervisor combine identité système et contexte plateforme :

- Lecture de version Alpine et noyau
- Rôle d'hôte et runtime
- Données BIOS et carte mere lorsqu'elles existent
- Comparaison de versions avec les tags `TRINITY` boot récupérés depuis GitHub
- Informations hyperviseur Xen sur Dom0
- Domaines Xen actifs sur Dom0

## Resources
La page resources est la surface d'inspection large :

- Charge système
- Temperatures
- Top processus
- Resume de l'inventaire packages
- Resume des modules noyau
- Liste OpenRC et état des services
- Navigation et tail des fichiers de log autorises

## Network et storage
La page `Network` montre :

- L'interface principale
- L'adresse IP
- Les debits RX et TX
- Les compteurs d'octets
- Une carte réseau construite à partir des interfaces de l'hôte

La page `Storage` montre :

- Les disques montés
- L'espace utilise et libre
- Le type de système de fichiers
- L'état de persistance LBU sur les hôtes Alpine

## Security
La page security est une vraie surface opérationnelle dédiée, pas juste un résumé à badges. Elle agrège :

- Des contrôles de durcissement noyau
- Les permissions du fichier utilisateurs
- L'état des services OpenRC
- La presence de certains processus surveilles
- Les ports TCP à l'écoute

Cela fait d'`UnyPort` plus qu'un simple lecteur de ressources. C'est aussi un lecteur compact de posture de sécurité.
