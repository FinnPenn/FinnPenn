import GradientBlinds from '@/components/GradientBlinds'

let isExpanded = false;
function expandMenu() {
    isExpanded = !isExpanded;
    console.log(isExpanded,'isExpanded')
}

function Hero() {
   return (
    <div className='w-full h-screen relative bg-background'>
        <button onClick={expandMenu} className='size-25 relative flex flex-col items-center justify-center gap-2 cursor-pointer'>
            {/* Top bar -> becomes diagonal line \ */}
            <div className="h-2.5 w-11 bg-foreground "></div>

            {/* Bottom bar -> becomes diagonal line / */}
            <div className="h-2.5 w-11 bg-foreground "></div>
        </button>
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
   )
}
export default Hero


