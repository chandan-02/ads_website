import React from 'react'
import ProductRightSection from '../../components/ProductBuyPage/ProductRightSection'
import ProductSlider from "../../components/ProductBuyPage/ProductSlider"


const index = () => {
    
  return (
    <div className="md:p-10 p-6">
        <div className='flex gap-[3.063rem]'>
        <ProductSlider/>
        <ProductRightSection/>
        </div>
    </div>
  )
}

export default index