# Payments and invoices
`TRINITY` exposes billing and settlement flows as part of the customer experience. The goal is not only to pay, but also to understand what happened after payment.

## Payment methods
Depending on the service, `TRINITY` can expose:

- card payment
- PayPal
- bank transfer
- Litecoin payment

Each method leads to a different operational expectation. Instant online methods usually return quickly. Manual methods may remain pending until settlement is confirmed.

```text
card or PayPal -> fast return -> order updated quickly
bank transfer  -> pending state -> manual settlement confirmation
Litecoin       -> pending state -> payment reference verification
```

## Payment states
The public side of `TRINITY` should make these states understandable:

- paid
- pending
- refused
- cancelled
- retry available

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

- invoice number
- order reference
- customer name
- billed service
- paid or pending state
- invoice date

```yaml
invoice:
  number: "INV-2026-00152"
  order_reference: "TRI-2026-00421"
  status: "paid"
  export: "pdf"
```

## If a payment stays pending
The right action depends on the flow:

- wait for the provider return if it is still in progress
- review the order page
- verify that the billing profile is correct
- keep the payment reference
- contact support if the state remains blocked

```markdown
Pending payment checklist
- order reference copied
- invoice checked
- payment provider noted
- timestamp recorded
- support contacted only after the expected delay
```

## What should not happen
From a customer point of view, a failed or pending payment should not create confusion such as:

- duplicate orders with the same intent
- missing invoice references
- invisible retry path
- no clue about the provider state
