import React, { ChangeEvent, FormEvent, useState } from 'react'
import { withLayout } from '@/layout'
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axiosInstance from '@/utils/axios.instance'
import { setCookie } from 'nookies'
import { routeNames } from '@/layout/Header'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface ISignInFormValues {
  username: string
  password: string
}

const formInitialState: ISignInFormValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [formValues, setFormValues] =
    useState<ISignInFormValues>(formInitialState)
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormValues(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const { data } = await axiosInstance.post('/api/auth/signIn', formValues)
      const { accessToken } = data
      setCookie(null, '_token', accessToken)
      setLoading(false)
      await push(routeNames.main)
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        let message = e.message
        if (e.response?.data) {
          message = e.response.data.message
        }
        toast.error(message)
      }
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
          >
            <TextField
              value={formValues.username}
              onChange={handleChange}
              name="username"
              color="secondary"
              required
              size="small"
              label="Username"
            />
          </FormControl>
          <FormControl
            sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
          >
            <TextField
              value={formValues.password}
              onChange={handleChange}
              name="password"
              required
              type="password"
              size="small"
              label="Password"
            />
          </FormControl>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
          >
            {loading ? <CircularProgress color="success" /> : 'Submit'}
          </Button>
        </form>
      </Grid>
    </>
  )
}

export default withLayout(SignIn)
