import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/IntroLoader.css'
import App from './App.jsx'
import SiteProviders from './SiteProviders'
import ErrorBoundary from './components/ErrorBoundary'

const site = (
  <React.StrictMode>
      <ErrorBoundary><SiteProviders><App /></SiteProviders></ErrorBoundary>
  </React.StrictMode>
)

const root = document.getElementById('root')
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, site, {
  onRecoverableError(error) {
    window.dispatchEvent(new CustomEvent('portfolio:error', {
      detail: { message: error.message, source: 'hydration' },
    }))
  },
})
else ReactDOM.createRoot(root).render(site)
