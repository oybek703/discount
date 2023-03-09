import React, { FunctionComponent, PropsWithChildren } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import { discountTheme } from '@/theme'
import { ThemeProvider } from '@mui/material'

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
        </Layout>
      </ThemeProvider>
    )
  }
}
