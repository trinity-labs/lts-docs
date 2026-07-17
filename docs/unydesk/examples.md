# Examples
These examples describe public `UnyDesk` workflows without exposing private infrastructure procedures.

## Example 1 - assisted access
```text
User opens UnyDesk
  -> downloads the host package
  -> starts the host runtime
  -> signs in or receives a scoped invitation
  -> host becomes visible
  -> viewer starts a session
  -> host acknowledges the dispatch
```

This is the normal support-oriented path when a person is available near the target machine.

## Example 2 - prepared host
```text
Operator prepares host
  -> host keeps a stable install ID
  -> host heartbeats to the broker
  -> viewer opens UnyDesk later
  -> session targets the known host
```

This is useful when a machine must remain reachable for future assistance.

## Example 3 - standalone invitation
```text
Session is created
  -> scoped token is generated
  -> invited viewer opens the session link
  -> broker validates the token
  -> access remains tied to this session context
```

Standalone access is intentionally narrower than a full account login.

## Example 4 - transport fallback
```text
Viewer and host exchange signaling
  -> direct realtime path is attempted
  -> media path is incomplete
  -> broker state stays visible
  -> fallback screen delivery continues the session
```

The goal is not to hide degraded transport. The goal is to keep enough state visible to understand what still works.
