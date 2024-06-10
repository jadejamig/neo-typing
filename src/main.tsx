import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-dom-last-location';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <LastLocationProvider>
        <Provider store={store}>
          <App />
          <Toaster />
          <Analytics/>
        </Provider>
      </LastLocationProvider>
    </Router>
  </React.StrictMode>,
)
