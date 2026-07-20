# Alpine Linux et Xen
`TRINITY` s'appuie sur deux fondations techniques qu'il faut reconnaitre publiquement même sans les administrer directement : **Alpine Linux** et **Xen**.

## Alpine Linux
Alpine Linux est la base système utilisée pour les environnements compacts et contrôles. Côté public, cela compte parce que le client rencontre souvent :

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

| Aspect Alpine Linux | Ce que le client voit | Interet pratique |
| --- | --- | --- |
| Systeme leger | Console sobre et rapide | Diagnostic plus direct |
| Outils simples | Commandes de base lisibles | Reprise plus claire |
| Organisation compacte | Peu d'abstraction visuelle | Lecture plus previsible |

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

| Couche | Role | Visible depuis TRINITY |
| --- | --- | --- |
| `TRINITY` | Surface client et cycle de vie | Oui |
| Alpine Linux | Systeme invite de certaines VM | Oui, via console et état système |
| Xen | Hyperviseur et isolation | Indirectement, via les modes VM |

## Pourquoi les deux comptent ensemble
Alpine Linux et Xen forment un modèle simple :

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

| Element | Fonction principale | Ce qu'il faut retenir |
| --- | --- | --- |
| Alpine Linux | Faire tourner le système invite | Lire une console simple et efficace |
| Xen | Porter et isoler la VM | Comprendre les états et modes techniques |
| TRINITY | Orchestrer l'accès client | Relier commande, service et support |

## Ce qu'il faut retenir
L'essentiel est simple : le client n'a pas besoin d'être spécialiste Xen. Il doit surtout comprendre assez bien le modèle pour lire un état VM, utiliser une console avec prudence et parler précisément au support.
