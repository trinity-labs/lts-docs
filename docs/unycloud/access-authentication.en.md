# Access and authentication
`UnyCloud` is exposed behind HTTPS and requires authentication before accessing files.

## Entry point
The user entry point is:

```text
https://<cloud-domain>/login
```

## Login
The login interface is rendered by the Filebrowser application. The visible behavior therefore depends on two levels:

- Filebrowser Application Bundle
- The reverse proxy TRINITY that can fix some HTML attributes

## Autofill browser
Filebrowser history has shown an important point: the login page is not a simple static HTML. Fields can be produced by a SPA, which can hinder autofill if attributes `name` and `autocomplete` are not present.

The operating rule is:

- visual problem: check branding
- autofill problem: check the proxy
- ID problem: check the Filebrowser account and database

## Separation of responsibilities
`UnyCloud` Presents the experience. Filebrowser carries the application management of the files. The reverse proxy carries the HTTPS exposure and some security safeguards.
