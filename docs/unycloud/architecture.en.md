# UnyCloud Architecture
`UnyCloud` is a facade produced above a runtime from Filebrowser. The architecture remains compact: a compatible binary, an applicative container, a local base, a branding tree, mounted storage and an HTTPS proxy reverse.

## Layer 1 - browser and domain
The public entrance is:

```text
https://<cloud-domain>
```

The browser does not speak directly to the container. It passes through the reverse proxy TRINITY, which applies TLS, the security headers and the necessary adjustments to login.

## Layer 2 - reverse proxy
Proxy `nginx` Trinity side road to the internal Filebrowser backend:

```text
<cloud-domain>
  -> nginx TRINITY-SERVER
  -> backend interne Filebrowser
```

This layer also counts for login behavior, especially when the SPA Filebrowser bundle does not natively provide the attributes expected by the browser.

## Layer 3 - Filebrowser compatible runtime
The UnyCloud runtime retains the Filebrowser contract: same commands, same base, same configuration files and same binary name as possible for existing services. The service reads:

- ✅ A persistent basis
- ✅ A configuration file
- ✅ A branding tree
- ✅ Mounted root storage

## Layer 4 - storage
Storage is presented to the container as a navigation root. The goal is to make the files available without linking the web interface to a heavy application backend.

## Layer 5 - branding and hardening
Active branding is served via `/static/custom.css` The CSS bears the UlyCloud appearance, while the login behavior corrections remain the responsibility of the reverse proxy or application fork depending on the level concerned.
