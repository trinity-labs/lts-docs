# UnyDesk Usage
`UnyDesk` is used when the platform user needs to initiate or receive remote access. The important public point is that usage is session-driven: the user does not only "open a tool", but starts a relationship between a viewer, a host, a route and one or more transport paths.

Typical public uses include:

- Opening the landing page of the remote access service
- Identifying the right host package for a target system
- Bootstraping or claiming a host
- Opening or monitoring a remote session
- Sharing a standalone session link
- Performing assisted support with local approval on the host
- Continuing with fallback screen delivery if direct realtime video is degraded

## Use 1 - prepare a host
Users often begin by:

- Downloading the correct host package
- Launching or installing the host runtime
- Checking whether the host appears online
- Confirming whether pairing or claim is complete

## Use 2 - start a remote assistance session
In a normal assisted session, the viewer:

- Opens the `UnyDesk` page
- Selects or targets a host
- Creates a session
- Waits for host acceptance
- Watches the session become offered, accepted and active

## Use 3 - operate through the browser session
Once a session is alive, the browser viewer can typically:

- Watch the remote screen
- Move the pointer
- Send keyboard input
- Exchange clipboard content
- Send files to the host
- Close or monitor the session

## Use 4 - work in standalone mode
Standalone access is useful when:

- A user should join a session without the full account portal
- A support operator needs a narrow invitation
- The session should remain limited to one access context

## Use 5 - survive imperfect network paths
When direct realtime media works, the user gets the best experience. When it does not, `UnyDesk` can still remain useful by combining:

- Broker signaling
- Session state visibility
- Peer-frame fallback transport
- Retry or recovery behavior instead of immediate abandonment

When the user goal is core platform orchestration, the relevant architecture is `TRINITY`. When the user goal is local service control, the relevant architecture is `UnyPort`.
