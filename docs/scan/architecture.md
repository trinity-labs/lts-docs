# Architecture

`Scan / Audit` sépare la saisie utilisateur, l'analyse et la restitution.
Cette séparation permet de lancer une analyse, de conserver les preuves utiles et de publier un rapport sans recalculer les résultats à chaque lecture.

## Surfaces
- ✅ interface publique pour lancer ou consulter un scan
- ✅ moteur d'analyse pour collecter et normaliser les signaux
- ✅ couche de restitution pour produire les vues synthétiques et techniques

## Principes
- ✅ le rapport publié est en lecture seule
- ✅ les preuves sont horodatées
- ⭕ les résultats sont regroupés par cible et par famille de risque
- ✅ les scores servent à prioriser, pas à remplacer l'analyse humaine

