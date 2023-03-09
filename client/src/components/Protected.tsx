import { FunctionComponent } from 'react'
import { parseCookies } from 'nookies'
import { withLayout } from '@/layout'
import SignIn from '@/pages/sign-in'

export const withAuth = <T extends Record<any, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function (props: T) {
    const { _token: accessToken } = parseCookies()
    if (!accessToken) return withLayout(SignIn)
    return <Component {...props} />
  }
}
