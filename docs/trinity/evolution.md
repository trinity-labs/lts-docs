# TRINITY Evolution
This page summarizes the recent functional evolution of `TRINITY` based on work actually carried out on the platform. It documents the public product surface and user-facing flows without exposing internal implementation details.

## Overview
`TRINITY` now covers a broader scope than the initial orchestration layer:

- customer account and order lifecycle
- PDF invoicing and payment follow-up
- commercial and technical support
- persistent support chat
- VM lifecycle, console access and recovery flows
- public and admin documentation
- consent, privacy and legal surfaces

`TRINITY` support also explicitly includes **`UnyDesk`** and **`UnyPort`**. Publicly, the platform should therefore be understood as a combined platform + operations + support surface, not only as a VM control panel.

## Customer account and orders
The customer account has been structured around a more complete order workflow:

- recent order listing
- dedicated order detail modal
- status-aware payment display with coherent color coding
- distinction between active, pending, refused, cancelled and deleted flows
- provider-specific rendering where needed

Subscription orders also expose the **next due date** when the flow provides one. Pending or failed payment retries reuse the same order entry instead of creating duplicates.

## PDF invoicing
The PDF invoice layer was significantly normalized:

- branding aligned with `TRINITY`
- stabilized logo, header and identity blocks
- better handling of special characters and accents
- aligned product, quantity, technical scope and amount columns
- readable invoice numbering
- net amount, VAT and total including tax
- legal wording and late-payment penalties
- regenerated legacy PDFs kept consistent with the current template

The resulting PDF is intended to be a customer-facing invoice rather than a raw technical export.

## Payments
The checkout and payment return flows were extended and unified.

### Supported providers and methods
Depending on the product, `TRINITY` exposes:

- **Mollie** for card payments and recurring subscriptions
- **PayPal** for compatible online payments
- **bank transfer** for manual settlement
- **Litecoin** for crypto payments

The pre-payment information flow was aligned before redirecting to the provider:

- billing identity
- billing address
- address validation and autocomplete
- collection of invoice-relevant customer data

### Payment return and statuses
The platform now handles provider returns more explicitly:

- systematic payment return modal
- **success** in green
- **pending** in orange
- **refused / failed / cancelled** in red
- payment retry without duplicating the order
- pending payment resume from the customer account

For manual flows, `TRINITY` exposes detailed instructions directly inside the account:

- IBAN / BIC / beneficiary for bank transfer
- receiving address and LTC amount for crypto
- copy buttons for sensitive payment references

Manual flows are therefore exposed publicly as pending-payment flows with direct access to settlement details.

## Support, chat and assistance
Support evolved on both commercial positioning and assistance UX.

### Support scope
`TRINITY` support explicitly covers:

- Alpine Linux support
- Xen support
- **`UnyDesk`** support
- **`UnyPort`** support

Commercial pages were rewritten accordingly to avoid separating products, operations and assistance artificially.

### Support chat
The chat moved from a modal to a dedicated page, with:

- conversation history
- front-side delete flow
- prefilled suggestions
- a more modern chat-oriented UI
- proper handling of simple rich text and inline code

One important recent change concerns non-authenticated visitors:

- history remains accessible even **without login**
- persistence relies on a **guest token**
- conversations are reconciled when an account is created
- a message limit applies to guests

The goal is to avoid losing history between guest usage and authenticated usage while keeping the public flow manageable.

## Consent, cookies and legal surfaces
Visible compliance on the frontend was also strengthened:

- custom consent banner / preference panel
- distinction between essential and functional cookies
- assistant availability tied to consent
- public pages for cookies, privacy, terms and legal notices

Legal texts were expanded to better cover:

- orders and custom services
- refund boundaries
- confidentiality
- platform usage
- billing and collection wording

## VM, bastion and console
Even though the public documentation does not describe internal scripts, several visible changes affected product behavior:

- better bastion console recovery
- clearer VM states in the UI
- improved reboot and restart handling
- stricter handling of orphaned or deleted VM resources

Publicly, this translates into a clearer expectation: an ordered or restarted VM should return in a coherent state, with a usable console and more predictable recovery behavior.

## Images, catalog and DDM experience
The `TRINITY` scope also expanded around:

- system images and their variants
- consistency of the DDM model
- catalog exposure
- clearer Alpine / Xen / `TRINITY` environment flows

This area remains under active evolution, but it is now part of the documented platform scope.

## Documentation surfaces
Documentation was restructured to distinguish:

- public documentation
- admin documentation
- product presentation
- operations-facing detail

The goal is to avoid repository-coupled documentation while still reflecting the platform that is actually exposed.

## Current limits and expected next steps
At the time of this summary, several areas still naturally remain in progress:

- stronger automation for bank transfer and crypto return processing
- continued refinement of PayPal and Mollie return handling within provider API constraints
- progressive enrichment of catalogs and system images
- continued unification across `TRINITY`, `UnyDesk` and `UnyPort` surfaces

In short, `TRINITY` is no longer only a platform entry point. It is now a unified surface for **orders, support, invoicing, VMs, console access and documentation**, articulated explicitly with **`UnyDesk`** and **`UnyPort`**.
