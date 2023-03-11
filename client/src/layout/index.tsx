import React, { FunctionComponent, PropsWithChildren } from 'react'
import Footer from '@/layout/Footer'
import { discountTheme } from '@/theme'
import { ThemeProvider } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AppContextProvider } from '@/context/app.context'
import dynamic from 'next/dynamic'
import { HeaderBase } from '@/layout/Header'

const Header = dynamic(() => import('@/layout/Header'), {
  ssr: false,
  loading: loadingProps => <HeaderBase />
})

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WrapperComponent(props: T) {
    return (
      <AppContextProvider>
        <ThemeProvider theme={discountTheme}>
          <Layout>
            <Component {...props} />
            <ToastContainer theme="colored" />
          </Layout>
        </ThemeProvider>
      </AppContextProvider>
    )
  }
}
