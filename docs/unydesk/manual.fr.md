# Mode d'emploi UnyDesk
Cette page est le point d'entrée pratique pour utiliser `UnyDesk`. Le parcours normal n'est pas un bouton unique : c'est une séquence qui prépare un host, établit la confiance et démarre une session.

## Parcours normal
Le parcours public habituel est :

1. ouvrir l'URL `UnyDesk`
2. se connecter ou utiliser une invitation autonome
3. télécharger ou lancer le runtime host
4. revendiquer ou approuver le host
5. créer une session vers le host cible
6. attendre l'accusé de réception du host
7. utiliser le viewer navigateur
8. fermer la session quand l'accès n'est plus nécessaire

```text
Ouvrir UnyDesk
  -> identifier le viewer
  -> préparer le host
  -> établir la confiance
  -> créer la session
  -> le broker route vers le host
  -> le viewer se connecte
  -> fermer la session
```

## Avant la première utilisation
Préparer :

- l'URL `UnyDesk` attendue
- le système cible et l'architecture CPU
- le choix entre installation ou lancement ponctuel du host
- le mode d'accès lié au compte ou autonome
- l'obligation éventuelle d'une approbation locale sur le host

## Ce qu'il faut surveiller pendant une session
Les signaux publics utiles incluent :

- l'état en ligne ou hors ligne du host
- l'état de session : pending, offered, active ou closed
- le nombre de dispatch et le dernier accusé host
- la progression offer / answer WebRTC
- l'heure de mise à jour de l'écran de secours
- les erreurs de capture visibles quand le host ne peut pas produire d'image

## Quand changer de surface
Utiliser `TRINITY` pour les sujets compte, service, facture ou support. Utiliser `UnyPort` pour la supervision host ou l'exploitation locale. Rester dans `UnyDesk` pour l'accès distant, le comportement viewer, la confiance host ou le routage de session.
