import React from 'react';
import { Form, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { DefaultOptionType, SelectProps } from 'antd/lib/select';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import Icon from '@ant-design/icons';

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  optionsSelect: DefaultOptionType[];
  setFieldValue: (field: any, value: any) => any;
  selectProps?: SelectProps<any>;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  notFoundContent?: React.ReactNode;
  disabled?: boolean;
  prefixIcon?: React.ComponentType<any> | React.ForwardRefExoticComponent<any>;
  onChange?: () => void;
} & Omit<FormItemProps, 'children'>;

const SelectField: React.FC<Props> = ({
  label,
  touched,
  error,
  field,
  selectProps,
  optionsSelect,
  setFieldValue,
  onChange,
  notFoundContent,
  disabled,
  prefixIcon,
  ...rest
}) => {
  const handleChange = (e: any): void => {
    setFieldValue(field.name, e);

    if (onChange) {
      onChange();
    }
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Icon component={prefixIcon} className="prefix-icon" />
      <Select
        {...field}
        {...selectProps}
        options={optionsSelect}
        onChange={handleChange}
        notFoundContent={notFoundContent}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default SelectField;
