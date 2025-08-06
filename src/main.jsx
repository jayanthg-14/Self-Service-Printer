import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Doc_comp from './components/config_components/Doc_comp.jsx'
import { BrowserRouter } from 'react-router-dom'
import Main_Page from './components/Main_Page.jsx'
import Cost_comp from './components/config_components/Cost_comp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    { <BrowserRouter>
          <Main_Page  />

    </BrowserRouter>}
  </StrictMode>
)
