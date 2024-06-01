import React from 'react';
import { Layout } from 'antd';
import { useOutlet } from 'react-router-dom';

import { PrivateLayoutStyle } from './styled';
import HeaderCard from './header/HeaderCard';
import SiderCard from './sider/SiderCard';
const { Content } = Layout;

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PrivateLayoutStyle>
      <Layout className="layout-body">
        <SiderCard />

        <HeaderCard />

        <Content className="body-content">{outlet}</Content>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PrivateLayout;
