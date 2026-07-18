# Security and Operations
`UnyDesk` is a remote access product, so security is part of the normal operating model. Access is useful only when host identity, viewer identity and session scope are explicit.

## Security baseline
The public security model includes:

- Account-backed authentication for normal users
- CSRF protection on state-changing browser requests
- Session cookies for authenticated access
- Scoped standalone tokens for invitation-style access
- Explicit host trust or claim flows
- Websocket channels for live state and host communication
- No-store behavior for host package downloads

## Host trust
A host should not be treated as trusted only because it can reach the broker. Trust depends on identity material such as install ID, public ID, hostname and the provisioning context.

Operationally, a host becomes useful when:

- It registers with stable identity
- It is associated with the expected user or context
- It remains visible through heartbeat
- It acknowledges session dispatch

## Session safety
A session should be closed when access is complete. Public operators should avoid keeping standalone links active longer than needed and should never reuse a session token as a general credential.

## Troubleshooting boundaries
When `UnyDesk` fails, separate the failure first:

- Authentication failure
- Host not registered or offline
- Host not trusted
- Session not dispatched
- WebRTC negotiation incomplete
- Fallback screen not updating

This distinction avoids treating every remote access issue as a network outage.
