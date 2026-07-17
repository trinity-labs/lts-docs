# TRINITY manual
This page is the practical entry point for `TRINITY`. It explains how to use the platform from the first visit to a more technical VM or recovery situation.

## The normal path
The usual customer path is:

1. discover an offer
2. create an account
3. place an order
4. complete a payment
5. review the invoice and order status
6. access the related service
7. request support if needed

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

- the exact service you want
- the business or identity information used for billing
- the support level you expect
- whether you need VM access, console access, `UnyDesk` or `UnyPort`

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

- order history
- invoice PDFs
- payment status
- VM status
- console access
- Data Disk Mode visibility
- support and chat entry points
- links toward `UnyDesk` and `UnyPort`

## When the path becomes more technical
Some services go beyond a simple purchase flow. You may enter a more operational path when:

- a VM must be checked
- a console must be opened
- a system must be recovered
- a data volume must be inspected
- a service state must be confirmed before support escalates the case

```bash
# Example of a console-oriented session once access is granted
hostname
uptime
ip addr
df -h
```

## Reading the rest of this section
Use the next pages as a structured manual:

- `Account and orders` for the customer workflow
- `Payments and invoices` for billing flows
- `VMs and console` for access and status reading
- `Data Disk Mode` for maintenance and recovery context
- `Alpine Linux and Xen` for the platform model
- `Support and operations` for escalation and support boundaries
