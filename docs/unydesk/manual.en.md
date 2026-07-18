# UnyDesk Manual
This page is the practical entry point for using `UnyDesk`. The normal workflow is not a single button: it is a sequence that prepares a host, establishes trust and starts a session.

## Normal path
The usual public path is:

1. Open the `UnyDesk` URL
2. Sign in or use a standalone invitation
3. Download or start the host runtime
4. Claim or trust the host
5. Create a session toward the target host
6. Wait for host acknowledgement
7. Use the browser viewer
8. Close the session when access is no longer needed

```text
Open UnyDesk
  -> identify viewer
  -> prepare host
  -> establish trust
  -> create session
  -> broker routes to host
  -> viewer connects
  -> close session
```

## Before first use
Prepare:

- The expected `UnyDesk` URL
- The target operating system and CPU architecture
- Whether the host should be installed or only launched
- Whether access should be account-bound or standalone
- Whether local approval is required on the host

## What to monitor during a session
Useful public signals include:

- Host online or offline state
- Session status: pending, offered, active or closed
- Dispatch count and last host acknowledgement
- WebRTC offer and answer progression
- Fallback screen update time
- Visible capture errors when the host cannot provide a frame

## When to switch surfaces
Use `TRINITY` when the issue concerns account, service, invoice or support lifecycle. Use `UnyPort` when the issue concerns host supervision or local operations. Stay in `UnyDesk` when the issue concerns remote access, viewer behavior, host trust or session routing.
