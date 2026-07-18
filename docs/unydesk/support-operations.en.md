# Support and operations
`UnyDesk` support is operational by nature. The user problem is often not "the page is unavailable" but "the host is online, the session exists and the media path still does not become usable". Public support guidance therefore needs to focus on states, evidence and transport behavior.

## Support scope
Publicly, `UnyDesk` support can concern:

- Host package download or bootstrap confusion
- Claim, pairing or trust issues
- Session routing to the wrong host or to no host
- Local approval not appearing or not being understood
- WebRTC signaling blocked before the answer
- Direct media established but no decoded frame appears
- Fallback screen delivery not appearing
- Clipboard or file transfer issues

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

1. Host package not installed or host offline
2. Host present but not paired or not trusted
3. Session created but not routed
4. Session routed but waiting for local approval
5. Host accepted but no answer posted
6. Answer posted but ICE remains unusable
7. Realtime video negotiated but no decoded frame arrives
8. Fallback expected but no peer frame appears

## Typical useful symptoms
- "Host offline"
- "Session pending"
- "Dispatch accepted but no answer"
- "Answer applied but ICE stays checking"
- "No inbound video RTP yet"
- "Realtime track timed out"
- "Peer frame fallback requested but no image arrived"

## Before escalating
Verify:

- The correct host package version is running
- The host is still online
- The session route points to the expected host
- Local approval has been accepted if required
- The browser viewer stayed on the same session page
- The issue is understood as signaling, direct media or fallback image delivery

## Related surfaces
- Use **`TRINITY`** when the issue is account, billing, orders or service ownership
- Use **`UnyPort`** when the issue is broader infrastructure visibility
- Stay in **`UnyDesk`** when the issue is interactive remote access itself
