# Compte et commandes
`TRINITY` n'est pas seulement une vitrine. C'est aussi l’endroit où le compte client et le cycle de vie de la commande restent visibles.

## Rôle du compte
Le compte client sert à :

- S'authentifier
- Stocker les informations de facturation
- Consulter les commandes actives et passées
- Relancer certaines actions de paiement
- Télécharger les factures
- Retrouver la bonne surface de service après achat

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

## Étapes typiques d'une commande
Une commande peut passer par plusieurs états :

- Brouillon
- Soumise
- Paiement en attente
- Payée
- En préparation
- Disponible ou livrée
- Annulée ou expirée

```text
brouillon -> soumise -> paiement_en_attente -> payée -> préparation -> disponible
                                 \-> refusée -> reprise
```

| Statut | Signification côté client | Action recommandée |
| --- | --- | --- |
| Brouillon | La commande n'est pas finalisée | Vérifier les informations puis soumettre |
| Soumise | La demande existe mais n'est pas encore réglée | Attendre le paiement ou compléter le flux |
| Paiement en attente | Le retour de paiement n'est pas confirmé | Vérifier le moyen de paiement et patienter |
| Payée | Le règlement est valide | Suivre la préparation ou la livraison |
| En préparation | Le service est en cours de traitement | Attendre la disponibilité ou vérifier les accès |
| Disponible | Le service ou document est accessible | Utiliser la surface exposée |
| Annulée ou expirée | Le flux est clos sans livraison | Recommencer ou contacter le support |

## Ce que le client doit lire dans une commande
La page commande doit rester lisible sans détails internes. Le client à surtout besoin de :

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
  statut: "payée"
  statut_paiement: "confirmé"
  facture_pdf: true
```

| Champ visible | Pourquoi il compte | Exemple |
| --- | --- | --- |
| Référence | Identifier sans ambiguïté la commande | `TRI-2026-00421` |
| Service | Savoir ce qui a été acheté | `session de support` |
| Statut | Lire l'état de cycle de vie | `payée` |
| Statut paiement | Distinguer commande et règlement | `confirmé` |
| Facture PDF | Récupérer le justificatif | `true` |
| Profil de facturation | Éviter une erreur administrative | `entreprise` |

## Bonne habitude avant d'ouvrir un ticket
Gardez une trace très simple de :

- La référence de commande
- La date d'achat
- Le moyen de paiement
- Le résultat attendu
- L'étape exacte où le flux s'est arrêtée

```markdown
Référence commande : TRI-2026-00421
Résultat attendu : accès VM et visibilité console
Probleme actuel : paiement accepte, service pas encore visible
```

## Pages associées
- `Paiements et factures`
- `Support et exploitation`
- `Parcours client`
