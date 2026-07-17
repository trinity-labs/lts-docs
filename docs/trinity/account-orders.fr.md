# Compte et commandes
`TRINITY` n'est pas seulement une vitrine. C'est aussi l'endroit ou le compte client et le cycle de vie de la commande restent visibles.

## Role du compte
Le compte client sert a :

- s'authentifier
- stocker les informations de facturation
- consulter les commandes actives et passees
- relancer certaines actions de paiement
- telecharger les factures
- retrouver la bonne surface de service apres achat

```json
{
  "compte": {
    "email": "client@example.com",
    "profil_facturation": "entreprise",
    "commandes_visibles": true,
    "telechargement_facture": true
  }
}
```

## Etapes typiques d'une commande
Une commande peut passer par plusieurs etats :

- brouillon
- soumise
- paiement en attente
- payee
- en preparation
- disponible ou livree
- annulee ou expiree

```text
brouillon -> soumise -> paiement_en_attente -> payee -> preparation -> disponible
                                 \-> refusee -> reprise
```

## Ce que le client doit lire dans une commande
La page commande doit rester lisible sans details internes. Le client a surtout besoin de :

- la reference
- l'etat courant
- le service choisi
- le profil de facturation
- l'etat du paiement
- le lien facture si disponible

```yaml
resume_commande:
  reference: "TRI-2026-00421"
  service: "session de support"
  statut: "payee"
  statut_paiement: "confirme"
  facture_pdf: true
```

## Bonne habitude avant d'ouvrir un ticket
Gardez une trace tres simple de :

- la reference de commande
- la date d'achat
- le moyen de paiement
- le resultat attendu
- l'etape exacte ou le flux s'est arrete

```markdown
Reference commande : TRI-2026-00421
Resultat attendu : acces VM et visibilite console
Probleme actuel : paiement accepte, service pas encore visible
```

## Pages associees
- `Paiements et factures`
- `Support et exploitation`
- `Parcours client`
