import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MessageProvider } from './context/MessagePortal.context.tsx'
import { MenuProvider } from './context/MenuMobilePortal.context .tsx'
import { ArticleProvider } from './context/ArticlesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
      <MenuProvider>
        <ArticleProvider>
          <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <App />
          </BrowserRouter>
        </ArticleProvider>
      </MenuProvider>
    </MessageProvider>
  </StrictMode>,
)
