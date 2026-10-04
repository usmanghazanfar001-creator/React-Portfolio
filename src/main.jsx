import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
// Production HTML is pre-rendered (see scripts/prerender.mjs) -> hydrate; in dev -> render.
root.hasChildNodes() ? hydrateRoot(root, app) : createRoot(root).render(app)
