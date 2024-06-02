import styled from 'styled-components';

import { COLOR } from 'src/constants';

export const WrapperSider = styled.div`
  position: absolute;
  width: 48px;
  height: 100%;
  background: ${COLOR.BACKGROUND_PRIMARY};
  padding-top: 72px;
  border-right: 1px solid #273140;

  .icon-group {
    width: 100%;
    cursor: pointer;
    height: 48px;
    align-items: center;
    display: flex;
    justify-content: center;

    &:last-child {
      position: absolute;
      bottom: 0;
    }
  }

  .group-active {
    background: #dd531333;
    border-right: 1px solid ${COLOR.BACKGROUND_BUTTON_PRIMARY};
  }
`;
