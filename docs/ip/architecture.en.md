# Architecture

`IP` is designed as a light service.
The main page questions dedicated probes to properly distinguish IPv4 and IPv6 without depending on the automatic choice of browser.

## Flow
```text
navigateur
  -> page principale
  -> probe IPv4
  -> probe IPv6
  -> rendu HTML ou JSON
```

## Principles
- no user account
- no application session
- JSON response available for automation
- explicit separation between observed address and reporting headers

Headers transmitted by the client or proxy can be displayed as a context, but the reference address remains the one observed by the infrastructure.

