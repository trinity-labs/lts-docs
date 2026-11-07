# Historique
`UnyDesk` a été séparé comme architecture propre parce que l'accès distant à des contraintes différentes de l'exploitation locale et de la gestion du cycle client.

## Direction initiale
La première direction était de garder le produit petit et explicite :

- Backend Go autonome
- API broker publique unique
- Contraintes runtime compatibles Alpine
- Surface session orientée navigateur
- Runtime host distribué séparément
- Intégration future par API HTTP plutôt que couplage de code

## Pourquoi ne pas le fusionner avec UnyPort
`UnyPort` est un portail d'exploitation et de supervision. `UnyDesk` porte un profil de risque différent :

- Transport temps réel
- Accès host
- Contrôle viewer
- Tokens de session
- Fallback média
- Confiance et pairing

Garder l'architecture séparée rend les limites sécurité et produit plus faciles à raisonner.

## Maturité publique actuelle
La surface publique documente maintenant `UnyDesk` comme un produit, pas seulement comme un scaffold. Les zones visibles importantes sont la distribution host, le bootstrap, la confiance, le routage session, la signalisation transport et le comportement de secours.

## Relation avec la plateforme
`UnyDesk` reste dans la même famille de plateforme que `TRINITY` et `UnyPort`. La relation se fait par frontière produit et contrat API, pas par labels de menu partagés ni noms de dossiers de développement.
