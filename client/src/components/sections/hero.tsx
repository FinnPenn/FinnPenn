import GradientBlinds from '@/components/GradientBlinds'
import Menu from '../ui/menu'

function Hero() {
    
   return (
    <section id="hero" className='w-full h-screen relative bg-background'>
        <Menu/>
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
                <div className='font-bold text-[80px] tracking-[8%] absolute top-35 right-5'>hello, I am</div>
                <div className='text-[400px] font-black'>finn</div>
                <div className='text-[48px] tracking-[-4%] absolute bottom-20 right-3'>&#123;aka senix&#125;</div>
            </div>
        </div>
    </section>
   )
}
export default Hero


