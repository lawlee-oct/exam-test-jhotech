import { Layout } from 'antd';
import { COLOR } from 'src/constants';
import styled from 'styled-components';

export const PrivateLayoutStyle = styled(Layout)`
  height: 100%;
  width: 100%;
  position: relative;

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
      border-top: 1px solid #273140;
      background-color: ${COLOR.BACKGROUND_SECONDARY};
      padding-left: 48px;

      .ant-tabs-tab {
        margin: 0;
      }

      .ant-tabs-nav {
        padding: 0 13px;
        height: 48px;
        margin-bottom: 28px;

        .ant-tabs-tab-btn {
          padding: 0 20px;

          span {
            color: #a9abad;
            display: flex;
            align-items: center;

            svg {
              margin-right: 4px;
            }
          }
        }

        &::before {
          border-bottom: 1px solid #273140;
        }
      }

      .ant-tabs-tab-active {
        background-color: #dd531333;

        span {
          color: #ffffff !important;
        }
      }

      .ant-tabs-ink-bar {
        background: ${COLOR.BACKGROUND_BUTTON_PRIMARY};
        height: 4px;
      }
    }

    .body-footer {
      text-align: center;
    }
  }
`;
