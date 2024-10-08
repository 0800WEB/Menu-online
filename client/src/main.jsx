import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './config.js';
import store from './state/store/store.js'
import App from './components/App.jsx'
import './styles/index.css'
import './styles/fonts.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
