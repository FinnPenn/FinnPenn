import './App.css'
import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { AssetDeck } from './components/asset-deck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Header/>
          <div className='h-[5000px]'>
            <section id="hero">
              <AssetDeck/>
            </section>
          </div>
        </Layout>
    </ThemeProvider>
  )
}

export default App
