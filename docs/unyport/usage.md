# Utilisation d'UnyPort
`UnyPort` est utilisée lorsque l'opérateur à besoin d'une lecture rapide de l'hôte, d'une surface d'authentification stable et d'un petit nombre de points d'entrée opérationnels. Elle n'est pas optimisée pour le commerce ni pour le parcours client. Elle est optimisée pour la lecture supervisée de l'infrastructure.

## Usage 1 - se connecter et confirmer le contexte hôte
Les opérateurs commencent souvent par :

- Se connecter localement ou via OAuth
- Lire le rôle d'hôte détecte
- Confirmer si la surface correspond à un Dom0, un DomU, un conteneur ou un hôte Alpine

Cette première étape change toute la suite de la lecture, car un Dom0 exposé un contexte Xen global alors qu'un DomU se comporte comme un observateur centre VM.

## Usage 2 - lire l'état système en direct
L'usage le plus courant reste la supervision en temps réel :

- Activite CPU et par coeur
- Utilisation mémoire et cache
- Debit réseau
- Occupation du stockage
- Temperatures, processus et charge

Le portail est donc utile comme tableau de bord opérationnel live avant même qu'une action plus profonde soit nécessaire.

## Usage 3 - inspecter les specificites Alpine et Xen
`UnyPort` sert aussi à répondre à des questions très Alpine et Xen :

- LBU est-il présent et committe
- Quelle version Alpine tourne
- Quel noyau tourne
- Quelle version Xen et quel scheduler sont actifs sur Dom0
- Combien de domaines tournent et quelle mémoire ils consomment

## Usage 4 - inspecter services, logs et sécurité
Les surfaces resources et security servent au dépannage courant :

- Revoir les services OpenRC
- Tailer les fichiers de log autorises
- Inspecter les ports à l'écoute
- Confirmer le niveau de durcissement
- Identifier des processus critiques ou des services plantes

## Usage 5 - ouvrir un outil interne à travers le portail
Lorsqu'il est configure, `UnyPort` peut aussi servir de point d'entrée vers un outil interne proxyfie comme `ttyd`. L'opérateur reste ainsi dans une seule surface authentifiee tout en accedant à des workflows plus orientés terminal.

## Usage 6 - savoir quand changer de surface
`UnyPort` n'est pas le seul outil de l'ecosysteme.

- Utiliser `TRINITY` lorsque le besoin concerne le cycle de vie service, le compte, la facturation ou les opérations client.
- Utiliser `UnyDesk` lorsque le besoin concerne l'accès distant ou l'assistance directe.
- Rester dans `UnyPort` lorsque le besoin concerne l'état hôte, le contexte d'infrastructure ou un accès proxy contrôle.
