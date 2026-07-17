# Bootstrap and access
`UnyDesk` has to solve two public problems before any remote session can start:

- how the host software is installed and trusted
- how a viewer is allowed to reach that host

## Host package distribution
The first public step is usually the host package download. A user selects the appropriate host binary for the target system and installs or launches it on the machine that will later receive remote access.

Publicly, the distribution path should stay simple:

- supported target clearly visible
- current package easy to identify
- bootstrap or install path obvious
- update or re-download path stable

## Registration, claim and pairing
After first start, the host is not yet a meaningful remote access endpoint. It has to register and expose an identity.

Depending on the scenario, `UnyDesk` can involve:

- first registration of the host runtime
- claim or pairing to an account
- association to a trusted environment
- reuse of a known host identity after reconnect

The viewer should be able to understand whether a host is merely online, already paired or still waiting for a trust step.

## Local approval
Some hosts can enforce local approval before a remote session begins. Publicly, this means:

- a session may be routed correctly and still wait for host-side approval
- a host can accept or deny the request locally
- a recently approved participant can be allowed again without repeating the full prompt immediately
- explicit denial can revoke that remembered approval for the same participant

## Access modes
Publicly, `UnyDesk` can be used in two broad access modes:

- **account-oriented access** through the normal service surface
- **standalone access** through a direct session link and a session-specific token

Standalone access is useful when:

- a user should join a session without the full account portal
- a support operator needs a narrow invitation
- the session should remain limited to one access context

## Before opening a session
1. confirm the correct host package is installed
2. confirm the host is online
3. confirm the host identity or pairing state
4. confirm whether local approval is required
5. confirm whether the session will be account-based or standalone
