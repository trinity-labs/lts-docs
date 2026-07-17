# Mode d'emploi
Cette page est le point d'entree pratique pour les operateurs qui utilisent `UnyPort` au quotidien. Elle se concentre sur le workflow visible, du premier login jusqu'aux actions supervisees.

## Parcours operateur normal
Le chemin habituel est :

1. ouvrir l'URL `UnyPort`
2. se connecter avec un compte local ou OAuth
3. confirmer le role d'hote detecte
4. lire le dashboard et l'historique des redemarrages
5. passer aux pages hypervisor, network, storage ou security
6. ouvrir une application interne proxyfiee si besoin
7. modifier le profil ou les reglages admin seulement si le role l'autorise

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

- la bonne URL ou l'entree reverse proxy
- un utilisateur local ou un fournisseur OAuth configure
- le type d'hote attendu : Dom0, DomU, conteneur ou hote Alpine
- le fait qu'une application interne comme `ttyd` doive ou non etre disponible

## Ce que le portail peut exposer
Selon la configuration et le role de l'hote, `UnyPort` peut exposer :

- des resumes de dashboard
- des donnees live CPU, memoire et reseau
- l'etat des disques et de la persistance LBU
- les services OpenRC et certains logs
- des controles de securite et l'exposition des ports
- des informations hyperviseur et domaines Xen sur Dom0
- le profil operateur, la cle SSH et les reglages de branding

## Quand le parcours devient plus technique
Le workflow devient plus operationnel lorsqu'il faut :

- comparer la version Alpine ou noyau en cours avec les tags `TRINITY` boot
- inspecter un Dom0 et ses domaines actifs
- verifier si des changements LBU ont ete commits
- revoir des services plantes
- ouvrir une application terminal via `/proxy/<name>/`

Les pages suivantes servent de mode d'emploi structure pour ces taches.
