# Utilisation d'UnyPort
`UnyPort` est utilisee lorsque l'operateur a besoin d'une lecture rapide de l'hote, d'une surface d'authentification stable et d'un petit nombre de points d'entree operationnels. Elle n'est pas optimisee pour le commerce ni pour le parcours client. Elle est optimisee pour la lecture supervisee de l'infrastructure.

## Usage 1 - se connecter et confirmer le contexte hote
Les operateurs commencent souvent par :

- Se connecter localement ou via OAuth
- Lire le role d'hote detecte
- Confirmer si la surface correspond a un Dom0, un DomU, un conteneur ou un hote Alpine

Cette premiere etape change toute la suite de la lecture, car un Dom0 expose un contexte Xen global alors qu'un DomU se comporte comme un observateur centre VM.

## Usage 2 - lire l'etat systeme en direct
L'usage le plus courant reste la supervision en temps reel :

- Activite CPU et par coeur
- Utilisation memoire et cache
- Debit reseau
- Occupation du stockage
- Temperatures, processus et charge

Le portail est donc utile comme tableau de bord operationnel live avant meme qu'une action plus profonde soit necessaire.

## Usage 3 - inspecter les specificites Alpine et Xen
`UnyPort` sert aussi a repondre a des questions tres Alpine et Xen :

- LBU est-il present et committe
- Quelle version Alpine tourne
- Quel noyau tourne
- Quelle version Xen et quel scheduler sont actifs sur Dom0
- Combien de domaines tournent et quelle memoire ils consomment

## Usage 4 - inspecter services, logs et securite
Les surfaces resources et security servent au depannage courant :

- Revoir les services OpenRC
- Tailer les fichiers de log autorises
- Inspecter les ports a l'ecoute
- Confirmer le niveau de durcissement
- Identifier des processus critiques ou des services plantes

## Usage 5 - ouvrir un outil interne a travers le portail
Lorsqu'il est configure, `UnyPort` peut aussi servir de point d'entree vers un outil interne proxyfie comme `ttyd`. L'operateur reste ainsi dans une seule surface authentifiee tout en accedant a des workflows plus orientes terminal.

## Usage 6 - savoir quand changer de surface
`UnyPort` n'est pas le seul outil de l'ecosysteme.

- Utiliser `TRINITY` lorsque le besoin concerne le cycle de vie service, le compte, la facturation ou les operations client.
- Utiliser `UnyDesk` lorsque le besoin concerne l'acces distant ou l'assistance directe.
- Rester dans `UnyPort` lorsque le besoin concerne l'etat hote, le contexte d'infrastructure ou un acces proxy controle.
