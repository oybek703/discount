import React from 'react'
import { withLayout } from '@/layout'
import { Typography } from '@mui/material'
import PageHead from '@/components/PageHead'

const About = () => {
  return (
    <>
      <PageHead title="About" />
      <Typography variant="h3">About Page</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        cupiditate dignissimos id maxime! Blanditiis, cumque, nam. Accusamus ad
        alias amet consequatur consequuntur debitis dolore doloremque eum ipsum
        laudantium magnam minima mollitia natus nihil, nulla numquam officia
        optio sunt tempora tempore velit voluptate voluptatem, voluptatum.
        Adipisci dolor esse est maxime praesentium.
      </Typography>
    </>
  )
}

export default withLayout(About)
