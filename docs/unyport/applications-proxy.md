# Applications Proxy
`UnyPort` can expose selected internal applications through controlled reverse proxies mounted under `/proxy/<name>/`. This allows the operator to enter internal tools from the same authenticated portal instead of exposing each tool directly.

## Declaring an app
Proxied apps are declared in `settings/config.yaml`:

```yaml
apps:
  - name: TTYd
    host: ttyd
    port: 7681
    type: terminal
```

At runtime, the portal exposes metadata through `/api/apps` and mounts the proxy under:

```text
/proxy/ttyd/
```

## Proxy behavior
The reverse proxy performs a small amount of hardening and path rewriting:

- Strips untrusted forwarding headers
- Sets `X-Forwarded-For`, `X-Forwarded-Proto` and `X-Forwarded-Prefix`
- Rewrites `Location` headers so redirects stay under the mounted prefix
- Rewrites cookie paths so backend cookies remain scoped to the proxy mount
- Redirects non-JSON `401` and `403` responses back to the portal root

## TTYd-specific handling
The code applies a more permissive CSP only for the `ttyd` proxy mount so web terminal assets and websocket flows can work correctly. Other proxied apps keep the standard hardened behavior.

## Why this matters
This proxy layer keeps `UnyPort` focused:

- Operators get one authenticated entry point
- Internal apps do not need their own public exposure model
- The product can remain small while still bridging to terminal-oriented tools

The feature should therefore be understood as a controlled gateway, not as a generic application marketplace.
