import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Index } from './pages/Index';
import { ReferencesPage } from './pages/References';
import { ThemeProvider } from "@/components/nav/theme-provider"
import  { ReactLenis } from 'lenis/react'



function App() {
   return (
    <ReactLenis root >
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
          
            {/* Route Switcher */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/:References" element={<ReferencesPage />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App
