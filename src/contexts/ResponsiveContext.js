import React, { createContext, useState, useEffect } from 'react'

const ResponsiveContext = createContext()

export const ResponsiveContextProvider = ({ children }) => {
  const [isWrapped, setIsWrapped] = useState(window.screen.width<900)
  const [showMenu, setShowMenu] = useState(!isWrapped)
  const [language, setLanguage] = useState(JSON.parse(localStorage.getItem('language')))
  const containerStyle = {
    padding: isWrapped ? `3rem 7vw` : '',
  }

  const setLang = (lang) =>  {
    localStorage.setItem('language', lang ? JSON.stringify(lang) : 'english')
    setLanguage(lang || 'english')
  }

  const isEnglish = language === 'english'

  if (!language) setLang('english')

  useEffect(() => {
    setShowMenu(!isWrapped)
  }, [isWrapped])

  window.addEventListener('resize', () => setIsWrapped(window.screen.width<900))

  const value = {
    isWrapped,
    showMenu,
    setShowMenu,
    containerStyle,
    isEnglish,
    setLanguage: setLang
  }

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContext