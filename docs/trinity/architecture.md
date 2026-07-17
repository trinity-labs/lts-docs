# TRINITY Architecture
`TRINITY` is a service architecture. On the public side, it assembles several surfaces that must remain coherent with each other: website, customer account, payments, support, VM operations and documentation. The purpose of this page is not to explain an internal framework, but to show how the platform is structured from the point of view of the user and day-to-day operations.

![`TRINITY` website](../assets/images/generated/trinity-homepage.png)

*The public site carries the `TRINITY` promise and routes the user toward offers, account flows, support and operations.*

## Layer 1 - website, account and customer relationship
The first layer is the most visible one:

- public pages
- commercial offers
- contact and support pages
- account creation and sign-in
- orders, payments and invoices
- chat and assistance

This layer turns `TRINITY` into a customer portal. It is the part that connects the commercial promise to actual service usage.

## Layer 2 - service surfaces
Once the customer is identified, `TRINITY` gives access to service surfaces:

- order tracking
- invoice download
- payment status visibility
- billing information
- access to selected VM surfaces
- console session opening

The platform therefore manages a lifecycle, not only website navigation.

## Layer 3 - VMs, consoles and operations
`TRINITY` does not stop at checkout. The site also exposes operations-oriented use cases:

- consulting a VM
- restarting or following status
- opening a console
- accessing a maintenance-oriented mode

![VM console in Data Disk Mode](../assets/images/screens/trinity-console.png)

*Generated capture of a `TRINITY` VM view in Data Disk Mode, focused on maintenance and recovery workflows.*

## Data Disk Mode
**Data Disk Mode** is a special access mode used when a VM must be handled differently from a normal application runtime. Publicly, it can be described as a maintenance or recovery mode:

- the VM starts in a reduced context
- the main objective becomes access to the disk and filesystem
- the user can inspect state, diagnose issues or recover an environment
- the mode is suitable for maintenance, analysis and recovery workflows

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

1. a website that presents and sells
2. a customer account that tracks and invoices
3. a platform that connects payments, support and service access
4. Alpine Linux environments virtualized with Xen
5. operational surfaces such as console access, Data Disk Mode, `UnyDesk` and `UnyPort`
