# Deriv partner landing page — GitHub Pages version

A landing page promoting your Deriv partner link. Tracking (Facebook Pixel /
Google Tag) is set in one file, `config.js`, which you edit right inside
GitHub's website — no server, no password panel, no PHP needed.

## Files

```
index.html        ← the landing page
config.js          ← EDIT THIS to set your Pixel ID / Tag ID
assets/style.css
assets/script.js   ← reads config.js and injects the tracking scripts
```

## 1. Put it on GitHub

1. Go to https://github.com and create a **new repository** (e.g. `deriv-landing`). Public is fine — there's nothing private in these files.
2. On the repo page, click **Add file → Upload files**, then drag in all the files/folders above (keep the `assets` folder structure).
3. Click **Commit changes**.

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Pick the `main` branch and `/ (root)` folder, then **Save**.
4. GitHub gives you a URL like `https://yourusername.github.io/deriv-landing/` — it goes live in about a minute.

## 3. Point betaconnect.xyz at it (optional)

If you want the domain instead of the github.io URL:

1. In the repo, add a file named `CNAME` (no extension) containing just:
   ```
   betaconnect.xyz
   ```
2. At your domain registrar, add these DNS records:
   - Four **A records** for `@` pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A **CNAME record** for `www` pointing to `yourusername.github.io`
3. Back in **Settings → Pages**, enter `betaconnect.xyz` as the custom domain and save. DNS changes can take up to a few hours to apply.

## 4. Set up Facebook Pixel and Google Tag

This replaces the admin panel — you edit one file directly on GitHub:

1. Open `config.js` in your repo (click the filename).
2. Click the **pencil icon** (top right of the file view) to edit.
3. Fill in your IDs:
   ```js
   window.SITE_CONFIG = {
     fbPixelId: "123456789012345",   // from Meta Events Manager
     googleTagId: "G-XXXXXXXXXX"     // from Google Analytics or Ads
   };
   ```
4. Scroll down, click **Commit changes**.
5. The live site picks this up automatically within a minute or two — no re-upload needed.

Leave either value as `""` if you don't have that one yet.

## Editing the affiliate link later

Open `index.html`, search for `deriv.partners`, and replace the link
wherever it appears (it's used in three places: header button, hero
button, and closing button).

## Notes

- Because this is a static site, there's no password login for editing
  tracking IDs — access control is just "who can push to this GitHub repo."
  Keep the repo private if you don't want the link/IDs publicly browsable
  in the commit history (they're not sensitive, but your call).
- The risk disclosure line near the bottom is there deliberately — Meta and
  Google often require a visible risk disclaimer on trading/financial
  offers, and removing it can get ad accounts flagged.
- The ticker at the top uses placeholder numbers — it's decorative, not a
  live market feed.
