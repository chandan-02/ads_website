import React from "react";
import {
  UilInstagram,
  UilLocationPoint,
  UilEnvelope,
  UilPhoneVolume,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="bg-neutral-900">
      <div className="p-6 text-white flex flex-col gap-6 md:flex md:flex-row  md:justify-around md:py-20">
        <div className="text-xl md:text-2xl ">
          <p>Connect with us</p>
          <div className="mt-2 md:mt-8">
            <p className="text-base flex gap-3 items-center">
              {" "}
              <UilInstagram size="30" />
              ads_store_in
            </p>
          </div>
        </div>

        <div className="text-xl md:text-2xl ">
          <p>Important Links</p>
          <div className="mt-2 md:mt-8">
            <div className="flex flex-col gap-3">
              <p className=" text-base">Trending</p>
              <p className=" text-base">Shop By Brand</p>
              <p className=" text-base">Shop By Categories</p>
              <p className=" text-base">Build Pc</p>
            </div>
          </div>
        </div>

        <div className="text-xl md:text-2xl ">
          <p>Policy</p>
          <div className="mt-2 md:mt-8">
            <div className="flex flex-col gap-3">
              <p className=" text-base">Privacy Policy</p>
              <p className=" text-base">Refund Policy</p>
              <p className=" text-base">Shipping Policy</p>
              <p className=" text-base">Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className="text-xl md:text-2xl ">
          <p>Contact Us</p>
          <div className="mt-2 md:mt-8">
            <div className="flex flex-col gap-3">
              <p className=" text-base flex gap-3 items-center">
                <UilLocationPoint size="30" />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
              <p className="text-base flex gap-3 items-center">
                <UilEnvelope size="30" />
                example@mail.com
              </p>
              <p className="text-base flex gap-3 items-center">
                <UilPhoneVolume size="30" />
                +91 99999 00000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-700 p-1"></div>
      <div className="text-white  text-sm flex flex-col justify-center items-center	 ">
        <p className="my-6">Copyright © 2022 ADS. All rights reserved.</p>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
