import { ChangeEvent, useState } from 'react'

export const useFormValues = <T>(formInitialState: T) => {
  const [formValues, setFormValues] = useState<T>(formInitialState)
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormValues(prevState => ({ ...prevState, [name]: value }))
  }
  return { formValues, handleChange }
}
