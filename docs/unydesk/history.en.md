# History
`UnyDesk` was separated as its own architecture because remote access has different constraints from local operations and customer lifecycle management.

## Initial direction
The first direction was to keep the product small and explicit:

- Standalone Go backend
- Single public broker API
- Alpine-friendly runtime constraints
- Browser-first session surface
- Host runtime distributed separately
- Future integration through HTTP APIs instead of code coupling

## Why not merge it into UnyPort
`UnyPort` is an operations and supervision portal. `UnyDesk` carries a different risk profile:

- Realtime transport
- Host access
- Viewer control
- Session tokens
- Media fallback
- Trust and pairing

Keeping the architecture separate makes security and product boundaries easier to reason about.

## Current public maturity
The public surface now documents `UnyDesk` as a product, not only as a scaffold. The important user-visible areas are host distribution, bootstrap, trust, session routing, transport signaling and fallback behavior.

## Relationship with the platform
`UnyDesk` remains part of the same platform family as `TRINITY` and `UnyPort`. The relationship is by product boundary and API contract, not by shared menu labels or development folder names.
