# UnyDesk Glossary
## Host
The machine-side runtime that registers with the service, stays online and can accept or deny a remote session.

## Viewer
The browser-side participant that opens, watches and controls the remote session.

## Session
The live relationship between a viewer and a host, including routing, signaling, transport and closure.

## Broker
The service layer that carries signaling, routing, presence and status between viewer and host.

## Claim
A trust or ownership step that associates a host with an account or expected context.

## Pairing
The practical linking of a host to a trusted user, account or environment so it can later be reused without ambiguity.

## Standalone access
A direct session access mode using a session-specific token instead of the full account surface.

## Offer and answer
The WebRTC signaling pair exchanged between viewer and host before direct realtime transport can begin.

## ICE candidate
A network path candidate exchanged during WebRTC setup to discover a viable direct path between viewer and host.

## Peer-frame fallback
A fallback screen delivery mode used when direct realtime video is not yet usable or does not produce visible frames.

## Local approval
A host-side acceptance step that can require a person at the machine to allow or deny remote access.
