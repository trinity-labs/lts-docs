# VM et console
Certains services `TRINITY` exposent une surface orientee VM. Cela ne signifie pas que chaque client devient administrateur d'hyperviseur. Cela signifie que la plateforme peut presenter un etat machine, une console ou un contexte de maintenance lorsque le service l'autorise.

## Ce que l'utilisateur peut attendre
Une page orientee VM peut exposer :

- le nom de la machine
- un indicateur en ligne ou non
- une visibilite de base sur les ressources
- un point d'entree console
- des liens vers le support ou la supervision

![Vue VM et console](../assets/images/screens/trinity-console.png)

*Capture versionnee du depot montrant un ecran VM `TRINITY` en Data Disk Mode.*

## Objectifs typiques d'une console
L'acces console sert a :

- verifier l'etat de boot
- inspecter un systeme de fichiers monte
- lire un hostname ou une IP
- confirmer si une reprise est possible

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Comment lire un etat VM
Une page VM publique doit se lire simplement :

- `online` signifie que la VM repond dans son mode actuel
- `maintenance` signifie qu'une intervention technique est en cours ou possible
- `recovery` signifie que la priorite est l'acces aux donnees
- `unavailable` signifie qu'il faut attendre ou solliciter le support

```text
online       -> acces normal ou technique attendu
maintenance  -> contexte d'intervention
recovery     -> contexte de preservation et de diagnostic
unavailable  -> attente ou support
```

## Prudence operationnelle
Une console est puissante mais etroite dans son usage. Avant de modifier quoi que ce soit, il faut savoir :

- si la VM est en mode normal ou DDM
- si l'objectif est le diagnostic ou la modification
- si le support a demande une action precise

```bash
# Verifications prudentes en premier
mount
findmnt
cat /etc/os-release
```
