import React from 'react'
import { withLayout } from '@/layout'
import { Grid, Typography } from '@mui/material'
import PageHead from '@/components/PageHead'

const InternalServerError = () => {
  return (
    <>
      <PageHead title="Internal server error!" />
      <Grid
        sx={{
          display: 'grid',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography color="red" variant="h3">
          Internal server error - 500!
        </Typography>
      </Grid>
    </>
  )
}

export default withLayout(InternalServerError)
