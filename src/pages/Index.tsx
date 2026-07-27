import { useState } from 'react'

import RadialCarousel from '@/components/radial-carousel'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'

export const Index: React.FC = () => {
    return(
        <div>
            <Hero/>
            <div className='bg-card py-40'>
                <RadialCarousel/>
            </div>
            <Projects/>
            <Footer/>
      </div>
    )
}