# Compte et commandes
`TRINITY` n'est pas seulement une vitrine. C'est aussi l'endroit ou le compte client et le cycle de vie de la commande restent visibles.

## Role du compte
Le compte client sert a :

- S'authentifier
- Stocker les informations de facturation
- Consulter les commandes actives et passees
- Relancer certaines actions de paiement
- Telecharger les factures
- Retrouver la bonne surface de service apres achat

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

- Brouillon
- Soumise
- Paiement en attente
- Payee
- En preparation
- Disponible ou livree
- Annulee ou expiree

```text
brouillon -> soumise -> paiement_en_attente -> payee -> preparation -> disponible
                                 \-> refusee -> reprise
```

## Ce que le client doit lire dans une commande
La page commande doit rester lisible sans details internes. Le client a surtout besoin de :

- La reference
- L'etat courant
- Le service choisi
- Le profil de facturation
- L'etat du paiement
- Le lien facture si disponible

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

- La reference de commande
- La date d'achat
- Le moyen de paiement
- Le resultat attendu
- L'etape exacte ou le flux s'est arrete

```markdown
Reference commande : TRI-2026-00421
Resultat attendu : acces VM et visibilite console
Probleme actuel : paiement accepte, service pas encore visible
```

## Pages associees
- `Paiements et factures`
- `Support et exploitation`
- `Parcours client`
