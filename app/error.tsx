'use client' //client component so we can use onClick
import React from 'react'

interface Props {
    error: Error
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <>
    <div>
      An unexpected error has occurred.
    </div>
    <button className='btn' onClick={() => reset()}>RETRY</button>
    </>
  )
}

export default ErrorPage
