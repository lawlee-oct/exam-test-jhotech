import React from 'react';
import Icon from '@ant-design/icons';
import { useAppDispatch } from 'src/stores';
import { useNavigate } from 'react-router-dom';

import {
  GroupSider1,
  GroupSider2,
  GroupSider3,
  GroupSider4,
  GroupSider5,
  GroupSider6,
  GroupSider7,
  GroupSider8,
  GroupSider9,
  GroupSider10,
  GroupSider11,
  LogoutIcon,
} from 'src/assets/icon';
import { WrapperSider } from './styled';
import { logoutAction } from 'src/stores/screens/publicScreens/auth/auth.action';
import { ROUTERS } from 'src/constants';

const SiderCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const dataGroup = [
    {
      component: GroupSider1,
      alt: 'group-sider-1',
    },
    {
      component: GroupSider2,
      alt: 'group-sider-2',
    },
    {
      component: GroupSider3,
      alt: 'group-sider-3',
    },
    {
      component: GroupSider4,
      alt: 'group-sider-4',
    },
    {
      component: GroupSider5,
      alt: 'group-sider-5',
    },
    {
      component: GroupSider6,
      alt: 'group-sider-6',
    },
    {
      component: GroupSider7,
      alt: 'group-sider-7',
    },
    {
      component: GroupSider8,
      alt: 'group-sider-8',
    },
    {
      component: GroupSider9,
      alt: 'group-sider-9',
    },
    {
      component: GroupSider10,
      alt: 'group-sider-10',
      isActive: true,
    },
    {
      component: GroupSider11,
      alt: 'group-sider-11',
    },
  ];

  const renderDataGroup = (): React.ReactNode =>
    dataGroup.map((item, index) => (
      <Icon key={index} component={item.component} className={`icon-group ${item?.isActive ? 'group-active' : ''}`} />
    ));

  const handleLogout = (): void => {
    void dispatch(
      logoutAction({
        callback: () => {
          navigate(ROUTERS.LOGIN.PATH);
        },
      }),
    );
  };

  return (
    <WrapperSider>
      {renderDataGroup()}
      <Icon component={LogoutIcon} className="icon-group" onClick={handleLogout} />
    </WrapperSider>
  );
};

export default SiderCard;
