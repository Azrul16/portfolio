import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/IntroLoader.css'
import App from './App.jsx'
import SiteProviders from './SiteProviders'

const site = (
  <React.StrictMode>
      <SiteProviders><App /></SiteProviders>
  </React.StrictMode>
)

const root = document.getElementById('root')
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, site)
else ReactDOM.createRoot(root).render(site)
