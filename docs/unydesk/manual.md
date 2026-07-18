# Mode d'emploi UnyDesk
Cette page est le point d'entrée pratique pour utiliser `UnyDesk`. Le parcours normal n'est pas un bouton unique : c'est une séquence qui prépare un host, établit la confiance et démarre une session.

## Parcours normal
Le parcours public habituel est :

1. Ouvrir l'URL `UnyDesk`
2. Se connecter ou utiliser une invitation autonome
3. Télécharger ou lancer le runtime host
4. Revendiquer ou approuver le host
5. Créer une session vers le host cible
6. Attendre l'accusé de réception du host
7. Utiliser le viewer navigateur
8. Fermer la session quand l'accès n'est plus nécessaire

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

- L'URL `UnyDesk` attendue
- Le système cible et l'architecture CPU
- Le choix entre installation ou lancement ponctuel du host
- Le mode d'accès lié au compte ou autonome
- L'obligation éventuelle d'une approbation locale sur le host

## Ce qu'il faut surveiller pendant une session
Les signaux publics utiles incluent :

- L'état en ligne ou hors ligne du host
- L'état de session : pending, offered, active ou closed
- Le nombre de dispatch et le dernier accusé host
- La progression offer / answer WebRTC
- L'heure de mise à jour de l'écran de secours
- Les erreurs de capture visibles quand le host ne peut pas produire d'image

## Quand changer de surface
Utiliser `TRINITY` pour les sujets compte, service, facture ou support. Utiliser `UnyPort` pour la supervision host ou l'exploitation locale. Rester dans `UnyDesk` pour l'accès distant, le comportement viewer, la confiance host ou le routage de session.
