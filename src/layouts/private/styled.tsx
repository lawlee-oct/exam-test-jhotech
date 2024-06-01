import { Layout } from 'antd';
import styled from 'styled-components';

export const PrivateLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;

  .logo {
    height: 64px;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 1px lightblue;
    padding-left: 20px;
    padding-right: 16px;
    justify-content: space-between;

    .anticon-menu-unfold {
      font-size: 20px;
      padding: 4px;

      &:hover {
        background-color: #1b84ff;
        cursor: pointer;
        border-radius: 4px;
      }
    }

    .ant-typography {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }

  .layout-menu {
    height: calc(100% - 64px);
    background-color: transparent;
    border: none;
    padding: 15px 10px;

    .ant-menu-item {
      margin-top: initial;
      margin-bottom: 10px;
    }

    .ant-menu-item-selected {
      background-color: #1b84ff !important;
    }

    .ant-menu-item-selected {
      background-color: #b8d8f1;
    }
  }

  .layout-body {
    .body-content {
      overflow-y: auto;
      padding: 18px;
      border-top: 1px solid #273140;
      border-left: 1px solid #273140;
      background-color: #09091a;
    }

    .body-footer {
      text-align: center;
    }
  }
`;
