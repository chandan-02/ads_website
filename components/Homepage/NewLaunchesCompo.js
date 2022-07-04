import React, { useEffect, useState } from "react";
import NewLaunches from './NewLaunches'

const NewLaunchesCompo = () => {

  return (
    <div className='grid md:grid-cols-2 md:gap-[1.5rem] grid-cols-1 gap-4 2xl:gap-[4rem]'>
      <NewLaunches/>
      <NewLaunches/>
    </div>
  )
}

export default NewLaunchesCompo