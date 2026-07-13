import './App.css'
import { useState } from 'react'
import { ThemeProvider } from "@/components/nav/theme-provider"
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { AssetDeck } from './components/asset-deck'
import  { ReactLenis, useLenis } from 'lenis/react'
import VideoScrollPage from './components/experimental/video-scroll-page'

function App() {
   const lenis = useLenis((lenis) => {
    console.log(lenis)
  })
  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Layout>
            <Header/>
              <div className='h-[5000px]'>
                <section id="hero">
                  <AssetDeck/>
                  <VideoScrollPage/>
                </section>
              </div>
            </Layout>
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App
