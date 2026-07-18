# Evolution
This page synthesizes how `UnyPort` evolved functionally across the visible repository history and the current codebase.

## Monitoring-first direction
From the start, `UnyPort` evolved as a monitoring-first control plane:

- Live system state before orchestration
- Host role awareness before abstraction
- One operational portal before multiple dashboards

That direction is explicit in the README and still reflected in the current routes and UI pages.

## Better operator ergonomics
Recent work made the product more usable as a daily surface:

- Hamburger and mobile navigation
- Clearer page separation
- Restart heatmap
- Refined network map
- Visible version reporting

These are not cosmetic only. They change how quickly an operator can read a host.

## Stronger platform awareness
The current code shows a more mature infrastructure reading than the earliest overview pages suggested:

- Dom0 versus DomU differentiation
- Xen domain and hypervisor inspection
- Alpine LBU awareness
- OpenRC service reading without shelling out to heavy tools
- Security checks tied to the actual host

This makes `UnyPort` feel like a platform-native observer rather than a generic web admin shell.

## Better operational packaging
The repository also evolved in how it is delivered:

- Development mode with live assets
- Production build with embedded assets
- Stripped binaries
- UPX compression
- Optional HTTPS and HTTP/3

That packaging evolution supports the single-binary and low-overhead promise.

## Identity and instance maturity
The current product surface now includes:

- Local user administration
- OAuth provider support
- Profile and SSH key storage
- Public branding retrieval
- Admin branding customization

This turns `UnyPort` from a local dashboard into a real multi-user operator surface.

## Current limit and next step
As of `2026-07-17`, the public product should still be understood as `V1`:

- Strong on monitoring
- Strong on host context
- Useful for controlled proxy entry
- Not yet a full Xen lifecycle orchestrator

The README explicitly frames a future `V2` around broader native orchestration workflows. The current documentation should therefore present `UnyPort` as a serious operational portal with a deliberately bounded scope.
