# UnyDesk Usage
`UnyDesk` is used when the platform user needs to initiate or receive remote access. The important public point is that usage is session-driven: the user does not only "open a tool", but starts a relationship between a viewer, a host, a route and one or more transport paths.

Typical public uses include:

- opening the landing page of the remote access service
- identifying the right host package for a target system
- bootstraping or claiming a host
- opening or monitoring a remote session
- sharing a standalone session link
- performing assisted support with local approval on the host
- continuing with fallback screen delivery if direct realtime video is degraded

## Use 1 - prepare a host
Users often begin by:

- downloading the correct host package
- launching or installing the host runtime
- checking whether the host appears online
- confirming whether pairing or claim is complete

## Use 2 - start a remote assistance session
In a normal assisted session, the viewer:

- opens the `UnyDesk` page
- selects or targets a host
- creates a session
- waits for host acceptance
- watches the session become offered, accepted and active

## Use 3 - operate through the browser session
Once a session is alive, the browser viewer can typically:

- watch the remote screen
- move the pointer
- send keyboard input
- exchange clipboard content
- send files to the host
- close or monitor the session

## Use 4 - work in standalone mode
Standalone access is useful when:

- a user should join a session without the full account portal
- a support operator needs a narrow invitation
- the session should remain limited to one access context

## Use 5 - survive imperfect network paths
When direct realtime media works, the user gets the best experience. When it does not, `UnyDesk` can still remain useful by combining:

- broker signaling
- session state visibility
- peer-frame fallback transport
- retry or recovery behavior instead of immediate abandonment

When the user goal is core platform orchestration, the relevant architecture is `TRINITY`. When the user goal is local service control, the relevant architecture is `UnyPort`.
