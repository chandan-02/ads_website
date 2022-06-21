import React from "react";
import { useState } from "react";
import { Drawer, Button, Group } from "@mantine/core";
import Link from "next/link";
import {
  UilAward,
  UilLaptop,
  UilLocationPoint,
  UilUserSquare,
  UilHeart,
  UilShoppingCartAlt,
} from "@iconscout/react-unicons";

const Drawers = ({ opened, setOpened }) => {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // title="logo"
        padding="xl"
        size="lg"
        className="glass"
        // style={("backdropFilter:blur(45px)")}
        withOverlay={false}
      >
        <div className="flex flex-col gap-2 md:gap-6 md:mb-16">
          <h3 className="text-base">links</h3>
          <div className="flex flex-col gap-8 text-xl md:gap-12">
            <Link href="/shopbybrand">
              <a className="flex items-center gap-2">
                <UilAward />
                Shop By Brand
              </a>
            </Link>
            <Link href="/laptops">
              <a className="flex items-center gap-2">
                <UilLaptop />
                Laptops
              </a>
            </Link>
            <Link href="/contactus">
              <a className="flex items-center gap-2">
                <UilLocationPoint />
                Contact & Visit Us
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-6">
          <h3>User</h3>
          <div className="flex flex-col gap-8 text-xl md:gap-12">
            <Link href="/myaccount">
              <a className="flex items-center gap-2">
                <UilUserSquare />
                My Account
              </a>
            </Link>
            <Link href="/myorder">
              <a className="flex items-center gap-2">
                <UilHeart />
                My Orders
              </a>
            </Link>
            <Link href="/wishlist">
              <a className="flex items-center gap-2">
                <UilShoppingCartAlt />
                Wishlist
              </a>
            </Link>
          </div>
        </div>
      </Drawer>
      <style>{`
          .glass {
            background-color: rgb(255,255,255,0.65);
          }
        `}</style>
    </>
  );
};

export default Drawers;
