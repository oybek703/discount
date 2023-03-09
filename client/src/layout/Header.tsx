import React from 'react'
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import SearchComponent from '@/components/Search'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

export enum pageLinks {
  main = '/',
  signIn = '/sign-in',
  signUp = '/sign-up'
}

const Header = () => {
  const { pathname } = useRouter()
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: 'white',
            textDecoration: 'none'
          }}
          component={Link}
          href={pageLinks.main}
          variant="h6"
        >
          Discounts
        </Typography>
        <SearchComponent />
        <Grid>
          <Button
            component={Link}
            startIcon={<LoginIcon />}
            href={pageLinks.signIn}
            sx={{ textTransform: 'none', color: 'white', marginRight: '10px' }}
            size="small"
            color={pathname === pageLinks.signIn ? 'secondary' : 'inherit'}
            variant={pathname === pageLinks.signIn ? 'contained' : 'outlined'}
          >
            Sign in
          </Button>
          <Button
            component={Link}
            startIcon={<PersonAddAltIcon />}
            href={pageLinks.signUp}
            sx={{ textTransform: 'none' }}
            size="small"
            color={pathname === pageLinks.signUp ? 'warning' : 'inherit'}
            variant={pathname === pageLinks.signUp ? 'contained' : 'outlined'}
          >
            Sign up
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
