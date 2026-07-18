# Access and Authentication
`UnyPort` uses a compact authentication model built around local users, JWT cookies and CSRF protection. It also supports OAuth login through GitHub and GitLab when provider settings are fully configured.

## Local users and bootstrap
The primary identity store is `settings/users.json`.

Important behavior:

- If `users.json` does not exist, `UnyPort` seeds a first admin account
- The seeded email is `demo@unyport.app`
- The password comes from `UNYPORT_ADMIN_PASSWORD` or falls back to the built-in default
- The repository currently also ships a demo local user for evaluation in its source layout

This means the deployment path and the repository evaluation path are related but not identical.

## Roles
Three roles are accepted by the backend:

- `admin`
- `operator`
- `viewer`

Their operational meaning is:

- `viewer`: Authenticated read-only use of the portal
- `operator`: Authenticated use with routine write actions such as profile and password updates
- `admin`: Full access including user administration and branding changes

In the current UI, viewers can inspect the portal but cannot save profile changes or update credentials.

## OAuth providers
OAuth is implemented for:

- GitHub
- GitLab

Provider declarations live in `settings/config.yaml`. Placeholder values are intentionally ignored, so OAuth only becomes active when a real `client_id`, `client_secret` and `redirect_url` are supplied.

## Session model
After authentication, `UnyPort` issues a JWT cookie:

- Signed with `security.jwt_secret`
- Stored as an HTTP-only cookie
- Protected by the `https` setting for secure-cookie behavior
- Timed according to `security_extra.session_timeout_mins`

## CSRF, rate limiting and trusted origins
The application also enforces:

- CSRF protection with a dedicated token endpoint at `/api/csrf`
- A login rate limiter, `5` attempts per minute by default
- Trusted origin validation for state-changing requests

If `trusted_origins` is empty, `UnyPort` computes a default list from local active interfaces on port `8800`.

## Admin actions
Admin-only write actions currently include:

- Creating users
- Changing user roles
- Deleting users except the caller's own account
- Updating or resetting instance branding

That scope keeps administration explicit and small.
