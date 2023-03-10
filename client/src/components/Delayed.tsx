import React, { PropsWithChildren, useEffect, useState } from 'react'

interface IDelayedProps {
  waitBeforeShow?: number
}

const Delayed = ({
  waitBeforeShow = 0,
  children
}: PropsWithChildren<IDelayedProps>) => {
  const [show, setShow] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(function () {
      setShow(true)
    }, waitBeforeShow)
  }, [waitBeforeShow])
  return <>{show ? children : null}</>
}

export default Delayed
