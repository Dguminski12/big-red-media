# Big Red Media

Big Red Media is a Vite-powered React single-page experience showcasing the agency's services, portfolio highlights, and testimonials. The app is structured around modular components and routed pages so new sections or campaigns can be shipped quickly.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server with hot module reloading:
   ```bash
   npm run dev
   ```
   By default Vite serves the app at [http://localhost:5173](http://localhost:5173). The terminal output will confirm the active port if it differs.

## Available Scripts

The project uses standard Vite and ESLint npm scripts. Run them with `npm run <script>`:

| Script | Description |
| ------ | ----------- |
| `dev` | Launches the Vite development server with HMR enabled. |
| `build` | Produces an optimized production bundle in the `dist/` directory. |
| `preview` | Serves the built assets locally to verify the production bundle. Run `npm run build` first. |
| `lint` | Lints all source files with the configured ESLint rules. |

### Linting Guidance

Use `npm run lint` during development or in CI to catch common React, hooks, and accessibility issues. ESLint is configured via `eslint.config.js` and extends the official React recommendations.

## Dependencies

Runtime dependencies:
- [`react`](https://react.dev/) and [`react-dom`](https://react.dev/reference/react-dom) for building the UI.
- [`react-router-dom`](https://reactrouter.com/) for client-side routing between pages.

Key development dependencies:
- [`vite`](https://vitejs.dev/) for the dev server and build tooling.
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) for fast-refresh and JSX transform support.
- [`eslint`](https://eslint.org/) with the React Hooks and React Refresh plugins to enforce code quality.

## Directory Layout

```
src/
├── pages/         # Route-level views such as Home, Portfolio, and Pricing
├── components/    # Reusable UI building blocks shared across pages
├── data/          # Structured content and configuration consumed by components
├── assets/        # Imported images, icons, and other bundled media
├── styles.css     # Global styles applied across the application
└── main.jsx       # App bootstrap and router mounting point
public/            # Static assets served as-is (favicons, manifest, etc.)
```

## Deployment & Asset Notes

- Build optimized production assets with `npm run build`. Deploy the generated `dist/` directory to your static host or CDN.
- Assets in `public/` are copied to the root of the build output without processing. Reference them with absolute paths (e.g., `/logo.svg`).
- Assets imported from `src/assets/` are processed by Vite, allowing you to benefit from hashing and tree-shaking.
- Use `npm run preview` locally to validate the production build before deployment.

