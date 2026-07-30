interface Props {
  className: string;
  isClosed: boolean;
}


const MenuButton = ({className = '', isClosed = false}:Props) => {
  if (isClosed) {  
    return (
    <div className={`${className} group`}>
        <div className="h-2.5 w-11 bg-foreground transform rotate-45 translate-y-1.25 group-hover:bg-primary transition-all duration-500"></div>
        <div className="h-2.5 w-11 bg-foreground transform -rotate-45 -translate-y-1.25 group-hover:bg-primary transition-all duration-500"></div>
    </div>
    )
  }
  else {
   return (
    <div className={`${className} group`}>
        <div className="h-2.5 w-11 bg-foreground group-hover:bg-primary transition-all duration-500"></div>
        <div className="h-2.5 w-11 bg-foreground group-hover:bg-primary transition-all duration-500"></div>
    </div>
    )
  }
}

export default MenuButton;