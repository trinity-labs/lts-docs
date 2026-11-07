# Métriques et surfaces
`UnyPort` est organisée autour d'un petit nombre de surfaces opérationnelles alimentées par des données live. Le backend échantillonne le système toutes les `2` secondes et pousse des snapshots en SSE, tandis que le frontend les rend dans des pages pensées pour l'opérateur.

## Modèle de données live
Le pipeline live à quelques caractéristiques importantes :

- Un seul endpoint SSE : `/sse/system`
- Un anneau mémoire de `60` snapshots
- Environ `2` minutes de contexte roulant
- Des échelles de graphes calculées côté serveur sur les `15` derniers snapshots

Cela garde un frontend léger et évite de dupliquer les calculs de télémétrie dans le navigateur.

## Dashboard
Le dashboard est la première surface de lecture :

- Hostname et rôle de l'hôte
- Uptime
- Résumes CPU et mémoire
- Raccourcis vers network, storage et security
- Heatmap annuelle des redémarrages dérivée de `startup-history.jsonl` ou de `unyport.log`

## Hypervisor
La page hypervisor combine identité système et contexte plateforme :

- Lecture de version Alpine et noyau
- Rôle d'hôte et runtime
- Données BIOS et carte mère lorsqu'elles existent
- Comparaison de versions avec les tags `TRINITY` boot récupérés depuis GitHub
- Informations hyperviseur Xen sur Dom0
- Domaines Xen actifs sur Dom0

## Resources
La page resources est la surface d'inspection large :

- Charge système
- Températures
- Top processus
- Résumé de l'inventaire packages
- Résumé des modules noyau
- Liste OpenRC et état des services
- Navigation et tail des fichiers de log autorisés

## Network et storage
La page `Network` montre :

- L'interface principale
- L'adresse IP
- Les débits RX et TX
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
- La présence de certains processus surveilles
- Les ports TCP à l'écoute

Cela fait d'`UnyPort` plus qu'un simple lecteur de ressources. C'est aussi un lecteur compact de posture de sécurité.
