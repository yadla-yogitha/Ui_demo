# Event Admin Prototype

A static front-end prototype that mirrors the provided event admin screens:

- Events list screen
- Event detail with sidebar
- No guests state
- Guest list table state
- Badge template upload state

## Files

- `index.html` - separate theme setup page
- `setup.js` - setup page logic (save/reset colors and continue)
- `app.html` - main prototype screens
- `styles.css` - layout and color tokens
- `app.js` - screen/view switching interactions
- `COLOR_SYSTEM.md` - strict color system specification

## Run

Open `index.html` in a browser.

For local preview with a simple server:

```powershell
npx serve .
```

## Interactions

- On `index.html`, select `Primary`, `Secondary`, `Tertiary`, and `Text Heading` colors.
- Click `Save and Continue` to open `app.html` with selected colors.
- Click the first or second event card to open the detail screen.
- Use top buttons (`No Guests`, `Guest List`, `Badge Template`) to switch states.
- Sidebar menu items also switch to the relevant views.

## Deploy

This is a static web app (HTML/CSS/JS), so you can deploy it directly without a build step.

### Option 1: Netlify (Recommended)

1. Push this folder to a GitHub repository.
2. In Netlify, click **Add new site** -> **Import an existing project**.
3. Select your repository.
4. Build settings:
	- Build command: *(leave empty)*
	- Publish directory: `.`
5. Click **Deploy site**.

`netlify.toml` is already added with the correct settings.

### Option 2: Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New...** -> **Project**.
3. Import your repository.
4. Framework preset: **Other**.
5. Build and output settings:
	- Build command: *(leave empty)*
	- Output directory: *(leave empty)*
6. Click **Deploy**.

`vercel.json` is already added for static hosting defaults.

### Option 3: GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to repository **Settings** -> **Pages**.
3. Under **Build and deployment**, choose:
	- Source: **Deploy from a branch**
	- Branch: `main` (or your default branch), folder `/ (root)`
4. Save and wait for GitHub Pages URL.

### Important

- Start URL should be `index.html` (theme setup page).
- `Save and Continue` navigates to `app.html` and keeps selected colors using browser localStorage.
