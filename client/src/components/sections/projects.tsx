import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react'

function Projects() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        // Small timeout ensures the target DOM element is rendered before scrolling
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        }
    }, [hash]);
   return (
    <section id="projects" className='py-20 px-27 flex flex-col gap-y-8 text-foreground bg-background'>
        <a className='flex' href='#'>
        <span className='uppercase font-heading text-[128px]'>Photo Media</span>
        <ArrowUpRight size={128}/>
        </a>
        <a className='flex' href='#'>
        <span className='uppercase font-heading text-[128px]'>Fernhaven Games</span>
        <ArrowUpRight size={128}/>
        </a> 
    </section>
   )
}
export default Projects


