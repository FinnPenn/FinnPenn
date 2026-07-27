import './App.css'
import { useState } from 'react'
import { ThemeProvider } from "@/components/nav/theme-provider"
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'
import { AssetDeck } from './components/asset-deck'
import  { ReactLenis, useLenis } from 'lenis/react'
import VideoScrollPage from './components/experimental/video-scroll-page'
import GradientBlinds from './components/GradientBlinds'
import RadialCarousel from './components/radial-carousel'
import { ArrowUpRight } from 'lucide-react'
import Footer from './components/footer'

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
    <ReactLenis root >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-full h-screen relative bg-background'>
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
        <div className='flex h-screen w-full absolute bg-linear-to-r from-[#E6CDF9] to-[#FF0FBF] bg-clip-text text-transparent justify-center items-center top-0 left-0 pointer-events-none'>
          <div className='w-min relative h-min'>
            <div className='font-bold text-[80px] tracking-[8%] absolute top-35 right-5 text-shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>hello, I am</div>
            <div className='text-[400px] font-black text-shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>finn</div>
            <div className='text-[48px] tracking-[-4%] absolute bottom-20 right-4 text-shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>&#123;aka senix&#125;</div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center bg-background py-80'>
        <div className='relative h-min'>
          <div className='z-10 relative font-bold text-[130px] tracking-[-5%] leading-[106%] text-center text-foreground'>
            Follow me on my <br/> journey as I <br/> advance my skills.
          </div>
          <span className='text-background z-20 absolute left-32 -top-8 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Materials</span>
          <span className='text-background z-20 absolute right-20 top-29  uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>3D-modeling</span>
          <span className='text-background z-20 absolute top-97 -right-10 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Frontend</span>
          <span className='text-background z-0 absolute top-96 left-32 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Stories</span>
        </div>
      </div>
      <div className='bg-card py-40'>
      <RadialCarousel/>
      </div>
      <div className='py-20 px-27 flex flex-col gap-y-8 text-foreground bg-background'>
        <a className='flex' href='#'>
          <span className='uppercase font-heading text-[128px]'>Photo Media</span>
          <ArrowUpRight size={128}/>
        </a>
        <a className='flex' href='#'>
          <span className='uppercase font-heading text-[128px]'>Fernhaven Games</span>
          <ArrowUpRight size={128}/>
        </a> 
      </div>
      <Footer/>
      </ThemeProvider>
    </ReactLenis>
  )
}

export default App
