import React from 'react'
import NewLaunches from './NewLaunches'

const NewLaunchesCompo = () => {
  return (
    <div className='grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-4'>
        <NewLaunches/>
        <NewLaunches/>
    </div>
  )
}

export default NewLaunchesCompo