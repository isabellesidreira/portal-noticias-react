import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/estilos.css'
import { RouterProvider } from 'react-router'
import rotas from './rotas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas}/> 
    </StrictMode>,
)
