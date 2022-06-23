import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Drawers from "../Layout/Drawer";
import Categories from '../Homepage/Categories';
import { Avatar, Input } from 'antd';
import { UilSearch,UilBars } from "@iconscout/react-unicons";
import { Dropdown, Space } from 'antd';


function Navbar({setCollapsed,collapsed}) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col justify-between py-4 md:gap-[1rem]">
      <div className="flex justify-between items-center">
        <img className="w-14" src="../assets/logo.webp" />
        <Input
          style={{ width: 400, borderRadius: 5 }}
          placeholder="Search Product ..."
          suffix={<UilSearch size="18" color="#6F6F6F" />}
        />
        <Avatar alt="it's me" size={40}>CY</Avatar>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div className="">
          <UilBars opened={collapsed} onClick={() => setCollapsed(!collapsed)} />
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
