# Mode d'emploi
Cette page est le point d'entree pratique pour les operateurs qui utilisent `UnyPort` au quotidien. Elle se concentre sur le workflow visible, du premier login jusqu'aux actions supervisees.

## Parcours operateur normal
Le chemin habituel est :

1. Ouvrir l'URL `UnyPort`
2. Se connecter avec un compte local ou OAuth
3. Confirmer le role d'hote detecte
4. Lire le dashboard et l'historique des redemarrages
5. Passer aux pages hypervisor, network, storage ou security
6. Ouvrir une application interne proxyfiee si besoin
7. Modifier le profil ou les reglages admin seulement si le role l'autorise

```text
Ouvrir le portail
  -> S'authentifier
  -> Lire le role de l'hote
  -> Verifier CPU / memoire / reseau
  -> Inspecter Xen ou LBU
  -> Lire logs ou securite
  -> Escalader via TRINITY ou UnyDesk si besoin
```

## Avant la premiere utilisation
Il faut preparer quelques informations :

- La bonne URL ou l'entree reverse proxy
- Un utilisateur local ou un fournisseur OAuth configure
- Le type d'hote attendu : Dom0, DomU, conteneur ou hote Alpine
- Le fait qu'une application interne comme `ttyd` doive ou non etre disponible

## Ce que le portail peut exposer
Selon la configuration et le role de l'hote, `UnyPort` peut exposer :

- Des resumes de dashboard
- Des donnees live CPU, memoire et reseau
- L'etat des disques et de la persistance LBU
- Les services OpenRC et certains logs
- Des controles de securite et l'exposition des ports
- Des informations hyperviseur et domaines Xen sur Dom0
- Le profil operateur, la cle SSH et les reglages de branding

## Quand le parcours devient plus technique
Le workflow devient plus operationnel lorsqu'il faut :

- Comparer la version Alpine ou noyau en cours avec les tags `TRINITY` boot
- Inspecter un Dom0 et ses domaines actifs
- Verifier si des changements LBU ont ete commits
- Revoir des services plantes
- Ouvrir une application terminal via `/proxy/<name>/`

Les pages suivantes servent de mode d'emploi structure pour ces taches.
