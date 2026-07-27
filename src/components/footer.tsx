import { ArrowUpRight } from "lucide-react"


const Footer = () => {

    return (
        <div className="w-full py-5 px-27 flex items-center justify-between uppercase font-extralight text-md bg-[#18141F] text-[#796B80]">
            <div className="flex gap-x-2">
                <span>Finn Penning</span>
                <span>-</span>
                <span>Lower Saxony, Germany</span>
                <span>-</span>
                <span>2K26</span>
            </div>
            <div className="flex">
                <span>Contact</span>
                <ArrowUpRight size={20} strokeWidth={1}/>
            </div>
        </div>
    )
}
export default Footer