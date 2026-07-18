# TRINITY Usage
`TRINITY` is used as a lifecycle portal. The same site must allow a user to discover an offer, buy it, pay for it, follow an order, open an invoice, request assistance and, in some cases, access a VM or a console. This page describes the most important public uses.

## Use 1 - discover the offer and make first contact
Users often begin by:

- Reading an offer page
- Consulting the public documentation
- Opening the support page
- Using the contact page

This first phase helps determine whether the need belongs to `TRINITY` support, a service engagement, a training path, `UnyDesk` or `UnyPort`.

## Use 2 - create an account and order
`TRINITY` supports the standard customer journey:

- Account creation
- Sign-in
- Billing information entry
- Payment method selection
- Payment return handling
- Order and invoice review

Orders can concern support, consulting, training or infrastructure-related services.

## Use 3 - follow an order and its payment
After purchase, the customer can review:

- Payment status
- Order references
- The PDF invoice
- Billing information
- Selected retry or continuation actions when a payment remains pending

`TRINITY` exposes different states depending on the situation: successful payment, pending payment, refused payment, cancellation or retry.

## Use 4 - consult a VM or a console
When a service allows it, `TRINITY` can provide access to a virtual machine view or a console.

![VM and console view](../assets/images/screens/trinity-console.png)

*Generated capture of a `TRINITY` VM view in Data Disk Mode.*

In this context, the user can:

- Verify that a VM is reachable
- Read its status
- Open a console session
- Work in a maintenance-oriented mode

## Use 5 - understand Data Disk Mode
**Data Disk Mode** is useful when the goal is not to run a normal application service, but to intervene on the environment itself. In practice, this mode is used to:

- Verify disk contents
- Inspect a filesystem
- Recover an environment
- Perform maintenance or recovery operations

For the user, this means a VM may be accessible in a more technical mode focused on preservation, inspection or restoration of data.

## Use 6 - understand Alpine Linux and Xen
Two public building blocks matter in `TRINITY`:

- **Alpine Linux**: a lightweight system chosen for compact, fast and controlled service environments
- **Xen**: the hypervisor layer that carries the virtual machines

Users do not need to administer Xen directly in order to use `TRINITY`. They do need to understand that their services rely on this virtualization model and on Alpine Linux environments.

## Use 7 - know when to move to UnyDesk or UnyPort
`TRINITY` is not the only surface in the ecosystem.

- Use **`UnyDesk`** when the need is remote access or operator assistance.
- Use **`UnyPort`** when the need is supervision, control or topology reading.

![`UnyPort` view](../assets/images/generated/unyport-live-dashboard.png)

*Generated capture of the `UnyPort` demo dashboard used to illustrate infrastructure visibility and host supervision.*
