# Mode d'emploi
Cette page est le point d'entrée pratique pour les opérateurs qui utilisent `UnyPort` au quotidien. Elle se concentre sur le workflow visible, du premier login jusqu'aux actions supervisées.

## Parcours opérateur normal
Le chemin habituel est :

1. Ouvrir l'URL `UnyPort`
2. Se connecter avec un compte local ou OAuth
3. Confirmer le rôle d'hôte détecte
4. Lire le dashboard et l'historique des redemarrages
5. Passer aux pages hypervisor, network, storage ou security
6. Ouvrir une application interne proxyfiee si besoin
7. Modifier le profil ou les réglages admin seulement si le rôle l'autorise

```text
Ouvrir le portail
  -> S'authentifier
  -> Lire le rôle de l'hôte
  -> Vérifier CPU / mémoire / réseau
  -> Inspecter Xen ou LBU
  -> Lire logs ou sécurité
  -> Escalader via TRINITY ou UnyDesk si besoin
```

## Avant la première utilisation
Il faut préparer quelques informations :

- La bonne URL ou l'entrée reverse proxy
- Un utilisateur local ou un fournisseur OAuth configure
- Le type d'hôte attendu : Dom0, DomU, conteneur ou hôte Alpine
- Le fait qu'une application interne comme `ttyd` doive ou non être disponible

## Ce que le portail peut exposer
Selon la configuration et le rôle de l'hôte, `UnyPort` peut exposer :

- Des résumés de dashboard
- Des données live CPU, mémoire et réseau
- L'état des disques et de la persistance LBU
- Les services OpenRC et certains logs
- Des contrôles de sécurité et l'exposition des ports
- Des informations hyperviseur et domaines Xen sur Dom0
- Le profil opérateur, la clé SSH et les réglages de branding

## Quand le parcours devient plus technique
Le workflow devient plus opérationnel lorsqu'il faut :

- Comparer la version Alpine ou noyau en cours avec les tags `TRINITY` boot
- Inspecter un Dom0 et ses domaines actifs
- Vérifier si des changements LBU ont été commits
- Revoir des services plantes
- Ouvrir une application terminal via `/proxy/<name>/`

Les pages suivantes servent de mode d'emploi structure pour ces taches.
