# TRINITY Architecture
`TRINITY` is a service architecture. On the public side, it assembles several surfaces that must remain coherent with each other: website, customer account, payments, support, VM operations and documentation. The purpose of this page is not to explain an internal framework, but to show how the platform is structured from the point of view of the user and day-to-day operations.

![`TRINITY` website](../assets/images/generated/trinity-homepage.png)

*The public site carries the `TRINITY` promise and routes the user toward offers, account flows, support and operations.*

## Layer 1 - website, account and customer relationship
The first layer is the most visible one:

- Public pages
- Commercial offers
- Contact and support pages
- Account creation and sign-in
- Orders, payments and invoices
- Chat and assistance

This layer turns `TRINITY` into a customer portal. It is the part that connects the commercial promise to actual service usage.

## Layer 2 - service surfaces
Once the customer is identified, `TRINITY` gives access to service surfaces:

- Order tracking
- Invoice download
- Payment status visibility
- Billing information
- Access to selected VM surfaces
- Console session opening

The platform therefore manages a lifecycle, not only website navigation.

## Layer 3 - VMs, consoles and operations
`TRINITY` does not stop at checkout. The site also exposes operations-oriented use cases:

- Consulting a VM
- Restarting or following status
- Opening a console
- Accessing a maintenance-oriented mode

![VM console in Data Disk Mode](../assets/images/screens/trinity-console.png)

*Generated capture of a `TRINITY` VM view in Data Disk Mode, focused on maintenance and recovery workflows.*

## Data Disk Mode
**Data Disk Mode** is a special access mode used when a VM must be handled differently from a normal application runtime. Publicly, it can be described as a maintenance or recovery mode:

- The VM starts in a reduced context
- The main objective becomes access to the disk and filesystem
- The user can inspect state, diagnose issues or recover an environment
- The mode is suitable for maintenance, analysis and recovery workflows

In other words, `TRINITY` does not only show whether a machine is online. It can also expose a dedicated work mode meant for safe intervention on data and system state.

## Alpine Linux and Xen in the architecture
Two public concepts matter here:

- **Alpine Linux** is the lightweight operating system used because it is compact, readable and well suited to controlled technical environments.
- **Xen** is the hypervisor layer used to run and isolate virtual machines.

Within `TRINITY`, this means a customer can order, follow and operate services that rely on Alpine Linux as a system base and Xen as the virtualization layer.

## Companion surfaces
`TRINITY` is connected to two companion services:

- **`UnyDesk`** for remote access and operator assistance flows
- **`UnyPort`** for supervision, control and infrastructure state visibility

![`UnyPort` dashboard](../assets/images/generated/unyport-live-dashboard.png)

*Generated capture of the `UnyPort` demo dashboard, showing host status, resources and supervision surfaces.*

## Overall reading
From a public perspective, `TRINITY` architecture can be read as:

1. A website that presents and sells
2. A customer account that tracks and invoices
3. A platform that connects payments, support and service access
4. Alpine Linux environments virtualized with Xen
5. Operational surfaces such as console access, Data Disk Mode, `UnyDesk` and `UnyPort`
