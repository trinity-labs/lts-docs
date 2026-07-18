# Alpine Linux et Xen
`UnyPort` n'est pas neutre vis-a-vis de sa plateforme. Le code comme le README montrent clairement que le produit est faconne autour d'Alpine Linux et d'une infrastructure orientee Xen, surtout lorsque la clarte du role d'hote compte plus qu'une orchestration abstraite.

## Pourquoi Alpine Linux compte ici
Alpine Linux colle au modele `UnyPort` parce qu'il est :

- Petit
- Previsible
- Base sur musl
- A l'aise dans des empreintes operationnelles minimales
- Compatible avec les workflows de persistance LBU

Cela compte parce qu'`UnyPort` lit directement l'etat local du systeme et profite d'un hote compact et lisible.

## Pourquoi Xen compte ici
Xen compte parce qu'`UnyPort` distingue des roles d'infrastructure, pas seulement des graphes CPU.

Le backend detecte si l'hote ressemble a :

- `Dom0`
- `DomU`
- `Container`
- `Alpine`
- `Unknown`

Sur `Dom0`, `UnyPort` enrichit la telemetrie Linux avec des donnees toolstack Xen venant de :

- `xl info`
- `xl list`

Cela donne le nombre de domaines, le total de vCPU, la memoire, le scheduler et des lectures CPU par domaine.

## Dom0 contre DomU
Cette distinction change ce que voit l'operateur :

- Sur `Dom0`, `UnyPort` peut montrer l'etat de l'hyperviseur et des domaines Xen
- Sur `DomU`, `UnyPort` se comporte comme un observateur centre VM
- Dans un conteneur, les champs carte mere et firmware peuvent naturellement manquer

L'UI est explicitement construite autour de ces differences.

## LBU et persistance
`UnyPort` comprend aussi le modele Alpine `lbu` :

- Presence ou absence de LBU
- Existence de la derniere archive
- Etat `clean` ou `dirty`

Cela est particulierement utile dans des environnements Alpine de maintenance ou orientes Data Disk Mode, ou la derive de configuration doit etre simple a reperer.

## Lecture plateforme
En termes de documentation publique, `UnyPort` doit donc se lire comme :

1. Un portail operateur nativement aligne sur Alpine
2. Conscient de la topologie et des roles Xen
3. Utile sur Dom0, DomU et hotes de service legers
4. Aligne sur des operations minimales plutot que sur de lourdes couches d'abstraction
