# Introduction
`UnyPort` is a monitoring-first control portal written in Go and designed for Alpine Linux hosts, especially when they live in Xen-based environments. The application exposes one authenticated surface for host state, live metrics, logs, security posture, proxied tools and operator profile management.

![`UnyPort` dashboard](../assets/images/generated/unyport-live-dashboard.png)

*Generated capture of the `UnyPort` live dashboard, focused on host status, resources and operational visibility.*

## What UnyPort is
`UnyPort` is built around a few strong constraints:

- A single Go runtime
- A minimal deployment model
- Direct reads from the kernel and filesystem
- Explicit host-role awareness
- No dependence on a heavy agent stack

In this repository, the frontend is a single-page application served either from disk in development or embedded into the production binary.

## What UnyPort is not
`UnyPort` is not presented as:

- A public marketing website
- A customer ordering portal
- A full Xen orchestration suite today
- A generic desktop remote-access tool

Those roles belong instead to `TRINITY` and `UnyDesk`, depending on the need.

## Why this documentation exists
This documentation explains the visible product surface of `UnyPort` from the point of view of deployment and operations:

- What operators see
- How authentication and roles work
- What data is collected
- How Alpine Linux and Xen shape the product
- Where the current limits and evolution points are
