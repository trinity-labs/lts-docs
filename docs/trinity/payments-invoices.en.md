# Payments and invoices
`TRINITY` exposes billing and settlement flows as part of the customer experience. The goal is not only to pay, but also to understand what happened after payment.

## Payment methods
Depending on the service, `TRINITY` can expose:

- Card payment
- PayPal
- Bank transfer
- Litecoin payment

Each method leads to a different operational expectation. Instant online methods usually return quickly. Manual methods may remain pending until settlement is confirmed.

```text
card or PayPal -> fast return -> order updated quickly
bank transfer  -> pending state -> manual settlement confirmation
Litecoin       -> pending state -> payment reference verification
```

## Payment states
The public side of `TRINITY` should make these states understandable:

- Paid
- Pending
- Refused
- Cancelled
- Retry available

```json
{
  "payment": {
    "provider": "PayPal",
    "status": "pending",
    "retry_allowed": false,
    "invoice_available": false
  }
}
```

## Invoices
An invoice PDF is the customer-facing billing artifact. It should help the user identify:

- Invoice number
- Order reference
- Customer name
- Billed service
- Paid or pending state
- Invoice date

```yaml
invoice:
  number: "INV-2026-00152"
  order_reference: "TRI-2026-00421"
  status: "paid"
  export: "pdf"
```

## If a payment stays pending
The right action depends on the flow:

- Wait for the provider return if it is still in progress
- Review the order page
- Verify that the billing profile is correct
- Keep the payment reference
- Contact support if the state remains blocked

```markdown
Pending payment checklist
- Order reference copied
- Invoice checked
- Payment provider noted
- Timestamp recorded
- Support contacted only after the expected delay
```

## What should not happen
From a customer point of view, a failed or pending payment should not create confusion such as:

- Duplicate orders with the same intent
- Missing invoice references
- Invisible retry path
- No clue about the provider state
