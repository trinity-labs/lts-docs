# Distribution des hosts
Le runtime host est la partie machine d'`UnyDesk`. Il identifie la machine, s’enregistre ou se reconnecte au broker et participe aux sessions distantes.

## Cibles de téléchargement
La surface de distribution publique peut fournir des packages host pour :

- Linux amd64
- Linux arm64
- Windows amd64
- Windows arm64
- MacOS amd64
- MacOS arm64
- Les checksums de release

Le fichier choisi par l'utilisateur doit correspondre au système d'exploitation et à l'architecture CPU de la machine qui deviendra le host.

## Rôle du package
Le package host sert à :

- Générer ou conserver une identité stable d'installation
- Envoyer les métadonnées host comme hostname, OS, architecture et version
- S'authentifier avec une credential de provisioning lorsque nécessaire
- Maintenir l'état heartbeat visible par le broker
- Recevoir les messages de dispatch session
- Participer à la signalisation et à la livraison de secours

## Vérification
Lorsque des checksums sont publiés, l'utilisateur doit comparer le package téléchargé à la liste de checksums avant de l'exécuter. C'est particulièrement important quand le package est déplacé manuellement entre machines.

## Comportement Windows en double-clic
Le host Windows peut être préparé pour démarrer sans argument en ligne de commande. L'URL serveur peut venir :

- D'un argument explicite au lancement
- D'une variable d'environnement
- D'un fichier de configuration placé à côté de l'exécutable
- D'une valeur par défaut embarquée

Cela facilité l'assistance tout en gardant le choix du serveur explicite.
