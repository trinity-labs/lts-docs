# Payments and invoices
`TRINITY` exposes billing and settlement flows as a normal part of the customer journey. The goal is not only to pay, but also to understand what happens after the payment.

## Means of payment
According to the service, `TRINITY` may expose:

- ✅ Bank card
- ✅ PayPal
- ✅ Bank transfer
- ✅ Payment

Each method involves a different operational expectation. Online payments often come back quickly. Manual flows can remain on hold until the settlement is confirmed.

```text
carte ou PayPal -> retour rapide -> commande mise à jour vite
virement        -> état en attente -> confirmation de règlement plus tard
Litecoin        -> état en attente -> vérification d'une référence de paiement
```

## Payment States
The public surface shall make legible the following states:

- ✅ Pay
- ✅ Pending
- ✅ Refusal
- ✅ Cancel
- ✅ Possible recovery

```json
{
  "paiement": {
    "fournisseur": "PayPal",
    "statut": "en_attente",
    "reprise_possible": false,
    "facture_disponible": false
  }
}
```

## Invoices
The PDF invoice is the customer-side invoicing document. It must identify:

- ✅ The invoice number
- ✅ The command reference
- ✅ The client's name
- ✅ The service charges
- ✅ Status paid or pending
- ✅ Date of invoice

```yaml
facture:
  numéro: "INV-2026-00152"
  reference_commande: "TRI-2026-00421"
  statut: "payée"
  export: "pdf"
```

## If payment remains pending
The right action depends on the flow:

- ✅ Wait for supplier return if the route is still open
- ✅ Read the command page
- ✅ Check Billing Profile
- ✅ Keep the payment reference
- ✅ Contact Support if Status Remains Blocked

```markdown
Checklist paiement en attente
- Référence commande copiée
- Facture vérifiée
- Fournisseur de paiement noté
- Horodatage noté
- Support contacte après le delai normal
```

## What Should Not happen
From the customer perspective, a payment refused or pending must not create:

- ✅ Duplicated commands without reason
- ✅ An invoice not found
- ✅ An invisible recovery path
- ✅ Unable to read supplier status
