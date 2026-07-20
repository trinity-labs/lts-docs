# VM et console
Certains services `TRINITY` exposent une surface orientée VM. Cela ne signifie pas que chaque client devient administrateur d'hyperviseur. Cela signifie que la plateforme peut présenter un état machine, une console ou un contexte de maintenance lorsque le service l'autorise.

## Ce que l'utilisateur peut attendre
Une page orientée VM peut exposer :

- Le nom de la machine
- Un indicateur en ligne ou non
- Une visibilité de base sur les ressources
- Un point d'entrée console
- Des liens vers le support ou la supervision

| Information visible | Utilite immediate | Lecture attendue |
| --- | --- | --- |
| Nom de VM | Identifier la bonne machine | Nom stable ou référence technique |
| Etat | Savoir si la VM répond | `online`, `maintenance`, `recovery`, `unavailable` |
| Adresse IP | Reconnaitre la cible réseau | IP privee ou technique selon le service |
| Console | Ouvrir un diagnostic direct | Acces reserve aux cas autorises |
| Ressources | Situer sommairement la VM | CPU, RAM, disque ou indicateurs proches |
| Liens support | Escalader proprement | Ticket, chat ou canal d'assistance |


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

- `online` Signifie que la VM répond dans son mode actuel
- `maintenance` Signifie qu'une intervention technique est en cours ou possible
- `recovery` Signifie que la priorité est l'accès aux données
- `unavailable` Signifie qu'il faut attendre ou solliciter le support

```text
online       -> accès normal ou technique attendu
maintenance  -> contexte d'intervention
recovery     -> contexte de preservation et de diagnostic
unavailable  -> attente ou support
```

| Etat VM | Ce que cela signifie | Bon reflexe |
| --- | --- | --- |
| `online` | La VM est disponible dans son mode actuel | Verifier le service ou la connectivite |
| `maintenance` | Une intervention ou preparation est en cours | Eviter les changements non demandes |
| `recovery` | La priorite est la reprise ou la preservation | Se concentrer sur la lecture et le stockage |
| `unavailable` | La VM ou la surface n'est pas utilisable | Attendre ou ouvrir un ticket avec contexte |

## Prudence opérationnelle
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

| Verification | Pourquoi la lancer | Risque si ignoree |
| --- | --- | --- |
| `mount` | Voir les montages actifs | Agir sur le mauvais volume |
| `findmnt` | Lire l'arborescence des points de montage | Confondre système et données |
| `cat /etc/os-release` | Identifier le système invite | Appliquer la mauvaise procedure |
