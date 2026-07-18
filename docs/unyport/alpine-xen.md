# Alpine Linux and Xen
`UnyPort` is not neutral about its platform. The codebase and README both make it clear that the product is shaped around Alpine Linux and Xen-oriented infrastructure, especially where host clarity matters more than abstract orchestration.

## Why Alpine Linux matters here
Alpine Linux fits the `UnyPort` model because it is:

- Small
- Predictable
- Musl-based
- Comfortable in minimal operational footprints
- Compatible with LBU persistence workflows

That matters because `UnyPort` reads local system state directly and benefits from a host that stays legible and compact.

## Why Xen matters here
Xen matters because `UnyPort` distinguishes infrastructure roles, not just CPU graphs.

The backend detects whether the host looks like:

- `Dom0`
- `DomU`
- `Container`
- `Alpine`
- `Unknown`

On `Dom0`, `UnyPort` enriches Linux telemetry with Xen toolstack data from:

- `xl info`
- `xl list`

This provides domain counts, vCPU totals, memory totals, scheduler details and per-domain CPU readings.

## Dom0 versus DomU
This distinction changes what the operator sees:

- On `Dom0`, `UnyPort` can show hypervisor-wide state and Xen domains
- On `DomU`, `UnyPort` behaves as a VM-level observer
- In containers, board and firmware fields may naturally be absent

The UI is explicitly shaped around those differences.

## LBU and persistence
`UnyPort` also understands the Alpine `lbu` model:

- Whether LBU is present
- Whether the last archive exists
- Whether changes look committed or dirty

This is especially relevant in Alpine maintenance and Data Disk Mode oriented environments where configuration drift must be easy to spot.

## Platform reading
In public documentation terms, `UnyPort` should therefore be read as:

1. An Alpine-native operator portal
2. Aware of Xen topology and roles
3. Useful on Dom0, DomU and lean service hosts
4. Aligned with minimal operations rather than heavyweight abstraction layers
