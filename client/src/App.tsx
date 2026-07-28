import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Index } from './pages/Index';
import { ReferencesPage } from './pages/References';
import { ThemeProvider } from "@/components/nav/theme-provider"
import  { ReactLenis, useLenis } from 'lenis/react'
import { ArticleList } from './components/article-list';



function App() {
   return (
    <ReactLenis root >
      <ArticleList/>
    </ReactLenis>
  )
}

export default App
