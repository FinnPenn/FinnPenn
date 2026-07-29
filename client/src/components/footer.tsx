import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils"; // or wherever your cn utility is located

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
  const adminUrl = `${strapiUrl}/admin`;

  return (
    <div
      className={cn(
        "w-full py-5 px-27 flex items-center justify-between uppercase font-extralight text-md bg-[#18141F] text-[#796B80]",
        className
      )}
    >
      <div className="flex gap-x-2">
        <span>Finn Penning</span>
        <span>-</span>
        <span>Lower Saxony, Germany</span>
        <span>-</span>
        <span>2K26</span>
      </div>
      <div className="flex gap-x-4">
        <div className="flex">
          <span>Contact</span>
          <ArrowUpRight size={20} strokeWidth={1} />
        </div>
        <a
          href={adminUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex"
        >
          <span>Admin</span>
          <ArrowUpRight size={20} strokeWidth={1} />
        </a>
      </div>
    </div>
  );
};

export default Footer;