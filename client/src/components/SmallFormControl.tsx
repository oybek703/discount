import React, { ChangeEventHandler, InputHTMLAttributes } from 'react'
import { FormControl, TextField } from '@mui/material'

interface ICustomFormControlProps {
  value?: unknown
  handleChange: ChangeEventHandler
  required?: boolean
  label: string
  name: string
  type?: InputHTMLAttributes<unknown>['type']
}

const SmallFormControl = ({
  value,
  handleChange,
  required,
  label,
  name,
  type = 'text'
}: ICustomFormControlProps) => {
  return (
    <FormControl
      sx={{ margin: '40px auto', display: 'block', textAlign: 'center' }}
    >
      <TextField
        size="small"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        required={required}
        label={label}
      />
    </FormControl>
  )
}

export default SmallFormControl
