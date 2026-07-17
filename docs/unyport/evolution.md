# Evolution
This page synthesizes how `UnyPort` evolved functionally across the visible repository history and the current codebase.

## Monitoring-first direction
From the start, `UnyPort` evolved as a monitoring-first control plane:

- live system state before orchestration
- host role awareness before abstraction
- one operational portal before multiple dashboards

That direction is explicit in the README and still reflected in the current routes and UI pages.

## Better operator ergonomics
Recent work made the product more usable as a daily surface:

- hamburger and mobile navigation
- clearer page separation
- restart heatmap
- refined network map
- visible version reporting

These are not cosmetic only. They change how quickly an operator can read a host.

## Stronger platform awareness
The current code shows a more mature infrastructure reading than the earliest overview pages suggested:

- Dom0 versus DomU differentiation
- Xen domain and hypervisor inspection
- Alpine LBU awareness
- OpenRC service reading without shelling out to heavy tools
- security checks tied to the actual host

This makes `UnyPort` feel like a platform-native observer rather than a generic web admin shell.

## Better operational packaging
The repository also evolved in how it is delivered:

- development mode with live assets
- production build with embedded assets
- stripped binaries
- UPX compression
- optional HTTPS and HTTP/3

That packaging evolution supports the single-binary and low-overhead promise.

## Identity and instance maturity
The current product surface now includes:

- local user administration
- OAuth provider support
- profile and SSH key storage
- public branding retrieval
- admin branding customization

This turns `UnyPort` from a local dashboard into a real multi-user operator surface.

## Current limit and next step
As of `2026-07-17`, the public product should still be understood as `V1`:

- strong on monitoring
- strong on host context
- useful for controlled proxy entry
- not yet a full Xen lifecycle orchestrator

The README explicitly frames a future `V2` around broader native orchestration workflows. The current documentation should therefore present `UnyPort` as a serious operational portal with a deliberately bounded scope.
