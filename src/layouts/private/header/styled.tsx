import { Layout } from 'antd';
import styled from 'styled-components';

import { COLOR } from 'src/constants';

const { Header } = Layout;

export const WrapperHeaderCard = styled(Header)`
  height: 72px;
  background: ${COLOR.BACKGROUND_PRIMARY};
  padding: 0 24px 0 13px;
  z-index: 1;

  .row-header {
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .ant-col {
      display: flex;
      align-items: center;
      height: 100%;

      .ant-form-item {
        margin-bottom: 0;

        * {
          color: #ffffff;
        }

        .ant-input-affix-wrapper {
          height: 40px;
          border-radius: 24px;
          width: 407px;
          background: #232b39;
          border: none;
          padding: 0 16px;

          .ant-input {
            background-color: transparent;
            margin-left: 8px;
          }
        }
      }

      .btn-plus {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: ${COLOR.BACKGROUND_BUTTON_PRIMARY};
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 16px;

        span {
          font-size: 22px;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }

    .col-right {
      .anticon {
        margin-right: 12px;
      }

      .ant-typography {
        line-height: 18px;
        color: #ffffff;
      }

      .text-name {
        font-style: 12px;
        font-weight: 700;
        margin-left: 12px;
      }

      .text-role {
        font-style: 10px;
        font-weight: 400;
      }
    }
  }
`;
