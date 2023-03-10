import React, { FormEvent, useState } from 'react'
import { withLayout } from '@/layout'
import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import axiosInstance from '@/utils/axios.instance'
import { useAppContext } from '@/context/app.context'
import { routeNames } from '@/common/route-names'
import SubmitBtn from '@/components/SubmitBtn'
import { useFormValues } from '@/hooks/useFormValues'
import PageHead from '@/components/PageHead'
import SmallFormControl from '@/components/SmallFormControl'
import { showError } from '@/utils/error'

interface ISignInFormValues {
  username: string
  password: string
}

const formInitialState: ISignInFormValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const { setToken } = useAppContext()
  const { push } = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const { formValues, handleChange } =
    useFormValues<ISignInFormValues>(formInitialState)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      setLoading(true)
      const { data } = await axiosInstance.post('/api/auth/signIn', formValues)
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
      <PageHead title="Sign In" />
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <SmallFormControl
            disabled={loading}
            name="username"
            label="Username"
            handleChange={handleChange}
            required={true}
            value={formValues.username}
          />
          <SmallFormControl
            disabled={loading}
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

export default withLayout(SignIn)
