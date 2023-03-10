import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { IUser } from '@/interfaces/user.interface'
import axiosInstance from '@/utils/axios.instance'
import { showError } from '@/utils/error'
import { AxiosError } from 'axios'

export interface IAppContext {
  user?: IUser
  token: string | null
  setToken: (token: string | null) => void
  destroyToken: () => void
}

const AppContext = createContext<IAppContext>({
  user: undefined,
  token: null,
  setToken: () => null,
  destroyToken: () => null
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<IUser | undefined>(undefined)
  const setAccessToken = (token: string | null) => {
    setCookie(null, '_token', token!, {
      maxAge: 60 * 60 * 24 /* one hour */,
      path: '/'
    })
  }
  const destroyToken = () => {
    destroyCookie(null, '_token')
  }
  const getUser = async () => {
    if (token) {
      if (!user) {
        try {
          const { data } = await axiosInstance<IUser>('/api/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(data)
        } catch (e) {
          let status
          if (e instanceof AxiosError) {
            status = e.response?.status
          }
          showError(e, status === 401)
        }
      }
    }
  }

  useEffect(() => {
    const { _token: accessToken } = parseCookies()
    setToken(accessToken)
    if (accessToken) (async () => await getUser())()
    //  eslint-disable-next-line
  }, [token])
  return (
    <AppContext.Provider
      value={{ token, setToken: setAccessToken, destroyToken, user }}
    >
      {children}
    </AppContext.Provider>
  )
}
