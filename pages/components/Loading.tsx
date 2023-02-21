import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col w-full items-center'>
      <progress className="progress w-56"></progress>
    </div>
  )
}

export default Loading