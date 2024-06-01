import { Tabs } from 'antd';
import styled from 'styled-components';

export const TabMenuStyle = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;

    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #000000;
      }
    }

    .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 400;
    }

    .ant-tabs-tab {
      &:hover {
        color: #db4444;
        text-shadow: 0 0 0.25px currentcolor;
      }
    }

    .ant-tabs-ink-bar {
      bottom: 15px;
      background: #000000;
      opacity: 0.5;
    }

    &::before {
      display: none;
    }
  }
`;
