# Sécurité et exploitation
`UnyCloud` expose des fichiers. La sécurité repose donc sur une lecture stricte des accès, du transport et des données réellement montées.

## Points de contrôle
- ✅ HTTPS actif sur `<cloud-domain>`
- ✅ Reverse proxy cohérent
- ✅ Base Filebrowser persistante
- ✅ Arbre de stockage attendu
- ✅ Branding servi depuis `/static/custom.css`
- ✅ Pas d'exposition directe du port applicatif vers Internet

## Incidents à séparer
Ne pas mélanger trop vite :

- ✅ Incident d'authentification
- ✅ Incident de stockage
- ✅ Incident de branding
- ✅ Incident de proxy
- ✅ Incident de cache navigateur

## Données sensibles
`UnyCloud` ne doit pas être traité comme une zone neutre. Les fichiers déposés peuvent contenir des informations client, support ou exploitation. Les droits et l'arborescence visible doivent donc rester vérifiés après chaque changement de runtime.
