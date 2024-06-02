import styled from 'styled-components';
import { Content } from 'antd/lib/layout/layout';

import { BACKGROUND_LOGIN } from 'src/assets/image';
import { COLOR } from 'src/constants';

export const LoginScreenStyle = styled(Content)`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BACKGROUND_LOGIN});
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  .row-form {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 46px 52px 28px 52px;
    width: 506px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-height: 809px;

    .col-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .col-sub-title {
      font-size: 30px;
      font-weight: 700;
      line-height: 48px;
      text-align: center;
      margin-bottom: 5px;

      .ant-typography {
        color: #ffffff;
      }
    }

    .col-sub-desc {
      .ant-typography {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        opacity: 0.8;
      }
    }

    .col-input {
      margin-top: 60px;

      .ant-form-item {
        margin-bottom: 12px;

        .ant-form-item-control-input {
        }

        .ant-input {
          min-height: 52px;

          &::placeholder {
            color: #161629;
            font-weight: 600;
            font-style: 16px;
            opacity: 50%;
          }
        }

        .ant-input-password {
          .ant-input {
            min-height: 37px;
          }
        }
      }
    }

    .col-rest-pass {
      display: flex;
      justify-content: end;

      .ant-typography {
        color: #16fcd2;
        font-style: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .col-btn-submit {
      margin-top: 28px;

      .ant-btn {
        background-color: ${COLOR.BACKGROUND_BUTTON_PRIMARY};
        width: 100%;
        height: 52px;
        border: none;
        color: #ffffff;
      }
    }

    .ant-divider {
      color: #ffffff;
      margin-top: 20px;

      &::before,
      &::after {
        top: 0;
        border-top-color: #ffffff;
      }
    }

    .col-btn-gg,
    .col-btn-fb {
      .ant-btn {
        width: 100%;
        height: 52px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-child {
          span {
            margin-left: 10px;
          }
        }
      }
    }

    .col-btn-gg {
      margin-bottom: 8px;

      .ant-btn {
        color: ${COLOR.BACKGROUND_BUTTON_PRIMARY};
        font-weight: 600;
        font-style: 16px;
      }
    }

    .col-btn-fb {
      .ant-btn {
        background-color: #415a93;
        color: #ffffff;
        font-weight: 600;
        font-style: 16px;
      }
    }

    .col-register {
      margin-top: 20px;
      display: flex;
      justify-content: center;

      .ant-typography {
        font-style: 16px;
        font-weight: 500;

        &:first-child {
          color: #ffffff;
        }

        &:last-child {
          color: ${COLOR.BACKGROUND_BUTTON_PRIMARY};
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }

  .circle-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
