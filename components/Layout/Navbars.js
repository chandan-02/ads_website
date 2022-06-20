import React, { useState } from 'react'
import { TextInput, Loader} from '@mantine/core';
import  Drawers  from '../Layout/Drawer';


function Navbar() {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Drawers 
      styles={{   drawer: { color: 'red' } }}
       opened={opened} 
       setOpened={setOpened} />
      <div className="flex justify-between items-center">
      <h1 onClick={()=>setOpened(true)}>logo</h1>
      <TextInput 
       styles={{ input: { width: '15rem'} }}
       placeholder="Search Product ..." 
       rightSection={<Loader size="xs" />}/>
      <h1>icon</h1>
      </div>
      <div className="flex items-center 	">
        <h1>....</h1>
        <div className="flex gap-3 justify-center">
        <h1>Trending</h1>
        <h1>Categories</h1>
        </div>
        
    </div>
      
    </div>
  )
}

export default Navbar