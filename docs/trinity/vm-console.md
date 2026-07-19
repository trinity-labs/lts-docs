# VM et console
Certains services `TRINITY` exposent une surface orientée VM. Cela ne signifie pas que chaque client devient administrateur d'hyperviseur. Cela signifie que la plateforme peut presenter un état machine, une console ou un contexte de maintenance lorsque le service l'autorise.

## Ce que l'utilisateur peut attendre
Une page orientée VM peut exposer :

- Le nom de la machine
- Un indicateur en ligne ou non
- Une visibilité de base sur les ressources
- Un point d'entrée console
- Des liens vers le support ou la supervision


## Objectifs typiques d'une console
L'accès console sert a :

- Vérifier l'état de boot
- Inspecter un système de fichiers monte
- Lire un hostname ou une IP
- Confirmer si une reprise est possible

```bash
hostname
uname -a
ip addr
lsblk
df -h
```

## Comment lire un état VM
Une page VM publique doit se lire simplement :

- `online` Signifie que la VM repond dans son mode actuel
- `maintenance` Signifie qu'une intervention technique est en cours ou possible
- `recovery` Signifie que la priorité est l'accès aux données
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
- Si le support a demande une action précise

```bash
# Verifications prudentes en premier
mount
findmnt
cat /etc/os-release
```
