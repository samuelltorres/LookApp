import React, { createContext } from 'react'

export const AppContext = createContext({})

const ContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: 'joao' }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
