import React from 'react'
import { Input } from 'antd';

const ProductRightSection = () => {
  return (
    <div>
        <div className='flex flex-col gap-6'>
            <span className='m-0 text-[1.313rem] font-semibold leading-5	'>AMD</span>
            <span className='m-0 text-[2.5rem] font-semibold leading-5'>Ryzen 9 5900x</span>
            <div className='flex items-center'>
                <p className='m-0'>star</p>
                <p className='text-[1.1rem] m-0'>(19,230)</p>
            </div>

            <div className="flex gap-[0.7rem] md:gap-3 align-baseline items-baseline">
              <del className="text-red-600 text-[0.8rem]  md:text-[1.563rem] leading-5">
                19000
              </del>
              <span className="md:text-[2rem] text-[1.25rem] md:font-bold leading-5">
                19000
              </span>
              <span className='text-[0.9rem] leading-5'>( incl. GST )</span>
            </div>

            <div className='flex gap-[2rem]'>
                <div className='flex gap-1 items-center'>
                <span>Quantity:</span>
                <Input status="error" style={{width:35,borderRadius:"5px",height:25}}/>
                </div>
                
                <div>
                <Input status="error"  allowClear={true} style={{width:150,borderRadius:"5px",height:35}}/>
                </div>
            </div>

            </div>
            <style>
                {`
                 .success:focus {
                    border:2px solid red;
                   }
                `}
            </style>
    </div>
  )
}

export default ProductRightSection