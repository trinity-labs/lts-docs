# Session Broker
The broker is the coordination layer of `UnyDesk`. It does not replace the host or the viewer. It creates the shared session context and carries the information required for both sides to meet.

## Session lifecycle
The public lifecycle is:

```text
pending
  -> offered
  -> active
  -> closed
```

The exact timing depends on host availability, viewer authentication, host acknowledgement and transport negotiation.

## What the broker tracks
The broker can expose:

- Session ID
- Target host or public ID
- Viewer identity and label
- Routed host identity
- WebRTC offer and answer state
- Viewer and host ICE candidates
- Dispatch state and count
- Last dispatch and last host acknowledgement timestamps
- Fallback screen revision and update timestamp

These fields are useful because they separate a routing problem from a media problem.

## Signaling path
When realtime transport is available, the browser and host exchange offer, answer and ICE candidates through the broker. After negotiation, the best path can become direct.

When direct transport is incomplete, `UnyDesk` still keeps the session state visible and can rely on fallback screen delivery instead of failing silently.

## Standalone session mode
Standalone mode is useful for a narrow invitation. The session carries a specific token and does not require the invited user to traverse the full account surface.

This mode should be treated as scoped access: the token is tied to the session context and should not be reused as a general account credential.
