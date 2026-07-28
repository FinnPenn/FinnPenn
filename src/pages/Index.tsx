import { useState } from 'react'

import RadialCarousel from '@/components/radial-carousel'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'

export const Index: React.FC = () => {
    return(
        <main>
            <Hero/>
            <section id="carousel" className='bg-card py-40'>
                <RadialCarousel/>
            </section>
            <Projects/>
            <Footer/>
        </main>
    )
}