import SearchIcon from '@mui/icons-material/Search'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'

const SearchComponent = () => {
  return (
    <FormControl sx={{ marginY: '20px' }} fullWidth variant="outlined">
      <OutlinedInput
        placeholder="Поиск..."
        id="outlined-adornment-amount"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchComponent
