# dvlv-site

Static HTML/CSS personal site.

## Structure

- `index.html` — about page
- `css/main.css` — site styles
- `assets/` — images for the main page
- `puglia/` — standalone static page served at `/puglia`

## Local development

No build step. Serve the repo root with any static server, e.g.:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment (Netlify)

No build command — publish the repo root.
