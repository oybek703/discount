import React, { FunctionComponent, PropsWithChildren } from 'react'
import Footer from '@/layout/Footer'
import { discountTheme } from '@/theme'
import { ThemeProvider } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/layout/Header'), { ssr: false })

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
  return function (props: T) {
    return (
      <ThemeProvider theme={discountTheme}>
        <Layout>
          <Component {...props} />
          <ToastContainer theme="colored" />
        </Layout>
      </ThemeProvider>
    )
  }
}
