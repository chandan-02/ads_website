import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Categories from "../Homepage/Categories";
import CartPop from "../Homepage/CartPop";
import { Avatar, Input } from "antd";
import {
  UilSearch,
  UilBars,
  UilShoppingCart,
  UilHeart,
  UilBell,
} from "@iconscout/react-unicons";
import { Dropdown, Space } from "antd";
import UseDimension from "../Head/UseDimension";
import { SearchPop } from "../Homepage/SearchPop";

function Navbar({ setCollapsed, collapsed }) {
  const router = useRouter();
  const [width, height] = UseDimension();

  return (
    <div>
      {width <= 767 ? (
        <div className="flex flex-col justify-between py-4 gap-[1rem]">
          <div className="grid grid-cols-2 justify-center items-center">
            <img className="w-20" src="../assets/logo.webp" alt="logo" />
            <div className="justify-self-end flex items-center gap-4">
              <UilBell size={30} />
              <UilHeart size={30} />
              <UilShoppingCart size={30} />
              <Avatar size={40}>CY</Avatar>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="">
              <UilBars
                opened={collapsed}
                onClick={() => setCollapsed(!collapsed)}
              />
            </div>

            <Input
              style={{ borderRadius: 5, height: 35 }}
              placeholder="Search Product ..."
              suffix={<UilSearch size="18" color="#6F6F6F" />}
              className="justify-self-center col-span-2"
            />
          </div>
          <div className="col-start-2 col-end-4 gap-[2rem] flex justify-center text-xl">
            <Link href="/">
              <a
                className={`transition hover:text-[#EE2841] ${
                  router.pathname === "/" ? "text-[#EE2841]" : "text-black"
                }`}
              >
                Trending
              </a>
            </Link>
            <Dropdown placement="bottom" overlay={<Categories />}>
              <a
                className={`transition hover:text-[#EE2841] hover:underline hover:underline-offset-2 text-black`}
                onClick={(e) => e.preventDefault()}
              >
                <Space>Categories</Space>
              </a>
            </Dropdown>
            <Link href="/buildpc">
              <a
                className={`transition hover:text-[#EE2841] ${
                  router.pathname === "/buildpc"
                    ? "text-[#EE2841]"
                    : "text-black"
                }`}
              >
                Build PC
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between py-4 gap-[1rem]">
          <div className="grid md:grid-cols-6 lg:grid-cols-3 justify-center items-center">
            <img className="w-20" src="../assets/logo.webp" alt="logo" />
            <div>
              <Dropdown placement="bottom" overlay={<SearchPop />}>
                {/* <a
                  className={`transition hover:text-[#EE2841] hover:underline hover:underline-offset-2 text-black`}
                  onClick={(e) => e.preventDefault()}
                >
                  
                </a> */}
                <Input
                  style={{ borderRadius: 5, height: 35 }}
                  placeholder="Search Product ..."
                  suffix={<UilSearch size="18" color="#6F6F6F" />}
                  className="justify-self-center w-full col-span-2 col-start-3 lg:col-start-auto lg:col-span-1"
                />
              </Dropdown>
            </div>
            <div className="justify-self-end flex items-center gap-4 col-start-6 lg:col-start-auto">
              <UilBell size={30} />
              <UilHeart size={30} />
              <Dropdown placement="bottom" overlay={<CartPop/>}>
              <UilShoppingCart size={30} />
              </Dropdown>
              <Avatar size={40}>CY</Avatar>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <div
              className=""
              opened={collapsed}
              onClick={() => setCollapsed(!collapsed)}
            >
              <UilBars />
            </div>
            <div className="col-start-2 col-end-4 gap-[2.4rem] flex justify-center text-xl">
              <Link href="/">
                <a
                  className={`transition hover:text-[#EE2841] ${
                    router.pathname === "/" ? "text-[#EE2841]" : "text-black"
                  }`}
                >
                  Trending
                </a>
              </Link>
              <Dropdown placement="bottom" overlay={<Categories />}>
                <a
                  className={`transition hover:text-[#EE2841] hover:underline hover:underline-offset-2 text-black`}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>Categories</Space>
                </a>
              </Dropdown>
              <Link href="/buildpc">
                <a
                  className={`transition hover:text-[#EE2841] ${
                    router.pathname === "/buildpc"
                      ? "text-[#EE2841]"
                      : "text-black"
                  }`}
                >
                  Build PC
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
        //   .ant-input{
        //     font-size: 0.5rem;
        //     padding: 1rem 1.5rem;
        //     border-radius: 0.625rem;
        // }
          }
          `}
      </style>
    </div>
  );
}

export default Navbar;
