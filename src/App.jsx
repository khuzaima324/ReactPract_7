import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import Card from './components/card'
import ThemeBtn from './components/themeButton'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
// concept
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

// returning
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Button */}
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* Cards */}
              <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
