import React from 'react'
import CartPopCard from './CartPopCard'

const CartPop = () => {
  return (
    <div className='bg-[#FFFF] flex flex-col gap-2 h-[35rem]'>
        <p className='m-0'>Cart (3)</p>
        <CartPopCard/>
        <CartPopCard/>
    </div>
  )
}

export default CartPop