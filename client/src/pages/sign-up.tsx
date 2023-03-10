import React, { FormEvent, useState } from 'react'
import { withLayout } from '@/layout'
import { Grid, Typography } from '@mui/material'
import axiosInstance from '@/utils/axios.instance'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/app.context'
import { routeNames } from '@/common/route-names'
import SubmitBtn from '@/components/SubmitBtn'
import { useFormValues } from '@/hooks/useFormValues'
import PageHead from '@/components/PageHead'
import SmallFormControl from '@/components/SmallFormControl'
import { showError } from '../utils/error'

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
  const { setToken } = useAppContext()
  const { push } = useRouter()
  const { formValues, handleChange } =
    useFormValues<ISignUpFormValues>(formInitialState)

  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const { data } = await axiosInstance.post('/api/auth/signUp', formValues)
      const { accessToken } = data
      setToken(accessToken)
      await push(routeNames.main)
      setLoading(false)
    } catch (e: unknown) {
      showError(e)
      setLoading(false)
    }
  }
  return (
    <>
      <PageHead title="Sign Up" />
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <SmallFormControl
            name="username"
            label="Username"
            handleChange={handleChange}
            required={true}
            value={formValues.username}
          />
          <SmallFormControl
            name="firstName"
            label="First name"
            handleChange={handleChange}
            required={true}
            value={formValues.firstName}
          />
          <SmallFormControl
            name="lastName"
            label="Last name"
            handleChange={handleChange}
            required={true}
            value={formValues.lastName}
          />
          <SmallFormControl
            name="password"
            label="Password"
            handleChange={handleChange}
            required={true}
            value={formValues.password}
            type="password"
          />
          <SubmitBtn loading={loading} />
        </form>
      </Grid>
    </>
  )
}

export default withLayout(SignUp)
