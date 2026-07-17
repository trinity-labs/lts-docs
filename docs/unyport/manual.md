# UnyPort Manual
This page is the practical entry point for operators using `UnyPort` in day-to-day work. It focuses on the visible workflow from first login to supervised actions.

## Normal operator path
The usual path is:

1. open the `UnyPort` URL
2. sign in with a local or OAuth-backed account
3. confirm the detected host role
4. read dashboard metrics and restart history
5. move to hypervisor, network, storage or security pages
6. open a proxied internal app when needed
7. update profile or admin settings only if the role allows it

```text
Open portal
  -> Authenticate
  -> Read host role
  -> Check CPU / memory / network
  -> Inspect Xen or LBU context
  -> Review logs or security
  -> Escalate through TRINITY or UnyDesk if needed
```

## Before first use
Prepare a few pieces of information:

- the correct URL or reverse proxy entry point
- a local user or configured OAuth provider
- the expected host type: Dom0, DomU, container or Alpine host
- whether an internal proxied app such as `ttyd` should be available

## What the portal can expose
Depending on configuration and host role, `UnyPort` can expose:

- dashboard summaries
- live CPU, memory and network data
- disk state and LBU persistence status
- OpenRC services and selected logs
- security checks and listener exposure
- Xen hypervisor and domain data on Dom0
- operator profile, SSH key and branding settings

## When the path becomes more technical
The workflow becomes more operational when the operator needs to:

- compare the running Alpine or kernel version with current `TRINITY` boot tags
- inspect a Dom0 and its active domains
- verify whether LBU changes are committed
- review crashed services
- open a proxied terminal app through `/proxy/<name>/`

The next pages act as the structured manual for those tasks.
