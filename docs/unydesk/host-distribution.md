# Host Distribution
The host runtime is the machine-side part of `UnyDesk`. It identifies the machine, registers or reconnects to the broker and participates in remote sessions.

## Download targets
The public distribution surface can provide host packages for:

- Linux amd64
- Linux arm64
- Windows amd64
- Windows arm64
- macOS amd64
- macOS arm64
- release checksums

The file selected by the user must match the operating system and CPU architecture of the machine that will become the host.

## Package role
The host package is responsible for:

- generating or keeping a stable install identity
- sending host metadata such as hostname, OS, architecture and version
- authenticating with a provisioning credential when required
- keeping heartbeat state visible to the broker
- receiving session dispatch messages
- participating in signaling and fallback delivery

## Verification
When checksums are published, users should compare the downloaded host package against the checksum list before running it. This is especially important when the package is moved manually between machines.

## Windows double-click behavior
The Windows host can be prepared so that a user can start it without command-line flags. The server URL can come from:

- an explicit launch argument
- an environment variable
- a sidecar configuration file next to the executable
- an embedded default value

This makes assisted use easier while keeping the server selection explicit.
