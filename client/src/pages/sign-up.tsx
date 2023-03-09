import React from 'react'
import { withLayout } from '@/layout'
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import Head from 'next/head'

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign Up
        </Typography>
        <FormControl
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          <TextField required size="small" label="Username" />
        </FormControl>
        <FormControl
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          <TextField required size="small" label="First name" />
        </FormControl>
        <FormControl
          sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
        >
          <TextField size="small" label="Last name" />
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

export default withLayout(SignUp)
