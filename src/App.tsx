import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Index } from './pages/Index';
import { Materials } from './pages/Materials';
import { ThemeProvider } from "@/components/nav/theme-provider"
import  { ReactLenis, useLenis } from 'lenis/react'


function App() {
   return (
    <ReactLenis root >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
            {/* Navigation Links */}
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
              <Link to="/">Home</Link>
              <Link to="/materials">About</Link>
            </nav>

            {/* Route Switcher */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/materials" element={<Materials />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App
