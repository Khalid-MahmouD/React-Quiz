import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizeProvider } from './context/QuizContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizeProvider>

      <App />
    </QuizeProvider>
  </StrictMode>,
)
