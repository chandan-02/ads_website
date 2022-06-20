import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Drawers({opened,setOpened}) {

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
      </Drawer>

     
    </>
  );
}

export default Drawers