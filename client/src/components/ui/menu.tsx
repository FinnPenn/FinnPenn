import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Avatar, AvatarGroup, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import MenuButton from "@/components/ui/menu-button"

const Menu = () => {
    const [navExpanded, setNavExpanded] = useState<boolean>(false);

    function toggleNav() {
        setNavExpanded((prev) => !prev);
    }
  return (
    <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button className={'hover:bg-transparent!'} variant="ghost" />}>
                <MenuButton className={'absolute right-16 top-16 z-50 size-25 flex flex-col items-center justify-center gap-2 cursor-pointer'} isClosed={false} />
            </DrawerTrigger>
            <DrawerContent className={'w-1/4 rounded-none! bg-card-foreground p-16'}>
                <DrawerHeader>
                    <div className='flex items-center justify-between w-full'>
                        <AvatarGroup className='mt-6'>
                            <Avatar size="lg">
                                <AvatarImage src="https://github.com/FinnPenn.png" />
                                <AvatarFallback>FINNPENN_Avatar</AvatarFallback>
                            </Avatar>
                            <Avatar size="lg">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/2078779685794705409/9hDtJs-j_400x400.jpg" />
                                <AvatarFallback>SENIX_Avatar</AvatarFallback>
                            </Avatar>
                        </AvatarGroup>
                        <DrawerClose className={'absolute right-16 top-16 cursor-pointer size-25'} render={<Button className={'hover:bg-transparent!'} variant="ghost" />}>
                            <MenuButton className={''} isClosed={true} />
                        </DrawerClose>
                    </div>
                    
                </DrawerHeader>
                <div className="p-4">
                    {/* Navigation Links */}
                    <nav className='flex flex-col gap-y-10 mt-30'>
                        <Link className='w-fit font-heading text-[96px] uppercase transform hover:rotate-4 hover:translate-y-1.25 hover:bg-primary px-3 pt-4 leading-20 transition-transform text-foreground' to="/">Home</Link>
                        <button onClick={toggleNav} className='w-fit font-heading text-[96px] uppercase transform hover:-rotate-4 hover:-translate-y-1.25 hover:bg-primary px-3 pt-4 leading-20 transition-transform text-foreground cursor-pointer select-none'>References</button>
                        <div style={{ display: navExpanded ? 'flex' : 'none' }} className={`flex justify-end flex-col gap-0 leading-none px-10 -mt-8`}>
                            <Link className='w-fit font-heading text-[50px] uppercase hover:-rotate-4 hover:-translate-y-1.25 hover:bg-primary px-3 pt-4 transition-transform text-foreground' to="/materials">Materials</Link>
                            <Link className='w-fit font-heading text-[50px] uppercase hover:-rotate-4 hover:-translate-y-1.25 hover:bg-primary px-3 pt-4 transition-transform text-foreground' to="/modeling">3D-Modeling</Link>
                            <Link className='w-fit font-heading text-[50px] uppercase hover:-rotate-4 hover:-translate-y-1.25 hover:bg-primary px-3 pt-4 transition-transform text-foreground' to="/frontend">Frontend</Link>
                            <Link className='w-fit font-heading text-[50px] uppercase hover:-rotate-4 hover:-translate-y-1.25 hover:bg-primary px-3 pt-4 transition-transform text-foreground' to="/stories">Stories</Link>
                        </div>
                        <Link className='w-fit font-heading text-[96px] uppercase transform hover:rotate-4 hover:translate-y-1.25 hover:bg-primary px-3 pt-4 leading-20 transition-transform text-foreground' to="/#projects">Projects</Link>
                    </nav>
                </div>
                <DrawerFooter className='flex flex-row w-full justify-center gap-7'>
                    <a href="https://github.com/FinnPenn">
                        <img className='size-8' src="src/assets/svg/github.svg" alt="" />
                    </a>
                    <a href="https://x.com/FinnPe02">
                        <img className='size-8' src="src/assets/svg/x.svg" alt="" />
                    </a>
                    <a href="https://discord.com/users/finn1961">
                        <img className='size-8' src="src/assets/svg/discord.svg" alt="" />
                    </a>
                    <a href="https://steamcommunity.com/id/Senix222/">
                        <img className='size-8' src="src/assets/svg/steam.svg" alt="" />
                    </a>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
  );
};

export default Menu;