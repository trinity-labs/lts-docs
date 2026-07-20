# Compte et commandes
`TRINITY` n'est pas seulement une vitrine. C'est aussi l'endroit ou le compte client et le cycle de vie de la commande restent visibles.

## Rôle du compte
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
Une commande peut passer par plusieurs états :

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

| Statut | Signification cote client | Action recommandee |
| --- | --- | --- |
| Brouillon | La commande n'est pas finalisee | Verifier les informations puis soumettre |
| Soumise | La demande existe mais n'est pas encore reglee | Attendre le paiement ou completer le flux |
| Paiement en attente | Le retour de paiement n'est pas confirme | Verifier le moyen de paiement et patienter |
| Payee | Le reglement est valide | Suivre la preparation ou la livraison |
| En preparation | Le service est en cours de traitement | Attendre la disponibilité ou vérifier les accès |
| Disponible | Le service ou document est accessible | Utiliser la surface exposee |
| Annulee ou expiree | Le flux est clos sans livraison | Recommencer ou contacter le support |

## Ce que le client doit lire dans une commande
La page commande doit rester lisible sans détails internes. Le client a surtout besoin de :

- La référence
- L'état courant
- Le service choisi
- Le profil de facturation
- L'état du paiement
- Le lien facture si disponible

```yaml
resume_commande:
  référence: "TRI-2026-00421"
  service: "session de support"
  statut: "payee"
  statut_paiement: "confirme"
  facture_pdf: true
```

| Champ visible | Pourquoi il compte | Exemple |
| --- | --- | --- |
| Reference | Identifier sans ambiguite la commande | `TRI-2026-00421` |
| Service | Savoir ce qui a ete achete | `session de support` |
| Statut | Lire l'état de cycle de vie | `payee` |
| Statut paiement | Distinguer commande et reglement | `confirme` |
| Facture PDF | Recuperer le justificatif | `true` |
| Profil de facturation | Eviter une erreur administrative | `entreprise` |

## Bonne habitude avant d'ouvrir un ticket
Gardez une trace très simple de :

- La référence de commande
- La date d'achat
- Le moyen de paiement
- Le résultat attendu
- L'étape exacte ou le flux s'est arrete

```markdown
Reference commande : TRI-2026-00421
Resultat attendu : accès VM et visibilité console
Probleme actuel : paiement accepte, service pas encore visible
```

## Pages associees
- `Paiements et factures`
- `Support et exploitation`
- `Parcours client`
