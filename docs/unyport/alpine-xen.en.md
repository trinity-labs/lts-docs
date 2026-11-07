# Alpine Linux and Xen
`UnyPort` The code and README clearly show that the product is shaped around Alpine Linux and an Xen-oriented infrastructure, especially when the clarity of the host role counts more than abstract orchestration.

## Why Alpine Linux counts here
Alpine Linux sticks to the model `UnyPort` Because he is:

- Small
- Predictable
- Base on musl
- Comfortable in minimal operational fingerprints
- Compatible with LBU persistence workflows

This counts because`UnyPort` directly reads the local state of the system and benefits from a compact and readable host.

## Why Xen is counting here
Xen counts because`UnyPort` differentiating infrastructure roles, not just CPU graphs.

The backend detects if the host looks like:

- `Dom0`
- `DomU`
- `Container`
- `Alpine`
- `Unknown`

On `Dom0`, `UnyPort` enriches Linux telemetry with Xen toolstack data from:

- `xl info`
- `xl list`

This gives the number of domains, the total of vCPU, memory, the scheduler and CPU readings per domain.

## Dom0 against DomU
This distinction changes what the operator sees:

- On `Dom0`, `UnyPort` can show the state of the hypervisor and Xen domains
- On `DomU`, `UnyPort` behaves like a VM centered observer
- In a container, motherboard and firmware fields can naturally miss

The IU is explicitly built around these differences.

## LBU and persistence
`UnyPort` also includes the Alpine model `lbu` :

- Presence or absence of LBU
- Existence of the last archive
- State `clean` or `dirty`

This is particularly useful in Alpine maintenance or Data Disk Mode oriented environments, where configuration drift must be simple to spot.

## Platform Play
In terms of public documentation, `UnyPort` Therefore, it should read as:

1. A natively aligned operator portal on Alpine
2. Aware of topology and Xen roles
3. Useful on Dom0, DomU and light service hosts
4. Alignment with minimal operations rather than heavy layers of abstraction
