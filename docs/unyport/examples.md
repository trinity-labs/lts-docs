# UnyPort Examples
This page gives concrete examples of how `UnyPort` is meant to be used in real operations.

## Example 1 - read a Xen Dom0 at a glance
An operator opens the portal on a Dom0 and immediately checks:

- Host role says `Dom0`
- Xen version and scheduler are present
- Domain count matches expectations
- Memory usage across the hypervisor is coherent
- No critical service crash appears on the security page

This is the fastest way to confirm that the hypervisor view is healthy before digging into guest-specific issues.

## Example 2 - detect uncommitted Alpine state
On a maintenance-oriented Alpine host, the storage page shows:

- LBU present
- State marked as `dirty`
- The last archive name

That tells the operator that configuration changes exist but have not yet been committed into the persistence archive.

## Example 3 - compare running versions with upstream TRINITY boot tags
An operator opens the hypervisor page and compares:

- The current Alpine version
- The current running kernel
- The latest role-specific versions returned by `/api/versions`

This provides a lightweight update signal without turning `UnyPort` into a full package manager.

## Example 4 - enter a proxied terminal app
If `ttyd` is declared in `settings/config.yaml`, the operator can open:

```text
/proxy/ttyd/
```

from the portal navigation instead of exposing the terminal app directly on its own public URL.

## Example 5 - onboard a new operator
An administrator can:

- Create a user
- Assign the `operator` role
- Let that user store a display name, avatar and SSH public key
- Keep branding and user administration restricted to admins

This keeps onboarding simple while preserving role boundaries.
