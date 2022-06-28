import React from 'react'
import ProductRightSection from '../../components/ProductBuyPage/ProductRightSection'
import ProductSlider from "../../components/ProductBuyPage/ProductSlider"
import ProductTabs from '../../components/ProductBuyPage/ProductTabs'


const index = () => {
    
  return (
    <div className="md:p-16 p-6">
        <div className='flex gap-[3.063rem]'>
        <ProductSlider/>
        <ProductRightSection/>
        </div>
        <ProductTabs/>
    </div>
  )
}

export default index