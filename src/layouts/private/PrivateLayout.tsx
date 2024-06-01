import React from 'react';
import { Avatar, Dropdown, Layout, MenuProps, Typography } from 'antd';
import { useNavigate, useOutlet } from 'react-router-dom';

import { PrivateLayoutStyle } from './styled';
import { LogoutOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'src/stores';
import { logoutAction } from 'src/stores/screens/publicScreens/auth/auth.action';
import { ROUTERS } from 'src/constants/routers';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const PrivateLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const outlet = useOutlet();
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: <Text>Logout</Text>,
      icon: <LogoutOutlined />,
      key: '0',
      onClick: () => {
        void dispatch(
          logoutAction({
            callback: () => {
              navigate(ROUTERS.LOGIN.PATH);
            },
          }),
        );
      },
    },
  ];

  return (
    <PrivateLayoutStyle>
      <Layout className="layout-body">
        <Header className="body-header">
          <Dropdown menu={{ items }}>
            <Avatar src="https://tapchilamdep.com/photos/file/092023/giong-hat-cua-rose-rat-dac-trung-va-cuon-hut-va-thu-hut-nguoi-xem.jpg" />
          </Dropdown>
        </Header>

        <Content className="body-content">{outlet}</Content>

        <Footer className="body-footer">Footer</Footer>
      </Layout>
    </PrivateLayoutStyle>
  );
};

export default PrivateLayout;
