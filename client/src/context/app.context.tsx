import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

export interface IAppContext {
  token: string | null
  setToken: (token: string | null) => void
  destroyToken: () => void
}

const AppContext = createContext<IAppContext>({
  token: null,
  setToken: () => null,
  destroyToken: () => null
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null)

  const setAccessToken = (token: string | null) => {
    setCookie(null, '_token', token!)
  }

  const destroyToken = () => {
    destroyCookie(null, '_token')
  }

  useEffect(() => {
    const { _token: accessToken } = parseCookies()
    setToken(accessToken)
  }, [])
  return (
    <AppContext.Provider
      value={{ token, setToken: setAccessToken, destroyToken }}
    >
      {children}
    </AppContext.Provider>
  )
}
