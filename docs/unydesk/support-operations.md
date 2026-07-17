# Support and operations
`UnyDesk` support is operational by nature. The user problem is often not "the page is unavailable" but "the host is online, the session exists and the media path still does not become usable". Public support guidance therefore needs to focus on states, evidence and transport behavior.

## Support scope
Publicly, `UnyDesk` support can concern:

- host package download or bootstrap confusion
- claim, pairing or trust issues
- session routing to the wrong host or to no host
- local approval not appearing or not being understood
- WebRTC signaling blocked before the answer
- direct media established but no decoded frame appears
- fallback screen delivery not appearing
- clipboard or file transfer issues

## Useful evidence
```markdown
Subject: UnyDesk session accepted but no video

Session ID: 188529734844f375
Target host: DESKTOP-RET6DCA
Observed state: offered -> accepted, no visible video
Viewer transport note: no remote answer yet / no inbound RTP / fallback missing
Expected result: live screen or peer-frame fallback
```

## Read the session in stages
Publicly, a remote session usually fails in one of these stages:

1. host package not installed or host offline
2. host present but not paired or not trusted
3. session created but not routed
4. session routed but waiting for local approval
5. host accepted but no answer posted
6. answer posted but ICE remains unusable
7. realtime video negotiated but no decoded frame arrives
8. fallback expected but no peer frame appears

## Typical useful symptoms
- "host offline"
- "session pending"
- "dispatch accepted but no answer"
- "answer applied but ICE stays checking"
- "no inbound video RTP yet"
- "realtime track timed out"
- "peer frame fallback requested but no image arrived"

## Before escalating
Verify:

- the correct host package version is running
- the host is still online
- the session route points to the expected host
- local approval has been accepted if required
- the browser viewer stayed on the same session page
- the issue is understood as signaling, direct media or fallback image delivery

## Related surfaces
- use **`TRINITY`** when the issue is account, billing, orders or service ownership
- use **`UnyPort`** when the issue is broader infrastructure visibility
- stay in **`UnyDesk`** when the issue is interactive remote access itself
