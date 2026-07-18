# UnyPort Manual
This page is the practical entry point for operators using `UnyPort` in day-to-day work. It focuses on the visible workflow from first login to supervised actions.

## Normal operator path
The usual path is:

1. Open the `UnyPort` URL
2. Sign in with a local or OAuth-backed account
3. Confirm the detected host role
4. Read dashboard metrics and restart history
5. Move to hypervisor, network, storage or security pages
6. Open a proxied internal app when needed
7. Update profile or admin settings only if the role allows it

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

- The correct URL or reverse proxy entry point
- A local user or configured OAuth provider
- The expected host type: Dom0, DomU, container or Alpine host
- Whether an internal proxied app such as `ttyd` should be available

## What the portal can expose
Depending on configuration and host role, `UnyPort` can expose:

- Dashboard summaries
- Live CPU, memory and network data
- Disk state and LBU persistence status
- OpenRC services and selected logs
- Security checks and listener exposure
- Xen hypervisor and domain data on Dom0
- Operator profile, SSH key and branding settings

## When the path becomes more technical
The workflow becomes more operational when the operator needs to:

- Compare the running Alpine or kernel version with current `TRINITY` boot tags
- Inspect a Dom0 and its active domains
- Verify whether LBU changes are committed
- Review crashed services
- Open a proxied terminal app through `/proxy/<name>/`

The next pages act as the structured manual for those tasks.
