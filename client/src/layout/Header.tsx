import React, { Fragment, useCallback, useRef, useState } from 'react'
import {
  AppBar,
  Button,
  ClickAwayListener,
  Grid,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
  Zoom
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { useAppContext } from '@/context/app.context'
import { routeNames } from '@/common/route-names'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const { pathname, reload } = useRouter()
  const { destroyToken, user } = useAppContext()
  const handleLogout = () => {
    destroyToken()
    reload()
  }

  const handleClick = useCallback(() => {
    setAnchorEl(() => anchorRef.current && anchorRef.current)
    setOpen(true)
  }, [anchorRef])
  const handleClose = () => setOpen(false)
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
          <Fragment>
            <Button
              onMouseLeave={handleClose}
              ref={anchorRef}
              onMouseOver={handleClick}
              onClick={handleClick}
              startIcon={<AccountCircleIcon />}
              sx={{
                textTransform: 'none',
                color: 'white',
                marginRight: '10px'
              }}
              size="small"
              color="inherit"
              variant="outlined"
            >
              {user?.username || 'Account'}
            </Button>
            <Popper
              anchorEl={anchorEl}
              style={{ zIndex: 10000 }}
              placement="bottom"
              open={open}
              role={undefined}
              transition
            >
              {({ TransitionProps }) => (
                <Zoom
                  timeout={250}
                  {...TransitionProps}
                  style={{ transformOrigin: 'center top' }}
                >
                  <Paper
                    variant="elevation"
                    sx={{
                      padding: '10px',
                      marginTop: '5px'
                    }}
                    elevation={8}
                    onMouseLeave={handleClose}
                  >
                    <ClickAwayListener onClickAway={handleClose}>
                      {user ? (
                        <MenuList
                          onMouseEnter={handleClick}
                          autoFocusItem={open}
                          sx={{ display: 'grid', rowGap: '10px' }}
                        >
                          <Button
                            href={routeNames.profile}
                            component={Link}
                            onClick={handleClose}
                            startIcon={<PersonOutlineIcon />}
                            sx={{
                              textTransform: 'none'
                            }}
                            size="small"
                            color="success"
                            variant={
                              pathname === routeNames.profile
                                ? 'contained'
                                : 'outlined'
                            }
                          >
                            Profile
                          </Button>
                          <Button
                            onClick={handleLogout}
                            startIcon={<LogoutIcon />}
                            sx={{
                              textTransform: 'none'
                            }}
                            size="small"
                            color="error"
                            variant="outlined"
                          >
                            Logout
                          </Button>
                        </MenuList>
                      ) : (
                        <MenuList
                          onMouseEnter={handleClick}
                          autoFocusItem={open}
                          sx={{ display: 'grid', rowGap: '10px' }}
                        >
                          <Button
                            component={Link}
                            startIcon={<LoginIcon />}
                            href={routeNames.signIn}
                            sx={{
                              textTransform: 'none'
                            }}
                            size="small"
                            color="success"
                            variant={
                              pathname === routeNames.signIn
                                ? 'contained'
                                : 'outlined'
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
                            color="warning"
                            variant={
                              pathname === routeNames.signUp
                                ? 'contained'
                                : 'outlined'
                            }
                          >
                            Sign up
                          </Button>
                        </MenuList>
                      )}
                    </ClickAwayListener>
                  </Paper>
                </Zoom>
              )}
            </Popper>
          </Fragment>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
