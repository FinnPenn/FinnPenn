import './App.css'
import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from '@/components/header'
import { Layout } from '@/components/layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Header/>
          <div className='h-[5000px]'>
          </div>
        </Layout>
    </ThemeProvider>
  )
}

export default App
