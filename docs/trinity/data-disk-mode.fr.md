# Data Disk Mode
Le Data Disk Mode, souvent abrege **DDM**, est l'une des notions techniques les plus importantes exposees publiquement par `TRINITY`.

## Ce que signifie le DDM
Le DDM est un mode VM oriente maintenance. L'objectif n'est pas de presenter l'environnement comme un service applicatif normal, mais comme un contexte controle pour verifier les donnees, le stockage et l'etat systeme.

Dans la pratique, le DDM est utile lorsqu'il faut :

- inspecter un disque
- verifier des systemes de fichiers
- recuperer des donnees
- confirmer qu'un environnement casse peut encore etre monte
- travailler sur un service qui ne doit pas redemarrer normalement tout de suite

## Comment reconnaitre le DDM
L'interface rend generalement le DDM visible avec un libelle dedie et une console orientee maintenance ou recuperation.

```text
Mode service normal :
  priorite au service
  comportement applicatif attendu

Data Disk Mode :
  priorite au stockage et au systeme
  comportement de reprise attendu
```

## Verifications sures en DDM
Les premieres actions en DDM doivent rester conservatrices.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Ces commandes aident a repondre a des questions simples :

- quels disques sont visibles
- quels points de montage sont actifs
- quel espace reste disponible
- si le systeme de fichiers attendu est present

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
Le DDM ne doit pas etre lu comme :

- un etat applicatif normal
- un remplacement de sauvegarde
- une invitation a modifier le systeme sans controle

Le DDM est un mode technique controle dont la valeur principale est la clarte, la reprise et l'inspection.
