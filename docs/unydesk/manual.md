# UnyDesk Manual
This page is the practical entry point for using `UnyDesk`. The normal workflow is not a single button: it is a sequence that prepares a host, establishes trust and starts a session.

## Normal path
The usual public path is:

1. open the `UnyDesk` URL
2. sign in or use a standalone invitation
3. download or start the host runtime
4. claim or trust the host
5. create a session toward the target host
6. wait for host acknowledgement
7. use the browser viewer
8. close the session when access is no longer needed

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

- the expected `UnyDesk` URL
- the target operating system and CPU architecture
- whether the host should be installed or only launched
- whether access should be account-bound or standalone
- whether local approval is required on the host

## What to monitor during a session
Useful public signals include:

- host online or offline state
- session status: pending, offered, active or closed
- dispatch count and last host acknowledgement
- WebRTC offer and answer progression
- fallback screen update time
- visible capture errors when the host cannot provide a frame

## When to switch surfaces
Use `TRINITY` when the issue concerns account, service, invoice or support lifecycle. Use `UnyPort` when the issue concerns host supervision or local operations. Stay in `UnyDesk` when the issue concerns remote access, viewer behavior, host trust or session routing.
