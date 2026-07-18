# Alpine Linux et Xen
`TRINITY` s'appuie sur deux fondations techniques qu'il faut reconnaitre publiquement meme sans les administrer directement : **Alpine Linux** et **Xen**.

## Alpine Linux
Alpine Linux est la base systeme utilisee pour les environnements compacts et controles. Cote public, cela compte parce que le client rencontre souvent :

- Une console legere
- Une empreinte systeme reduite
- Une organisation simple et directe

```bash
cat /etc/os-release
uname -a
apk info | head
```

Lecture pratique cote client :

- Le systeme est volontairement sobre
- La maintenance et la reprise restent lisibles
- La plateforme privilegie des surfaces techniques previsibles

## Xen
Xen est la couche de virtualisation sous-jacente aux services orientes VM. Le client ne pilote pas Xen directement depuis `TRINITY`, mais Xen explique pourquoi la plateforme peut exposer :

- Des machines virtuelles isolees
- Des etats VM lisibles
- Des modes maintenance et recuperation

```text
Surface client -> TRINITY
Systeme invite -> Alpine Linux
Virtualisation -> Xen
```

## Pourquoi les deux comptent ensemble
Alpine Linux et Xen forment un modele simple :

- Alpine Linux fournit l'environnement systeme de la VM
- Xen fournit l'execution et l'isolation
- `TRINITY` Fournit la surface client, le cycle de vie et le support

```yaml
modele_plateforme:
  surface_client: "TRINITY"
  systeme_invite: "Alpine Linux"
  hyperviseur: "Xen"
  modes_operationnels:
    - normal
    - maintenance
    - data_disk_mode
```

## Ce qu'il faut retenir
L'essentiel est simple : le client n'a pas besoin d'etre specialiste Xen. Il doit surtout comprendre assez bien le modele pour lire un etat VM, utiliser une console avec prudence et parler precisement au support.
