import React, { Children, useState } from 'react';
import Navbars from './Navbars';
import Footers from './Footers';
import { Layout, Drawer } from 'antd';
import Drawers from "../Layout/Drawer";
import {
  AppShell,
  useMantineTheme,
} from '@mantine/core';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content, Sider } = Layout;

export default function LayoutMain({children}) {
  const theme = useMantineTheme();
  return (
    // <AppShell
    //   // styles={{
    //   //   main: {
    //   //     background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    //   //   },
    //   // }}
    //   navbarOffsetBreakpoint="sm"
    //   asideOffsetBreakpoint="sm"
    //   fixed
     
    //   footer={
    //     <Footers/>
    //   }
    //   header={
    //     <Navbars/>
    //   }
    // >
    //   {children}
    // </AppShell>
  <Layout>
    <Header>
      <Navbars/>   {/*custom*/}
    </Header>
    <Layout>
      <Sider theme="light">
        <Drawers/> {/*custom*/}
      </Sider>
      <Layout>
        <Content>
          {children}
        </Content>
        <Footer>
          <Footers/>  {/*custom*/}
        </Footer>
      </Layout>
    </Layout>
  </Layout>
  );
}
