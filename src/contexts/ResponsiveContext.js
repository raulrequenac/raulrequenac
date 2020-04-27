import React, { createContext, useState, useEffect } from 'react'

const ResponsiveContext = createContext()

export const ResponsiveContextProvider = ({ children }) => {
  const [isWrapped, setIsWrapped] = useState(window.screen.width<900)
  const [showMenu, setShowMenu] = useState(!isWrapped)
  const containerStyle = {
    padding: isWrapped ? `3rem 7vw` : '',
  }

  useEffect(() => {
    setShowMenu(!isWrapped)
  }, [isWrapped])

  window.addEventListener('resize', () => setIsWrapped(window.screen.width<900))

  const value = {
    isWrapped,
    showMenu,
    setShowMenu,
    containerStyle
  }

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContext