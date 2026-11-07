# Architecture

`IP` est conçu comme un service léger.
La page principale interroge des probes dédiés pour distinguer proprement IPv4 et IPv6 sans dépendre du choix automatique du navigateur.

## Flux
```text
navigateur
  -> page principale
  -> probe IPv4
  -> probe IPv6
  -> rendu HTML ou JSON
```

## Principes
- pas de compte utilisateur
- pas de session applicative
- réponse JSON disponible pour automatisation
- séparation explicite entre adresse observée et headers déclaratifs

Les headers transmis par le client ou par des proxys peuvent être affichés comme contexte, mais l'adresse de référence reste celle observée par l'infrastructure.

