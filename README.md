# Ilias Anastasopoulos — Personal Portfolio

A responsive, single-page portfolio website and a one-page CV PDF. The site is built with plain HTML, CSS and JavaScript; it has no build step or framework dependency.

## Publish with GitHub Pages

1. Create a GitHub repository. For a personal site URL, name it `<your-github-username>.github.io`. A project repository name also works, but its URL includes the repository name.
2. Unzip this archive and upload the files **inside** the `ilias_portfolio_delivery` folder to the repository's root. Keep the `assets/` folder and `.nojekyll` file in place.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select the `main` branch and `/ (root)` folder. Save.
5. The Pages settings will show the published site URL when it is available.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html` — portfolio content and page structure.
- `styles.css` — visual design and responsive layouts.
- `script.js` — mobile navigation and subtle scroll reveals.
- `assets/Ilias-Anastasopoulos-CV.pdf` — recruiter-friendly one-page CV download.
- `assets/favicon.svg` — site icon.
- `cv-source.html` — editable HTML source used to create the PDF CV.
- `.nojekyll` — tells GitHub Pages to serve the static site directly.

## Personalise before publishing

- Check the phone number, email address and LinkedIn URL in `index.html` and `cv-source.html`.
- Review the role descriptions and dates, especially the Kaizen Gaming role history, before making the site public.
- The site deliberately omits date of birth, marital status, children, home address and personal social-media handle.
- The CV source is `cv-source.html`. To update the PDF, open it in a browser and use **Print → Save as PDF**, with paper size A4 and browser headers/footers turned off.

The website uses system font fallbacks and local assets, so it remains usable without loading third-party fonts or scripts.
