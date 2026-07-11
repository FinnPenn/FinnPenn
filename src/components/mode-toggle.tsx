import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"

    // 1. Check if the browser supports View Transitions
    if (!document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    // 2. Intercept the DOM update to trigger the CSS animation
    document.startViewTransition(() => {
      // React updates the DOM state (adding/removing the .dark class) inside here
      setTheme(nextTheme)
    })
  }

  return (
    <Button className="rounded-full" variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}