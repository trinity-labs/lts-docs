# Data Disk Mode
Le Data Disk Mode, souvent abrégé **DDM**, est l'une des notions techniques les plus importantes exposées publiquement par `TRINITY`.

## Ce que signifie le DDM
Le DDM est un mode VM orienté maintenance. L'objectif n'est pas de présenter l'environnement comme un service applicatif normal, mais comme un contexte contrôle pour vérifier les données, le stockage et l'état système.

Dans la pratique, le DDM est utile lorsqu'il faut :

- Inspecter un disque
- Vérifier des systèmes de fichiers
- Récupérer des données
- Confirmer qu'un environnement casse peut encore être monté
- Travailler sur un service qui ne doit pas redémarrer normalement tout de suite

## Comment reconnaître le DDM
L'interface rend generalement le DDM visible avec un libellé dédié et une console orientée maintenance ou récupération.

```text
Mode service normal :
  priorité au service
  comportement applicatif attendu

Data Disk Mode :
  priorité au stockage et au système
  comportement de reprise attendu
```

| Critere | Mode normal | Data Disk Mode |
| --- | --- | --- |
| Priorite | Service applicatif | Donnees, stockage et reprise |
| Console | Exploitation ou vérification | Maintenance et récupération |
| Attente principale | Service disponible | Volumes lisibles et diagnostic fiable |
| Niveau de prudence | Standard | Renforce avant toute modification |

## Vérifications sures en DDM
Les premières actions en DDM doivent rester conservatrices.

```bash
hostname
lsblk
findmnt
df -h
cat /etc/fstab
```

Ces commandes aident à répondre à des questions simples :

- Quels disques sont visibles
- Quels points de montage sont actifs
- Quel espace reste disponible
- Si le système de fichiers attendu est présent

| Commande | Question traitee | Type de réponse attendue |
| --- | --- | --- |
| `lsblk` | Quels disques existent | Liste des volumes et tailles |
| `findmnt` | Quels montages sont actifs | Arborescence des points de montage |
| `df -h` | Quel espace est disponible | Capacite et saturation |
| `cat /etc/fstab` | Quels montages sont prevus | Configuration de référence |

## Workflow typique en DDM
```text
Entrer en DDM
  -> identifier les disques
  -> confirmer les montages
  -> inspecter le système de fichiers
  -> collecter les indices
  -> récupérer les données ou préparer l'escalade support
```

## Ce que le DDM n'est pas
Le DDM ne doit pas être lu comme :

- Un état applicatif normal
- Un remplacement de sauvegarde
- Une invitation à modifier le système sans contrôle

Le DDM est un mode technique contrôle dont la valeur principale est la clarté, la reprise et l'inspection.

| A ne pas confondre avec | Pourquoi | Lecture correcte |
| --- | --- | --- |
| Redemarrage normal | Le but n'est pas de remettre vite en production | Prioriser l'inspection et la récupération |
| Sauvegarde complet | Le DDM n'est pas une politique de backup | Utiliser les sauvegardes dédiées si elles existent |
| Espace de test libre | Le contexte reste sensible | Limiter les actions aux vérifications nécessaires |
