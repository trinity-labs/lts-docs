# Introduction
`UnyPort` is a monitoring-first control portal written in Go and designed for Alpine Linux hosts, especially when they live in Xen-based environments. The application exposes one authenticated surface for host state, live metrics, logs, security posture, proxied tools and operator profile management.

![`UnyPort` dashboard](../assets/images/generated/unyport-live-dashboard.png)

*Generated capture of the `UnyPort` live dashboard, focused on host status, resources and operational visibility.*

## What UnyPort is
`UnyPort` is built around a few strong constraints:

- a single Go runtime
- a minimal deployment model
- direct reads from the kernel and filesystem
- explicit host-role awareness
- no dependence on a heavy agent stack

In this repository, the frontend is a single-page application served either from disk in development or embedded into the production binary.

## What UnyPort is not
`UnyPort` is not presented as:

- a public marketing website
- a customer ordering portal
- a full Xen orchestration suite today
- a generic desktop remote-access tool

Those roles belong instead to `TRINITY` and `UnyDesk`, depending on the need.

## Why this documentation exists
This documentation explains the visible product surface of `UnyPort` from the point of view of deployment and operations:

- what operators see
- how authentication and roles work
- what data is collected
- how Alpine Linux and Xen shape the product
- where the current limits and evolution points are
