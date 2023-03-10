import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const showError = (e: unknown, noToast = false) => {
  console.error(e)
  if (e instanceof AxiosError) {
    let message = e.message
    if (e.response?.data) {
      message = e.response.data.message
    }
    if (!noToast) toast.error(message, { position: 'bottom-right' })
  }
}
