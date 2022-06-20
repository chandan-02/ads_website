import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

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
        <div><h2>Shop By Brand</h2></div>
        <div><h2>Laptops</h2></div>
        <div><h2>Contact & Visit Us</h2></div>
        <h3>User</h3>
        <div><h2>My Account</h2></div>
        <div><h2>My Orders</h2></div>
        <div><h2>Wishlist</h2></div>
      </Drawer>

     
    </>
  );
}

export default Drawers;
