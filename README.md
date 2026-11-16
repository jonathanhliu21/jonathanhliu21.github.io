# Jonathan Liu — Personal Website

A static React + TypeScript website built with Vite and Tailwind CSS for https://jonathanhliu21.github.io/.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run typecheck
npm run build
npm run preview
```

The built site is in `dist/`. Use Node.js 22.14+ or a current LTS. CI uses `npm ci` and the committed lockfile.

## Content

Edit `src/data/portfolio.ts` to update the biography, projects, contributions, authors, links, industry experience, skills, or résumé dropdown. The page follows four sections: About Me, Publications and Projects, Industry Experience, and Skills.

## Assets

All bundled assets are in `public/assets/` and are served by GitHub Pages:

- `resumes/software-resume.pdf`
- `resumes/robotics-ml-resume.pdf`
- `media/miniq.mp4`
- `media/trimi-unscrew.mp4` and `media/trimi-unscrew-poster.jpg`
- `media/transit-display.jpeg`
- `media/portrait.jpeg` (original photo, framed as a square in CSS)
- `media/mobiverse.png` (project interface screenshot)
- `media/miniq-poster.jpg` and `media/dexdirect-poster.jpg` (stills from the supplied videos)

Both résumé files and the transit photo are copies. The MiNI-Q video is converted to H.264 MP4 for browser playback. Original source files are untouched. Update assets by replacing these files, or change their site-relative URLs in the content file. No source-machine paths are required. The portrait framing is controlled by `.portrait-crop` in `src/index.css`; the original image is preserved. The MobiVerse screenshot matches the supplied image and is bundled from the project repository’s `resources/images/flow_diagram_1.png`.

TRIMI uses the bundled bottle-cap unscrewing video; its Video link points to the full YouTube demonstration. DexDirect uses the supplied project video URL. Videos have playback controls and do not autoplay. Failed images and videos are removed while contributions and project links remain available.

## GitHub Pages

The repository is initialized on `main`. Connect it to `jonathanhliu21/jonathanhliu21.github.io` without overwriting an existing remote:

```sh
git remote -v
# Only if no origin is configured:
git remote add origin https://github.com/jonathanhliu21/jonathanhliu21.github.io.git
```

On GitHub, select **Settings → Pages → Source: GitHub Actions**. Review and commit the files, then push to `main` when ready to publish:

```sh
git add .
git commit -m "Update personal website"
git push -u origin main
```

`.github/workflows/deploy.yml` builds and publishes `dist/` using the official GitHub Pages Actions. The Vite base is `/` for the root user-site domain. No publication is performed by local development or build commands.

## Metadata

Edit `index.html` for page metadata. The favicon, social image SVG fallback, robots file, and sitemap are in `public/`. Some social platforms require a PNG instead of the SVG fallback.
