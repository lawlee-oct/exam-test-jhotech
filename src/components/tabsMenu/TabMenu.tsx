import React from 'react';
import { TabsProps } from 'antd';

import { TabMenuStyle } from './styled';

interface ITabs {
  label: React.ReactNode;
  key: string;
  children: React.ReactNode;
}

export interface IProps {
  tabs: ITabs[];
  spaceTab?: number;
  activeKey?: string;
  tabsProps?: TabsProps;
}

const TabsMenu: React.FC<IProps> = ({ tabs, spaceTab, activeKey, tabsProps }): React.ReactElement => {
  return (
    <TabMenuStyle
      defaultActiveKey={activeKey ?? '1'}
      activeKey={activeKey ?? '1'}
      items={tabs}
      tabBarGutter={spaceTab}
      {...tabsProps}
    />
  );
};

export default TabsMenu;
