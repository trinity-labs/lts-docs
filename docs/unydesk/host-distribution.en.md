# Host Distribution
The host runtime is the machine-side part of `UnyDesk`. It identifies the machine, registers or reconnects to the broker and participates in remote sessions.

## Download targets
The public distribution surface can provide host packages for:

- Linux amd64
- Linux arm64
- Windows amd64
- Windows arm64
- MacOS amd64
- MacOS arm64
- Release checksums

The file selected by the user must match the operating system and CPU architecture of the machine that will become the host.

## Package role
The host package is responsible for:

- Generating or keeping a stable install identity
- Sending host metadata such as hostname, OS, architecture and version
- Authenticating with a provisioning credential when required
- Keeping heartbeat state visible to the broker
- Receiving session dispatch messages
- Participating in signaling and fallback delivery

## Verification
When checksums are published, users should compare the downloaded host package against the checksum list before running it. This is especially important when the package is moved manually between machines.

## Windows double-click behavior
The Windows host can be prepared so that a user can start it without command-line flags. The server URL can come from:

- An explicit launch argument
- An environment variable
- A sidecar configuration file next to the executable
- An embedded default value

This makes assisted use easier while keeping the server selection explicit.
