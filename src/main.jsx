import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main_Page from './components/Main_Page.jsx'
import Upload from './components/Upload.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <Main_Page  />

    </BrowserRouter>
  </StrictMode>,
)
