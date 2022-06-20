import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import Link from 'next/link'

function Drawers({opened,setOpened}) {

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="logo"
        padding="xl"
        size="xl"
        className='backdrop-blur-2xl'
      >
        <h3>links</h3>
        <div className='flex flex-col'>
        <Link href="/shopbybrand"><a>Shop By Brand</a></Link>
        <Link href="/laptops"><a>Laptops</a></Link>
        <Link href="/contactus"><a>Contact & Visit Us</a></Link>
        </div>
       
        <h3>User</h3>
        <Link href="/myaccount"><a>My Account</a></Link>
        <Link href="/myorder"><a>My Orders</a></Link>
        <Link href="/wishlist"><a>Wishlist</a></Link>
      </Drawer>

     
    </>
  );
}

export default Drawers;
