import './App.css'
import { useState } from 'react'
import { ThemeProvider } from "@/components/nav/theme-provider"
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { AssetDeck } from './components/asset-deck'
import  { ReactLenis, useLenis } from 'lenis/react'
import VideoScrollPage from './components/experimental/video-scroll-page'
import GradientBlinds from './components/GradientBlinds'

function App() {
   const lenis = useLenis((lenis) => {
    console.log(lenis)
  })
  return (
    // <ReactLenis root>
    //   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //       <Layout>
    //         <Header/>
    //           <div className='h-[5000px]'>
    //             <section id="hero">
    //               <AssetDeck/>
    //               <VideoScrollPage/>
    //             </section>
    //           </div>
    //         </Layout>
    //   </ThemeProvider>
    // </ReactLenis>
    <ReactLenis root>
      <div style={{ width: '100%', height: '100vh', position: 'relative', background: '#120F17' }}>
        <GradientBlinds
          className='blur-3xl'
          gradientColors={["#F349D4","#6230bb"]}
          angle={20}
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          mouseDampening={0.5}
          mirrorGradient={false}
          spotlightRadius={0.55}
          spotlightSoftness={1}
          spotlightOpacity={1}
          distortAmount={0}
          shineDirection="left"
        />
      </div>
      <div className='bg-[#120F17] text-white h-500'>
      testset
      </div>
      </ReactLenis>
  )
}

export default App
