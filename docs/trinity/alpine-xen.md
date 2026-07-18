# Alpine Linux et Xen
`TRINITY` s'appuie sur deux fondations techniques qu'il faut reconnaitre publiquement même sans les administrer directement : **Alpine Linux** et **Xen**.

## Alpine Linux
Alpine Linux est la base système utilisee pour les environnements compacts et controles. Côté public, cela compte parce que le client rencontre souvent :

- Une console légère
- Une empreinte système réduite
- Une organisation simple et directe

```bash
cat /etc/os-release
uname -a
apk info | head
```

Lecture pratique côté client :

- Le système est volontairement sobre
- La maintenance et la reprise restent lisibles
- La plateforme privilégie des surfaces techniques previsibles

## Xen
Xen est la couche de virtualisation sous-jacente aux services orientés VM. Le client ne pilote pas Xen directement depuis `TRINITY`, mais Xen explique pourquoi la plateforme peut exposer :

- Des machines virtuelles isolees
- Des états VM lisibles
- Des modes maintenance et récupération

```text
Surface client -> TRINITY
Systeme invite -> Alpine Linux
Virtualisation -> Xen
```

## Pourquoi les deux comptent ensemble
Alpine Linux et Xen forment un modele simple :

- Alpine Linux fournit l'environnement système de la VM
- Xen fournit l'exécution et l'isolation
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
L'essentiel est simple : le client n'a pas besoin d'être spécialiste Xen. Il doit surtout comprendre assez bien le modele pour lire un état VM, utiliser une console avec prudence et parler précisément au support.
