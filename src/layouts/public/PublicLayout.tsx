import React from 'react';
import { Layout } from 'antd';
import { useOutlet } from 'react-router-dom';

import { PublicLayoutStyle } from './styled';

const { Content } = Layout;

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <PublicLayoutStyle>
      <Layout className="layout-body">
        <Content className="body-content">{outlet}</Content>
      </Layout>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
