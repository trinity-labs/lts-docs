# Evolution
`UnyDesk` evolves around the remote access path: host packaging, trust, session routing, transport quality and operator visibility.

## Current public direction
The current direction is:

- Clearer host download and checksum handling
- Stronger host identity and trust flows
- Browser identity that survives normal page navigation
- Standalone sessions for scoped assistance
- Visible session dispatch state
- WebRTC signaling as the preferred realtime path
- Fallback screen delivery when direct media is incomplete

## Expected improvements
The next improvements should keep the same product boundary:

- Richer host status in the viewer
- Clearer pairing instructions for non-technical users
- Better transport diagnostics
- More explicit release notes for host packages
- Stronger integration points for `UnyPort` without merging products
- Support flows that can point to `UnyDesk` sessions from `TRINITY`

## Product boundary to preserve
`UnyDesk` should not become the billing portal and should not become the general operations dashboard. Its scope is remote access.

The healthy platform model is:

- `TRINITY` For lifecycle and support entry
- `UnyDesk` For interactive access
- `UnyPort` For supervision and local operations

This boundary keeps future growth understandable.
