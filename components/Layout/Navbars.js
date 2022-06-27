import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Drawers from "../Layout/Drawer";
import Categories from '../Homepage/Categories';
import { Avatar, Input } from 'antd';
import { UilSearch, UilBars, UilShoppingCart, UilHeart, UilBell } from "@iconscout/react-unicons";
import { Dropdown, Space } from 'antd';
import UseDimension from "../Head/UseDimension";


function Navbar({setCollapsed,collapsed}) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col justify-between py-4 gap-[1rem]">
      <div className="grid grid-cols-3 justify-center items-center">
        <img className="w-20" src="../assets/logo.webp"/>
        <Input
          style={{ width: 400, borderRadius: 5, height:35}}
          placeholder="Search Product ..."
          suffix={<UilSearch size="18" color="#6F6F6F" />}
          className="justify-self-center"
        />
        <div className="justify-self-end flex items-center gap-4">
          <UilBell size={30}/>
          <UilHeart size={30}/>
          <UilShoppingCart size={30}/>
          <Avatar size={40}>CY</Avatar>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div className="" opened={collapsed} onClick={() => setCollapsed(!collapsed)}>
          <UilBars  />
        </div>
        <div className="col-start-2 col-end-4 gap-[2.4rem] flex justify-center text-xl">
          <Link href="/homepage">
            <a className={`transition hover:text-[#EE2841] ${router.pathname === '/homepage' ? 'text-[#EE2841]':'text-black'}`}>
              Trending
            </a>
          </Link>
          <Dropdown placement="bottom" overlay={<Categories/>}>
            <a className={`transition hover:text-[#EE2841] hover:underline hover:underline-offset-2 text-black`} onClick={e => e.preventDefault()}>
              <Space>
                Categories
              </Space>
            </a>
          </Dropdown>
          <Link href="/buildpc">
            <a className={`transition hover:text-[#EE2841] ${router.pathname === '/buildpc' ? 'text-[#EE2841]':'text-black'}`}>
              Build PC
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
