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
import axiosInstance from '@/utils/axios.instance'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { routeNames } from '@/layout/Header'
import { setCookie } from 'nookies'

interface ISignUpFormValues {
  username: string
  firstName: string
  lastName: string
  password: string
}

const formInitialState: ISignUpFormValues = {
  username: '',
  firstName: '',
  lastName: '',
  password: ''
}

const SignUp = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [formValues, setFormValues] =
    useState<ISignUpFormValues>(formInitialState)
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormValues(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const { data } = await axiosInstance.post('/api/auth/signUp', formValues)
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
        <title>Sign up</title>
      </Head>
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              margin: '40px auto',
              display: 'block',
              textAlign: 'center',
              marginBottom: 0
            }}
          >
            <TextField
              value={formValues?.username}
              onChange={handleChange}
              required
              name="username"
              size="small"
              label="Username"
            />
          </FormControl>
          <FormControl
            sx={{
              margin: '40px auto',
              display: 'block',
              textAlign: 'center',
              marginTop: '20px'
            }}
          >
            <TextField
              value={formValues?.firstName}
              onChange={handleChange}
              name="firstName"
              required
              size="small"
              label="First name"
            />
          </FormControl>
          <FormControl
            sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
          >
            <TextField
              value={formValues?.lastName}
              onChange={handleChange}
              name="lastName"
              size="small"
              label="Last name"
            />
          </FormControl>
          <FormControl
            sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
          >
            <TextField
              value={formValues?.password}
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

export default withLayout(SignUp)
