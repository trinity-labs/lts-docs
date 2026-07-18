# Data Disk Mode
Le Data Disk Mode, souvent abrege **DDM**, est l'une des notions techniques les plus importantes exposees publiquement par `TRINITY`.

## Ce que signifie le DDM
Le DDM est un mode VM orienté maintenance. L'objectif n'est pas de presenter l'environnement comme un service applicatif normal, mais comme un contexte contrôle pour vérifier les données, le stockage et l'état systeme.

Dans la pratique, le DDM est utile lorsqu'il faut :

- Inspecter un disque
- Vérifier des systèmes de fichiers
- Récupérer des données
- Confirmer qu'un environnement casse peut encore être monte
- Travailler sur un service qui ne doit pas redemarrer normalement tout de suite

## Comment reconnaitre le DDM
L'interface rend generalement le DDM visible avec un libelle dedie et une console orientée maintenance ou recuperation.

```text
Mode service normal :
  priorite au service
  comportement applicatif attendu

Data Disk Mode :
  priorite au stockage et au systeme
  comportement de reprise attendu
```

## Vérifications sures en DDM
Les premières actions en DDM doivent rester conservatrices.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Ces commandes aident a repondre a des questions simples :

- Quels disques sont visibles
- Quels points de montage sont actifs
- Quel espace reste disponible
- Si le système de fichiers attendu est present

## Workflow typique en DDM
```text
Entrer en DDM
  -> identifier les disques
  -> confirmer les montages
  -> inspecter le systeme de fichiers
  -> collecter les indices
  -> recuperer les donnees ou preparer l'escalade support
```

## Ce que le DDM n'est pas
Le DDM ne doit pas être lu comme :

- Un état applicatif normal
- Un remplacement de sauvegarde
- Une invitation a modifier le système sans contrôle

Le DDM est un mode technique contrôle dont la valeur principale est la clarte, la reprise et l'inspection.
