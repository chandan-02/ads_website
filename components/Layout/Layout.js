import React, { Children, useState } from 'react';
import Navbars from './Navbars';
import Footers from './Footers';
import { Layout, Drawer } from 'antd';
import Drawers from "../Layout/Drawer";
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content, Sider } = Layout;

export default function LayoutMain({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <Layout>
      <Header style={{ background: '#fff' }}><Navbars setCollapsed={setCollapsed} collapsed={collapsed} /></Header>
      <Layout>
        <Drawer
          size="default"
          title="aDS"
          placement={"left"}
          closable={false}
          onClose={() => setCollapsed(false)}
          visible={collapsed}
          key={"left"}
          style={{
            backgroundColor:'rgba( 255, 255, 255, 0.25 )',
            backdropFilter:'blur( 4px )'
          }}
        ></Drawer>
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

  );
}
