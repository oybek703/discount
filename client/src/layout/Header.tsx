import React, { Fragment } from 'react'
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import SearchComponent from '@/components/Search'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import Person2Icon from '@mui/icons-material/Person2'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAppContext } from '@/context/app.context'
import { routeNames } from '@/common/route-names'

const Header = () => {
  const { pathname, reload } = useRouter()
  const { token, destroyToken } = useAppContext()
  const handleLogout = () => {
    destroyToken()
    reload()
  }

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
          href={routeNames.main}
          variant="h6"
        >
          Discounts
        </Typography>
        <Grid sx={{ display: 'flex' }}>
          <SearchComponent />
          {token ? (
            <Fragment>
              <Button
                component={Link}
                startIcon={<Person2Icon />}
                href={routeNames.account}
                sx={{
                  textTransform: 'none',
                  color: 'white',
                  marginRight: '10px'
                }}
                size="small"
                color={pathname === routeNames.account ? 'warning' : 'inherit'}
                variant={
                  pathname === routeNames.account ? 'contained' : 'outlined'
                }
              >
                Account
              </Button>
              <Button
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{
                  textTransform: 'none',
                  marginRight: '10px'
                }}
                size="small"
                color="error"
                variant="contained"
              >
                Exit
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                component={Link}
                startIcon={<LoginIcon />}
                href={routeNames.signIn}
                sx={{
                  textTransform: 'none',
                  color: 'white',
                  marginRight: '10px'
                }}
                size="small"
                color={pathname === routeNames.signIn ? 'warning' : 'inherit'}
                variant={
                  pathname === routeNames.signIn ? 'contained' : 'outlined'
                }
              >
                Sign in
              </Button>
              <Button
                component={Link}
                startIcon={<PersonAddAltIcon />}
                href={routeNames.signUp}
                sx={{ textTransform: 'none' }}
                size="small"
                color={pathname === routeNames.signUp ? 'warning' : 'inherit'}
                variant={
                  pathname === routeNames.signUp ? 'contained' : 'outlined'
                }
              >
                Sign up
              </Button>
            </Fragment>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
