import React, { createContext, useState } from 'react'

const ResponsiveContext = createContext()

export const ResponsiveContextProvider = ({ children }) => {
  const [isWrapped, setIsWrapped] = useState(window.screen.width<900)
  const [showMenu, setShowMenu] = useState(!isWrapped)

  window.addEventListener('resize', () => setIsWrapped(window.screen.width<900))

  const value = {
    isWrapped,
    showMenu,
    setShowMenu
  }

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContext