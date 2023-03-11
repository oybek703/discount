import React from 'react'
import { withLayout } from '@/layout'
import { Grid, Typography } from '@mui/material'
import PageHead from '@/components/PageHead'

const NotFound = () => {
  return (
    <>
      <PageHead title="Page not found!" />
      <Grid
        sx={{
          display: 'grid',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography color="lightgrey" variant="h3">
          Page not found - 404!
        </Typography>
      </Grid>
    </>
  )
}

export default withLayout(NotFound)
