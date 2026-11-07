# Account and Orders
`TRINITY` It is not only a showcase. It is also the place where the customer account and the life cycle of the order remain visible.

## Role of the account
The client account is used to:

- Authenticate
- Store billing information
- View active and past orders
- Relaunching certain payment actions
- Download invoices
- Retrieving the right service area after purchase

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

## Typical steps of an order
An order can be passed through several states:

- Draft
- Submitted
- Pending payment
- Paid
- In preparation
- Available or delivered
- Cancelled or expired

```text
brouillon -> soumise -> paiement_en_attente -> payée -> préparation -> disponible
                                 \-> refusée -> reprise
```

| Status | Customer-side meaning | Recommended action |
| --- | --- | --- |
| Draft | Order not finalized | Check the information and submit |
| Submitted | The demand exists but is not yet settled | Waiting for payment or completing the flow |
| Pending payment | Return of payment is not confirmed | Check the payment method and wait |
| Paid | The Regulation is valid | Follow preparation or delivery |
| In preparation | The service is being processed | Wait for availability or check access |
| Available | The service or document is accessible | Use exposed surface |
| Cancelled or expired | The flow is closed without delivery | Restart or contact support |

## What the customer should read in an order
The order page must remain legible without internal details. The customer needs above all:

- The reference
- Current state
- The chosen service
- The billing profile
- The status of payment
- The link invoice if available

```yaml
resume_commande:
  référence: "TRI-2026-00421"
  service: "session de support"
  statut: "payée"
  statut_paiement: "confirmé"
  facture_pdf: true
```

| Visible field | Why does he count | Example |
| --- | --- | --- |
| Reference | Unmistakable identification of the command | `TRI-2026-00421` |
| Service | Know what was bought | `session de support` |
| Status | Read the life cycle state | `payée` |
| Payment status | Distinguish Order and Settlement | `confirmé` |
| PDF bill | Recover the supporting document | `true` |
| Billing profile | Avoiding an administrative error | `entreprise` |

## Good habit before opening a ticket
Keep a simple record of:

- The command reference
- Date of purchase
- The means of payment
- Expected result
- The exact step where the flow stopped

```markdown
Référence commande : TRI-2026-00421
Résultat attendu : accès VM et visibilité console
Probleme actuel : paiement accepte, service pas encore visible
```

## Related pages
- `Paiements et factures`
- `Support et exploitation`
- `Parcours client`
