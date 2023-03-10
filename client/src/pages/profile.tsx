import React from 'react'
import { Grid, Typography } from '@mui/material'
import { withLayout } from '@/layout'
import PageHead from '@/components/PageHead'
import { useAppContext } from '@/context/app.context'

const Profile = () => {
  const { user } = useAppContext()
  console.log(user)
  return (
    <>
      <PageHead title="Profile" />
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Profile settings
        </Typography>
      </Grid>
    </>
  )
}

export default withLayout(Profile)
