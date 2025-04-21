import { Layout, Menu } from 'antd';

import {Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const items =[
  {
    key: 1,
    label:'Dashboard'
  },
  {
    key: 2,
    label:'Users'
  },
  {
    key: 3,
    label:'Students'
  },
]

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: 'white',

            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Phum-management©{new Date().getFullYear()} Created by shahin afridi
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;