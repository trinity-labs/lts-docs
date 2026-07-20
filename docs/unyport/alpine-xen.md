# Alpine Linux et Xen
`UnyPort` n'est pas neutre vis-à-vis de sa plateforme. Le code comme le README montrent clairement que le produit est façonné autour d'Alpine Linux et d'une infrastructure orientée Xen, surtout lorsque la clarté du rôle d'hôte compte plus qu'une orchestration abstraite.

## Pourquoi Alpine Linux compte ici
Alpine Linux colle au modèle `UnyPort` parce qu'il est :

- Petit
- Prévisible
- Base sur musl
- A l'aise dans des empreintes opérationnelles minimales
- Compatible avec les workflows de persistance LBU

Cela compte parce qu'`UnyPort` lit directement l'état local du système et profite d'un hôte compact et lisible.

## Pourquoi Xen compte ici
Xen compte parce qu'`UnyPort` distingue des rôles d'infrastructure, pas seulement des graphes CPU.

Le backend détecte si l'hôte ressemble à :

- `Dom0`
- `DomU`
- `Container`
- `Alpine`
- `Unknown`

Sur `Dom0`, `UnyPort` enrichit la télémétrie Linux avec des données toolstack Xen venant de :

- `xl info`
- `xl list`

Cela donne le nombre de domaines, le total de vCPU, la mémoire, le scheduler et des lectures CPU par domaine.

## Dom0 contre DomU
Cette distinction change ce que voit l'opérateur :

- Sur `Dom0`, `UnyPort` peut montrer l'état de l'hyperviseur et des domaines Xen
- Sur `DomU`, `UnyPort` se comporte comme un observateur centré VM
- Dans un conteneur, les champs carte mère et firmware peuvent naturellement manquer

L'UI est explicitement construite autour de ces différences.

## LBU et persistance
`UnyPort` comprend aussi le modèle Alpine `lbu` :

- Présence ou absence de LBU
- Existence de la dernière archive
- État `clean` ou `dirty`

Cela est particulièrement utile dans des environnements Alpine de maintenance ou orientés Data Disk Mode, où la dérive de configuration doit être simple à repérer.

## Lecture plateforme
En termes de documentation publique, `UnyPort` doit donc se lire comme :

1. Un portail opérateur nativement aligne sur Alpine
2. Conscient de la topologie et des rôles Xen
3. Utile sur Dom0, DomU et hôtes de service légers
4. Aligne sur des opérations minimales plutôt que sur de lourdes couches d'abstraction
