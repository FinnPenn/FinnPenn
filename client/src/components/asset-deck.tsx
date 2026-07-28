export function AssetDeck() {
  return (
    <div className="font-hero w-full flex flex-col items-center mt-20">
        <span className="font-light text-[128px]">
            Hi, I'm <b className="font-extrabold">Finn</b>
        </span>
        <div className="flex mt-20">
            <img className="size-50 transform -rotate-2 translate-x-20 translate-y-5" src="src/assets/deck/material_square.png" alt="" />
            <img className="size-50 transform rotate-8 translate-x-6 -translate-y-12" src="src/assets/deck/logo_square.png" alt="" />
            <img className="size-50 transform -rotate-8 -translate-x-6 translate-y-12" src="src/assets/deck/landscape_square.png" alt="" />
            <img className="size-50 transform rotate-3 -translate-x-20 -translate-y-5" src="src/assets/deck/interior_square.png" alt="" />
        </div>
        <div className="mt-20 text-[96px] text-[#505050] flex flex-col items-center leading-none gap-y-4">
            <div>Frontend</div>
            <div>3D</div>
            <div>Design</div>
            <div>Stories</div>
        </div>
    </div>
  )
}