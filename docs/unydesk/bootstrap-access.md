# Bootstrap and access
`UnyDesk` has to solve two public problems before any remote session can start:

- How the host software is installed and trusted
- How a viewer is allowed to reach that host

## Host package distribution
The first public step is usually the host package download. A user selects the appropriate host binary for the target system and installs or launches it on the machine that will later receive remote access.

Publicly, the distribution path should stay simple:

- Supported target clearly visible
- Current package easy to identify
- Bootstrap or install path obvious
- Update or re-download path stable

## Registration, claim and pairing
After first start, the host is not yet a meaningful remote access endpoint. It has to register and expose an identity.

Depending on the scenario, `UnyDesk` can involve:

- First registration of the host runtime
- Claim or pairing to an account
- Association to a trusted environment
- Reuse of a known host identity after reconnect

The viewer should be able to understand whether a host is merely online, already paired or still waiting for a trust step.

## Local approval
Some hosts can enforce local approval before a remote session begins. Publicly, this means:

- A session may be routed correctly and still wait for host-side approval
- A host can accept or deny the request locally
- A recently approved participant can be allowed again without repeating the full prompt immediately
- Explicit denial can revoke that remembered approval for the same participant

## Access modes
Publicly, `UnyDesk` can be used in two broad access modes:

- **Account-oriented access** through the normal service surface
- **Standalone access** through a direct session link and a session-specific token

Standalone access is useful when:

- A user should join a session without the full account portal
- A support operator needs a narrow invitation
- The session should remain limited to one access context

## Before opening a session
1. Confirm the correct host package is installed
2. Confirm the host is online
3. Confirm the host identity or pairing state
4. Confirm whether local approval is required
5. Confirm whether the session will be account-based or standalone
