import React from 'react';
import { Pagination, InputNumber } from 'antd';

interface IPagination {
  total?: number;
  pageSize?: number;
  current?: number;
  onChange?: (page: number, pageSize: number) => void;
}

const CustomPagination: React.FC<IPagination> = ({ total, pageSize, current, onChange }) => {
  const onPageSizeChange = (size): void => {
    if (onChange) {
      onChange(1, size);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Pagination total={total} pageSize={pageSize} current={current} onChange={onChange} showSizeChanger={false} />
      <span>Éléments par page</span>
      <InputNumber min={1} max={100} defaultValue={pageSize} onChange={onPageSizeChange} />
    </div>
  );
};

export default CustomPagination;
