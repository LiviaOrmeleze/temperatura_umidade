import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Alternativas de temas para o usuario */}
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>
);
