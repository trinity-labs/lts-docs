# VM et console
Certains services `TRINITY` exposent une surface orientee VM. Cela ne signifie pas que chaque client devient administrateur d'hyperviseur. Cela signifie que la plateforme peut presenter un etat machine, une console ou un contexte de maintenance lorsque le service l'autorise.

## Ce que l'utilisateur peut attendre
Une page orientee VM peut exposer :

- Le nom de la machine
- Un indicateur en ligne ou non
- Une visibilite de base sur les ressources
- Un point d'entree console
- Des liens vers le support ou la supervision

![Vue VM et console](../assets/images/screens/trinity-console.png)

*Capture versionnee du depot montrant un ecran VM `TRINITY` en Data Disk Mode.*

## Objectifs typiques d'une console
L'acces console sert a :

- Verifier l'etat de boot
- Inspecter un systeme de fichiers monte
- Lire un hostname ou une IP
- Confirmer si une reprise est possible

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Comment lire un etat VM
Une page VM publique doit se lire simplement :

- `online` Signifie que la VM repond dans son mode actuel
- `maintenance` Signifie qu'une intervention technique est en cours ou possible
- `recovery` Signifie que la priorite est l'acces aux donnees
- `unavailable` Signifie qu'il faut attendre ou solliciter le support

```text
online       -> acces normal ou technique attendu
maintenance  -> contexte d'intervention
recovery     -> contexte de preservation et de diagnostic
unavailable  -> attente ou support
```

## Prudence operationnelle
Une console est puissante mais etroite dans son usage. Avant de modifier quoi que ce soit, il faut savoir :

- Si la VM est en mode normal ou DDM
- Si l'objectif est le diagnostic ou la modification
- Si le support a demande une action precise

```bash
# Verifications prudentes en premier
mount
findmnt
cat /etc/os-release
```
