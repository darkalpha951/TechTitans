import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router} from "react-router-dom";
import NewsContextProvider from './components/contexts/NewsContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <NewsContextProvider>
            <App />
        </NewsContextProvider>
    </Router>
  </StrictMode>,
)
