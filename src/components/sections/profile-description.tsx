
const ProfileDescription = () => {
    return (
    <section id="description" className='flex w-full justify-center bg-background py-80'>
        <div className='relative h-min'>
            <div className='z-10 relative font-bold text-[130px] tracking-[-5%] leading-[106%] text-center text-foreground'>
                Follow me on my <br/> journey as I <br/> advance my skills.
            </div>
            <span className='text-background z-20 absolute left-32 -top-8 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Materials</span>
            <span className='text-background z-20 absolute right-20 top-29  uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>3D-modeling</span>
            <span className='text-background z-20 absolute top-97 -right-10 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform -rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Frontend</span>
            <span className='text-background z-0 absolute top-96 left-32 uppercase px-8 py-5 bg-primary font-black tracking-[8%] text-[20px] transform rotate-10 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]'>Stories</span>
        </div>
    </section>
    )
}

export default ProfileDescription;
