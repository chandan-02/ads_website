import React, { Children, useState } from 'react';
import { useRouter } from 'next/router'
import Navbars from './Navbars';
import Footers from './Footers';
import Image from 'next/image';
import { Layout, Drawer } from 'antd';
import Link from "next/link";
import {
  UilAward,
  UilLaptop,
  UilLocationPoint,
  UilUserSquare,
  UilHeart,
  UilShoppingCartAlt,
  UilTimes,
} from "@iconscout/react-unicons";
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content, Sider } = Layout;

export default function LayoutMain({ children }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Header style={{ background: '#fff',height: 'max-content' }} className="custom-padding"><Navbars collapsed={collapsed} setCollapsed={setCollapsed} /></Header>
      <Layout >
        <Drawer
          size="default"
          // title="aDS"
          placement={"left"}
          closable={false}
          onClose={() => setCollapsed(false)}
          visible={collapsed}
          className=""
        >
          <div className='pb-6 border-[#4d4d4d] border-b-[1px] flex items-center justify-between'>
            <img src="/assets/logo.webp" alt="logo" />
            <UilTimes onClick={() => setCollapsed(!collapsed)}/>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 mb-16 mt-6">
            <h3 className="text-base">Links</h3>
            <div className="flex flex-col gap-8 text-xl md:gap-12">
              <Link href="/shopbybrand">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/shopbybrand' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilAward />
                  Shop By Brand
                </a>
              </Link>
              <Link href="/laptops">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/laptops' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilLaptop />
                  Laptops
                </a>
              </Link>
              <Link href="/contactus">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/contactus' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilLocationPoint />
                  Contact & Visit Us
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-6">
            <h3>User</h3>
            <div className="flex flex-col gap-8 text-xl md:gap-12">
              <Link href="/myprofile">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/myprofile' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilUserSquare />
                  My Account
                </a>
              </Link>
              <Link href="/myorder">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/myorder' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilHeart />
                  My Orders
                </a>
              </Link>
              <Link href="/wishlist">
                <a className={`flex items-center gap-2 transition hover:text-[#EE2841] ${router.pathname === '/wishlist' ? 'text-[#EE2841]':'text-black'}`}>
                  <UilShoppingCartAlt />
                  Wishlist
                </a>
              </Link>
            </div>
          </div>
        </Drawer>
        <style>{`
          .ant-drawer-content {
            background-color: rgb(255,255,255,0.70);
            backdrop-filter: blur(35px);
          }
          .ant-drawer-mask {
            background: none;
          }
        `}</style>
        <Content style={{ background: '#fff' }}>{children}</Content>
        <Footer style={{padding: 0}}>
          <Footers/>
        </Footer>
      </Layout>
      <style>{`
        @media screen and (max-width: 767px) {
          .ant-layout-header {
            padding: 0 2rem;
          }
        }
      `}</style>
    </Layout>
  );
}
