import React, { FunctionComponent, PropsWithChildren } from 'react'
import Footer from '@/layout/Footer'
import { discountTheme } from '@/theme'
import { ThemeProvider } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AppContextProvider } from '@/context/app.context'
import Header from '@/layout/Header'

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
