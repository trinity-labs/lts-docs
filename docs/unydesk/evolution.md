# Evolution
`UnyDesk` evolves around the remote access path: host packaging, trust, session routing, transport quality and operator visibility.

## Current public direction
The current direction is:

- clearer host download and checksum handling
- stronger host identity and trust flows
- browser identity that survives normal page navigation
- standalone sessions for scoped assistance
- visible session dispatch state
- WebRTC signaling as the preferred realtime path
- fallback screen delivery when direct media is incomplete

## Expected improvements
The next improvements should keep the same product boundary:

- richer host status in the viewer
- clearer pairing instructions for non-technical users
- better transport diagnostics
- more explicit release notes for host packages
- stronger integration points for `UnyPort` without merging products
- support flows that can point to `UnyDesk` sessions from `TRINITY`

## Product boundary to preserve
`UnyDesk` should not become the billing portal and should not become the general operations dashboard. Its scope is remote access.

The healthy platform model is:

- `TRINITY` for lifecycle and support entry
- `UnyDesk` for interactive access
- `UnyPort` for supervision and local operations

This boundary keeps future growth understandable.
