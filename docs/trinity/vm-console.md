# VM et console
Certains services `TRINITY` exposent une surface orientée VM. Cela ne signifie pas que chaque client devient administrateur d'hyperviseur. Cela signifie que la plateforme peut présenter un état machine, une console ou un contexte de maintenance lorsque le service l'autorise.

## Ce que l'utilisateur peut attendre
Une page orientée VM peut exposer :

- Le nom de la machine
- Un indicateur en ligne ou non
- Une visibilité est basée sur les ressources
- Un point d'entrée console
- Des liens vers le support ou la supervision

| Information visible | Utilité immédiate | Lecture attendue |
| --- | --- | --- |
| Nom de VM | Identifier la bonne machine | Nom stable ou référence technique |
| État | Savoir si la VM répond | `online`, `maintenance`, `récupération`, `unavailable` |
| Adresse IP | Reconnaître la cible réseau | IP privée ou technique selon le service |
| Console | Ouvrir un diagnostic direct | Accès réservé aux cas autorisés |
| Ressources | Situer sommairement la VM | CPU, RAM, disque ou indicateurs proches |
| Liens support | Escalader proprement | Ticket, chat ou canal d'assistance |


## Objectifs typiques d'une console
L'accès console sert à :

- Vérifier l'état de boot
- Inspecter un système de fichiers monté
- Lire un hostname ou une IP
- Confirmer si une reprise est possible

```bash
hostname
uname -à
ip addr
lsblk
df -h
```

## Comment lire un état VM
Une page VM publique doit se lire simplement :

- `online` Signifie que la VM répond dans son mode actuel
- `maintenance` Signifie qu'une intervention technique est en cours ou possible
- `récupération` Signifie que la priorité est l'accès aux données
- `unavailable` Signifie qu'il faut attendre ou solliciter le support

```text
online       -> accès normal ou technique attendu
maintenance  -> contexte d'intervention
récupération     -> contexte de préservation et de diagnostic
unavailable  -> attente ou support
```

| État VM | Ce que cela signifie | Bon réflexe |
| --- | --- | --- |
| `online` | La VM est disponible dans son mode actuel | Vérifier le service ou la connectivité |
| `maintenance` | Une intervention ou préparation est en cours | Éviter les changements non demandes |
| `récupération` | La priorité est la reprise ou la préservation | Se concentrer sur la lecture et le stockage |
| `unavailable` | La VM ou la surface n'est pas utilisable | Attendre ou ouvrir un ticket avec contexte |

## Prudence opérationnelle
Une console est puissante mais étroite dans son usage. Avant de modifier quoi que ce soit, il faut savoir :

- Si la VM est en mode normal ou DDM
- Si l’objectif est le diagnostic ou la modification
- Si le support à demande une action précise

```bash
# Vérifications prudentes en premier
mount
findmnt
cat /etc/os-release
```

| Vérification | Pourquoi la lancer | Risque si ignorée |
| --- | --- | --- |
| `mount` | Voir les montages actifs | Agir sur le mauvais volume |
| `findmnt` | Lire l'arborescence des points de montage | Confondre système et données |
| `cat /etc/os-release` | Identifier le système invite | Appliquer la mauvaise procédure |
