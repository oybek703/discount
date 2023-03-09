import React, { PropsWithChildren } from 'react'
import Head from 'next/head'

const PageHead = ({
  title,
  children
}: PropsWithChildren<{ title: string }>) => {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  )
}

export default PageHead
