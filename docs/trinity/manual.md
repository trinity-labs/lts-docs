# TRINITY manual
This page is the practical entry point for `TRINITY`. It explains how to use the platform from the first visit to a more technical VM or recovery situation.

## The normal path
The usual customer path is:

1. Discover an offer
2. Create an account
3. Place an order
4. Complete a payment
5. Review the invoice and order status
6. Access the related service
7. Request support if needed

```text
Visit site
  -> Read public documentation
  -> Create account
  -> Add billing details
  -> Confirm order
  -> Pay
  -> Follow service lifecycle
  -> Use VM, console, UnyDesk or UnyPort when available
```

## Before you place an order
Prepare a few pieces of information:

- The exact service you want
- The business or identity information used for billing
- The support level you expect
- Whether you need VM access, console access, `UnyDesk` or `UnyPort`

```yaml
customer_preflight:
  offer: "TRINITY support or infrastructure service"
  billing_profile: "company or individual"
  need_console_access: true
  need_remote_assistance: false
  need_monitoring_surface: true
```

## What TRINITY can expose
Depending on the service, `TRINITY` can expose:

- Order history
- Invoice PDFs
- Payment status
- VM status
- Console access
- Data Disk Mode visibility
- Support and chat entry points
- Links toward `UnyDesk` and `UnyPort`

## When the path becomes more technical
Some services go beyond a simple purchase flow. You may enter a more operational path when:

- A VM must be checked
- A console must be opened
- A system must be recovered
- A data volume must be inspected
- A service state must be confirmed before support escalates the case

```bash
# Example of a console-oriented session once access is granted
hostname
uptime
ip addr
df -h
```

## Reading the rest of this section
Use the next pages as a structured manual:

- `Account and orders` For the customer workflow
- `Payments and invoices` For billing flows
- `VMs and console` For access and status reading
- `Data Disk Mode` For maintenance and recovery context
- `Alpine Linux and Xen` For the platform model
- `Support and operations` For escalation and support boundaries
