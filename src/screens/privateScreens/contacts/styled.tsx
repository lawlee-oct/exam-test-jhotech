import { Row } from 'antd';
import styled from 'styled-components';

export const WrapperContact = styled(Row)`
  height: calc(100% - 76px);
  padding: 0 24px 37px;

  .col-filter {
    display: flex;
    justify-content: space-between;
    height: 40px;

    .col-left {
      display: flex;
      align-items: center;

      .btn-add-contact {
        width: 204px;
        height: 40px;
        border-radius: 10px;
      }

      .text-total {
        margin-left: 12px;
      }

      .ant-typography {
        color: #ffffff;
      }
    }

    .col-right {
      display: flex;
      align-items: center;

      .ant-form-item {
        margin-bottom: 0;
        margin-right: 24px;

        * {
          color: #ffffff;
        }

        .ant-input-affix-wrapper {
          height: 40px;
          border-radius: 10px;
          width: 203px;
          background: transparent;
          border: 1px solid #273140;
          padding: 0 16px;

          .ant-input {
            background-color: transparent;
            margin-left: 8px;
            font-size: 10px;
          }
        }

        .ant-select-selector {
          background-color: transparent;
          width: 147px;
          border-radius: 10px;
          border: 1px solid #273140;
          height: 40px;
          font-style: 10px;

          .ant-select-selection-placeholder {
            line-height: 36px;
            font-size: 10px;
            padding-left: 24px;
          }
        }
      }

      .btn-setting {
        background-color: transparent;
        border-color: #273140;
        width: 42px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
      }
    }
  }

  .col-table {
    height: calc(100% - 40px);
    padding-top: 48px;

    .ant-table-thead {
      .ant-table-cell {
        padding: 4px 16px;
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          padding: 8px 16px;

          .ant-typography {
            font-size: 12px;
          }

          .name {
            font-style: 12px;
            font-weight: 700;
          }

          .position {
            font-style: 10px;
            font-weight: 400;
          }

          .email,
          .phone,
          .avatar {
            display: flex;
            align-items: center;

            .anticon,
            .ant-avatar {
              margin-right: 8px;
            }
          }

          .is-assginer {
            border-radius: 24px;
            background: #8ad74e33;
            padding: 8px;
            color: #8ad74e;
            padding-left: 20px;

            &::before {
              content: '';
              background-color: rgb(138, 215, 78);
              width: 8px;
              height: 8px;
              border-radius: 50%;
              display: flex;
              position: absolute;
              margin-top: 8px;
              margin-left: 8px;
            }
          }

          .tag-first,
          .tag-second {
            margin-right: 4px;
            border-radius: 10px;
            font-size: 10px;
            padding: 2px 4px;
          }

          .tag-first {
            background-color: #ff001f;
          }

          .tag-second {
            background-color: #0038ff;
          }

          .tag-three {
            border-radius: 50%;
            font-size: 10px;
            padding: 2px 4px;
            background-color: #00000033;
          }

          .edit-icon {
            margin-right: 8px;
          }

          .col-setting {
            opacity: 0;
          }
        }

        &:hover {
          .ant-table-cell {
            .col-setting {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
