# Account and orders
`TRINITY` is not only a storefront. It is also the place where the customer account and the order lifecycle remain visible.

## Account scope
The customer account is used to:

- authenticate
- store billing information
- review active and past orders
- reopen payment-related actions
- download invoices
- identify the right service surface after purchase

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

- draft
- submitted
- pending payment
- paid
- processing
- delivered or available
- cancelled or expired

```text
draft -> submitted -> pending_payment -> paid -> processing -> available
                              \-> refused -> retry
```

## What the user should read in an order
An order page should be readable even without platform internals. The user mostly needs:

- the reference number
- the current status
- the selected service
- the chosen billing profile
- the payment state
- the invoice link when available

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

- the order reference
- the date of purchase
- the payment method
- the expected service outcome
- the exact point where the flow stopped

```markdown
Order reference: TRI-2026-00421
Expected result: VM access and console visibility
Current issue: payment accepted, service not yet visible
```

## Related pages
- `Payments and invoices`
- `Support and operations`
- `Customer journeys`
