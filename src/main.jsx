import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Req_comp from './components/config_components/req_comp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
          <Print_Configuration  />

    </BrowserRouter> */}
          <Req_comp  />
  </StrictMode>,
)
