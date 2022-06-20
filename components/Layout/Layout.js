import React, { Children, useState } from 'react';
import Navbars from './Navbars';
import Footers from './Footers';
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

export default function Layout( {children}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      // styles={{
      //   main: {
      //     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      //   },
      // }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
     
      footer={
        <Footers/>
      }
      header={
        <Navbars/>
      }
    >
      {children}
    </AppShell>
  );
}