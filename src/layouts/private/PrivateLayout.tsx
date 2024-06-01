import React from 'react';
import { Layout, Tabs } from 'antd';
import { useLocation, useNavigate, useOutlet } from 'react-router-dom';

import HeaderCard from './header/HeaderCard';
import SiderCard from './sider/SiderCard';
import { ContactIcon, LabelIcon, OpportunitiesIcon, TaskIcon } from 'src/assets/icon';
import { ROUTERS } from 'src/constants';
import { PrivateLayoutStyle } from './styled';

const { Content } = Layout;

const PrivateLayout: React.FC = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    {
      label: (
        <span>
          <ContactIcon isActive={pathname === ROUTERS.CONTACTS.PATH} />
          {ROUTERS.CONTACTS.LABEL}
        </span>
      ),
      key: ROUTERS.CONTACTS.PATH,
      children: <React.Fragment />,
    },
    {
      label: (
        <span>
          <LabelIcon isActive={pathname === ROUTERS.ETIQUETTES.PATH} />
          {ROUTERS.ETIQUETTES.LABEL}
        </span>
      ),
      key: ROUTERS.ETIQUETTES.PATH,
      children: <React.Fragment />,
    },
    {
      label: (
        <span>
          <OpportunitiesIcon isActive={pathname === ROUTERS.OPPORTUNITES.PATH} />
          {ROUTERS.OPPORTUNITES.LABEL}
        </span>
      ),
      key: ROUTERS.OPPORTUNITES.PATH,
      children: <React.Fragment />,
    },
    {
      label: (
        <span>
          <TaskIcon isActive={pathname === ROUTERS.TACHES.PATH} />
          {ROUTERS.TACHES.LABEL}
        </span>
      ),
      key: ROUTERS.TACHES.PATH,
      children: <React.Fragment />,
    },
  ];

  return (
    <PrivateLayoutStyle>
      <Layout className="layout-body">
        <SiderCard />

        <HeaderCard />

        <Content className="body-content">
          <Tabs defaultActiveKey={'/contacts'} activeKey={pathname} items={items} onChange={path => navigate(path)} />

          {outlet}
        </Content>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PrivateLayout;
