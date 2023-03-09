import React from 'react'
import { Grid, Typography } from '@mui/material'
import Head from 'next/head'
import { withLayout } from '@/layout'

const Account = () => {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Profile settings
        </Typography>
      </Grid>
    </>
  )
}

export default withLayout(Account)
