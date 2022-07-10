import React from 'react'
import { Avatar, Input } from "antd";
import { UilArrowRight,UilShoppingBag,UilHeart,UilEditAlt,UilLock,UilBell ,UilSignout} from '@iconscout/react-unicons'
import Link from 'next/link';

const User = () => {
  const data =[{
    icon:<UilShoppingBag/>,
    title:"My order"
  },
  {
    icon:<UilHeart  />,
    title:"My Wishlist"
  },
  {
    icon:<UilLock/>,
    title:"Change password"
  },
  {
    icon:<UilBell/>,
    title:"Notification settings"
  },
  {
    icon:<UilSignout/>,
    title:"Log out"
  },

]
  return (
    <div className='bg-[#fff] p-[1.5rem] rounded-md drop-shadow-2xl'>
      <div className='flex flex-col gap-[0.5rem]'>
      <Avatar className="cursor-pointer"  size={40}>CY</Avatar>
      <div className=''>
        <Link href='/myprofile'>
        <div className='cursor-pointer'>
        <p className='m-0 text-[#1B1918] text-[1rem]'>Leslie Alexander</p>
        <div className='flex'>
        <p className='m-0 text-[#6F6F6F]'>View my profile</p>
        <UilArrowRight/>
        </div>
        </div>
        </Link>
        
        
        <div className='flex flex-col gap-[1rem] mt-[1rem]'>
          {
            data.map((item,key)=>{
              return(
                <div key={key} className="flex items-center gap-[0.6rem] cursor-pointer">
                  {item.icon}<p className='m-0 text-[0.9rem] text-[#6F6F6F]'>{item.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default User