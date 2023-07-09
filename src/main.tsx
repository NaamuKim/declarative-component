import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import("@/__msw__/browser")
    .then(async ({ worker }) => {
        await worker.start({
            onUnhandledRequest: "bypass",
        });
    })
    .catch((err) => {
        console.error(err);
    });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
