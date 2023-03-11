import React, { PropsWithChildren, useRef, useState } from 'react'
import {
  AppBar,
  Button,
  ClickAwayListener,
  Drawer,
  Grid,
  IconButton,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  useMediaQuery,
  useTheme,
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
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'

const LogoLink = ({ onClick }: { onClick?: () => void }) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Button
      onClick={onClick}
      sx={{ border: '2px dashed white', borderRadius: '5px' }}
      component={Link}
      href={routeNames.main}
    >
      <Image
        src={'/coupon.png'}
        alt={'Logo'}
        width={60}
        height={downSm ? 25 : 30}
      />
    </Button>
  )
}

interface ILinkBtnProps {
  title: string
  route: routeNames
  onClick?: () => void
}

const LinkBtn = ({ title, route, onClick }: ILinkBtnProps) => {
  const { pathname } = useRouter()
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: 'none',
        color: theme => theme.palette.common.white
      }}
      size="small"
      color={pathname === route ? 'secondary' : 'inherit'}
      variant={pathname === route ? 'contained' : 'outlined'}
      component={Link}
      href={route}
    >
      {title}
    </Button>
  )
}

export const HeaderBase = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'grid',
          alignContent: 'center',
          gap: '10px',
          gridTemplateColumns: `${downSm ? '0' : '70px'} auto 1fr`
        }}
      >
        {downSm ? <span /> : <LogoLink />}
        {children}
      </Toolbar>
    </AppBar>
  )
}

const Header = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false)
  const theme = useTheme()
  const downSm = useMediaQuery(theme.breakpoints.down('sm'))
  const anchorRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const { pathname, reload } = useRouter()
  const { destroyToken, user } = useAppContext()
  const handleLogout = () => {
    destroyToken()
    reload()
  }
  const handleClick = () => {
    setAnchorEl(() => anchorRef.current && anchorRef.current)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  let username
  if (typeof window !== 'undefined') {
    username = localStorage.getItem('_username')
  }
  const handleDrawerClose = () => setDrawerState(!drawerState)
  return (
    <HeaderBase>
      {downSm ? (
        <IconButton
          onClick={handleDrawerClose}
          sx={{ paddingLeft: 0, marginLeft: '-10px' }}
        >
          <MenuIcon
            fontSize="large"
            sx={{ color: theme => theme.palette.common.white }}
          />
        </IconButton>
      ) : (
        <Grid
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            columnGap: '10px',
            marginLeft: '40px'
          }}
        >
          <LinkBtn route={routeNames.main} title="Главная" />
          <LinkBtn route={routeNames.about} title="О нас" />
          <LinkBtn route={routeNames.contacts} title="Контакты" />
        </Grid>
      )}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
            padding: '0 20px'
          }
        }}
        sx={{ minWidth: '200px', maxWidth: '400px' }}
        open={drawerState}
        variant="temporary"
        transitionDuration={{ appear: 100, enter: 100, exit: 300 }}
        translate="yes"
        onClose={handleDrawerClose}
      >
        <Grid sx={{ margin: '20px 40px' }}>
          <LogoLink onClick={handleDrawerClose} />
        </Grid>
        <Grid sx={{ display: 'grid', rowGap: '20px' }}>
          <LinkBtn route={routeNames.main} title="Главная" />
          <LinkBtn route={routeNames.about} title="О нас" />
          <LinkBtn route={routeNames.contacts} title="Контакты" />
        </Grid>
      </Drawer>
      <Grid sx={{ textAlign: 'right' }}>
        <Button
          onMouseLeave={handleClose}
          ref={anchorRef}
          onMouseOver={handleClick}
          onClick={handleClick}
          startIcon={<AccountCircleIcon />}
          sx={{
            textTransform: 'none'
          }}
          size="small"
          color="inherit"
          variant="outlined"
        >
          {username || 'Аккаунт'}
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
                        Профиль
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
                        Выйти
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
                        onClick={handleClose}
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
                        Войти
                      </Button>
                      <Button
                        component={Link}
                        onClick={handleClose}
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
                        Регистрация
                      </Button>
                    </MenuList>
                  )}
                </ClickAwayListener>
              </Paper>
            </Zoom>
          )}
        </Popper>
      </Grid>
    </HeaderBase>
  )
}

export default Header
