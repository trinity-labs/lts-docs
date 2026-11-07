# Examples
## Example 1 - Verify service responds
```sh
curl -ks https://<cloud-domain>/login | sed -n '1,80p'
```

Expected result:

- ✅ An HTML response
- ✅ No proxy error page
- ✅ No timeout

## Example 2 - check branding
```sh
curl -ks https://<cloud-domain>/static/custom.css | sed -n '1,80p'
```

Expected result:

- ✅ The CSS UnyCloud responds
- ✅ The referenced images exist
- ✅ The browser does not use an old cache

## Example 3 - distinguishing login and branding
If the page is visually incorrect but the login works, start with the CSS.

If the browser does not offer the registered identifiers, start with the form behavior and proxy.
