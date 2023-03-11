import React from 'react'
import { Button, CircularProgress } from '@mui/material'

interface ISubmitBtnProps {
  loading: boolean
}

const SubmitBtn = ({ loading }: ISubmitBtnProps) => {
  return (
    <>
      <Button
        disabled={loading}
        type="submit"
        variant="contained"
        endIcon={loading && <CircularProgress size={15} color="secondary" />}
        sx={{ margin: '40px auto', display: 'flex' }}
      >
        Отправить
      </Button>
    </>
  )
}

export default SubmitBtn
