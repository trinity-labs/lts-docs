# Account and orders
`TRINITY` is not only a storefront. It is also the place where the customer account and the order lifecycle remain visible.

## Account scope
The customer account is used to:

- Authenticate
- Store billing information
- Review active and past orders
- Reopen payment-related actions
- Download invoices
- Identify the right service surface after purchase

```json
{
  "account": {
    "email": "customer@example.com",
    "billing_profile": "company",
    "orders_visible": true,
    "invoice_download": true
  }
}
```

## Typical order stages
An order can pass through several stages:

- Draft
- Submitted
- Pending payment
- Paid
- Processing
- Delivered or available
- Cancelled or expired

```text
draft -> submitted -> pending_payment -> paid -> processing -> available
                              \-> refused -> retry
```

## What the user should read in an order
An order page should be readable even without platform internals. The user mostly needs:

- The reference number
- The current status
- The selected service
- The chosen billing profile
- The payment state
- The invoice link when available

```yaml
order_summary:
  reference: "TRI-2026-00421"
  service: "support session"
  status: "paid"
  payment_status: "confirmed"
  invoice_pdf: true
```

## Good operational habits
Before opening a support case, keep a small record of:

- The order reference
- The date of purchase
- The payment method
- The expected service outcome
- The exact point where the flow stopped

```markdown
Order reference: TRI-2026-00421
Expected result: VM access and console visibility
Current issue: payment accepted, service not yet visible
```

## Related pages
- `Payments and invoices`
- `Support and operations`
- `Customer journeys`
