import React from "react"
import RadialCarousel from '@/components/radial-carousel'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import Projects from '@/components/sections/projects'
import ProfileDescription from '@/components/sections/profile-description'

export const Index: React.FC = () => {
    return(
        <main>
            <Hero/>
            <ProfileDescription/>
            <section id="carousel" className='bg-card py-40'>
                <RadialCarousel/>
            </section>
            <Projects/>
            <Footer/>
        </main>
    )
}