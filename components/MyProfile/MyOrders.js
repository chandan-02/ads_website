import React from 'react'
const { Option } = Select;
const { Panel } = Collapse;
import { Select, Collapse,Input,Pagination } from "antd";
import {
    UilSearch,
    UilBars,
    UilShoppingCart,
    UilHeart,
    UilBell,
  } from "@iconscout/react-unicons";
import MyOrdersCard from './MyOrderCard';

const MyOrders = () => {
  return (
    <div>
        <div className='flex justify-between gap-16'>
        <div className="flex items-center sort border pl-3 rounded">
            <h1 className="m-0">Sort By:</h1>
            <Select
              style={{
                width: 160,
                color: "#000",
                borderRadius: 5
              }}
            >
              <Option value="popularity">Shipping / Active</Option>
              <Option value="lowtohigh">Delivered</Option>
              <Option value="hightolow">Cancelled</Option>
            </Select>
          </div>
          <div className="">
          <Input
            style={{ borderRadius: 5,height:45 }}
            placeholder="Search by order id"
            suffix={<UilSearch size="18" color="#6F6F6F" />}
          />
        </div>
        </div>
    <div>
        <MyOrdersCard/>
        <MyOrdersCard/>
        <MyOrdersCard/>
        <div className="flex justify-end mt-[2rem]">
          <Pagination defaultCurrent={1} total={30} />
        </div>
    </div>
        <style>{`
        .sort > .ant-select:not(.ant-select-customize-input) .ant-select-selector{
            border: none;
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
            border-color: none;
            box-shadow: none;
        }
        .collapse > .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box{
            padding: 0;
        }
        .collapse > .ant-collapse > .ant-collapse-item > .ant-collapse-header{
            padding: 0;
        }
        .checkbox > .ant-checkbox-wrapper + .ant-checkbox-wrapper{
            margin: 0;
        }
        @media screen and ( max-width: 767px ) {
          .checkbox > .ant-checkbox-wrapper{
            font-size: 0.7rem;
          }
          .checkbox > .ant-checkbox-wrapper + .ant-checkbox-wrapper{
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  )
}

export default MyOrders