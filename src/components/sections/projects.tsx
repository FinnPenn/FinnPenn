import { ArrowUpRight } from 'lucide-react'

function Projects() {
   return (
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
   )
}
export default Projects


