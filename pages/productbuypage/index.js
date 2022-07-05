import React from 'react'
import ProductRightSection from '../../components/ProductBuyPage/ProductRightSection'
import ProductSlider from "../../components/ProductBuyPage/ProductSlider"
import ProductTabs from '../../components/ProductBuyPage/ProductTabs'

const Index = () => {
  
  return (
    <div className="md:p-16 p-6">
        <div className='md:flex md:gap-[3.063rem] flex flex-col gap-[1rem] md:flex-row'>
        <ProductSlider/>
        <ProductRightSection/>
        </div>
        <ProductTabs/>
    </div>
  )
}

export default Index;
