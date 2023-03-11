import React from 'react'
import { Grid, Typography } from '@mui/material'
import { withLayout } from '@/layout'
import PageHead from '@/components/PageHead'

const Profile = () => {
  return (
    <>
      <PageHead title="Профиль" />
      <Grid alignContent="center" justifyContent="center">
        <Typography sx={{ marginTop: '60px' }} variant="h3" align="center">
          Настройки профиля
        </Typography>
      </Grid>
    </>
  )
}

export default withLayout(Profile)
