import { createContext, PropsWithChildren, useContext } from 'react'

export interface IAppContext {}

const AppContext = createContext<IAppContext>({})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
