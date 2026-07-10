"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import {ModeToggle} from "@/components/mode-toggle";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const navLinks = [
	{
		label: "Features",
		href: "#",
	},
	{
		label: "Pricing",
		href: "#",
	},
	{
		label: "About",
		href: "#",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-10 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-full md:border md:transition-all md:ease-out",
				{
					"border-border text-background bg-sidebar-foreground/90 backdrop-blur-sm supports-backdrop-filter:bg-sidebar-foreground/90 md:top-2 md:max-w-3xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<Avatar size="lg">
					<AvatarImage src="https://github.com/FinnPenn.png" />
					<AvatarFallback>FINNPENN_Avatar</AvatarFallback>
					<AvatarBadge className="bg-green-600 dark:bg-green-800" />
				</Avatar>
				<div className="hidden items-center gap-2 md:flex">
					<div>
						{navLinks.map((link) => (
							<Button key={link.label} size="sm" variant="ghost" render={<a href={link.href} />} nativeButton={false}>{link.label}</Button>
						))}
					</div>
					<ModeToggle/>
					<Button variant="ghost" className="rounded-full" size="sm">Get Started</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
