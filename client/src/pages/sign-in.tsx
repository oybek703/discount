import React from 'react'
import { withLayout } from '@/layout'
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import Head from 'next/head'

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign In
        </Typography>
        <FormControl
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          <TextField color="secondary" required size="small" label="Username" />
        </FormControl>
        <FormControl
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          <TextField required type="password" size="small" label="Password" />
        </FormControl>
        <Button
          variant="contained"
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          Submit
        </Button>
      </Grid>
    </>
  )
}

export default withLayout(SignIn)
