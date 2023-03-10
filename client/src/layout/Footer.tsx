import { Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const Footer = () => {
  return (
    <Grid component="footer" sx={{ p: 1, backgroundColor: grey['300'] }}>
      <Typography align="center">
        &copy; 2023 TopAksiya.uz - Акции, скидки, каталоги магазинов
        Узбекистана. Все права защищены.
      </Typography>
    </Grid>
  )
}

export default Footer
