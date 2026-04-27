# Caffeine Curve — marketing site

Static site for `delalic.github.io/caffeine-curve` (or any GitHub Pages target).
Three pages, one stylesheet, one tiny JS file. No build step, no dependencies.

## Files
- `index.html` — landing page (hero, features, showcase, privacy callout, what's new)
- `releases.html` — full version history
- `privacy.html` — privacy policy
- `style.css` — all styles (uses Caffeine Curve design tokens)
- `app.js` — scroll reveal + hero parallax
- `assets/` — logos and iPhone/Watch screenshots

## Deploy to GitHub Pages

The simplest path with the existing `delalic/caffeine-curve` repo:

1. Copy the contents of this `site/` folder into the **root** of the `caffeine-curve` repo (or into `/docs`).
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Source**, choose `Deploy from a branch`. Pick `main` and either `/ (root)` or `/docs` to match where you placed the files.
4. Save. Pages will publish at `https://delalic.github.io/caffeine-curve/` within a minute.

All asset paths are relative, so the site works at any subpath.

## Custom domain (optional)
Add a `CNAME` file at the root of the published folder containing your domain
(e.g. `caffeinecurve.app`) and configure the DNS record per GitHub's docs.
