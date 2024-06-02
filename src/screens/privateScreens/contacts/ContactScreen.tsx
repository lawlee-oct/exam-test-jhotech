import React from 'react';
import { Button, Col, Table, Typography } from 'antd';
import Icon from '@ant-design/icons';

import { FilterIcon, PlusIcon, SearchIcon, SelectUserIcon, SettingIcon } from 'src/assets/icon';
import { InputField, SelectField } from 'src/components/form';
import useInit from './hooks/useInit';
import { WrapperContact } from './styled';

const { Text } = Typography;

const ContactScreen: React.FC = () => {
  const { formik, columns, data, rowSelection } = useInit();

  const { setFieldValue, getFieldProps, errors, touched } = formik;

  return (
    <WrapperContact>
      <Col span={24} className="col-filter">
        <Col className="col-left">
          <Button type="primary" className="btn-add-contact">
            <Icon component={PlusIcon} />
            Ajout de contact
          </Button>
          <Text className="text-total">
            <Text strong>100</Text> Contacts
          </Text>
        </Col>
        <Col className="col-right">
          <SelectField
            optionsSelect={[]}
            field={getFieldProps('select')}
            setFieldValue={setFieldValue}
            className="form-control"
            selectProps={{
              size: 'small',
              placeholder: 'Plus de filtre',
            }}
            error={errors.select}
            touched={touched.select}
            prefixIcon={FilterIcon}
          />
          <SelectField
            optionsSelect={[]}
            field={getFieldProps('filter')}
            setFieldValue={setFieldValue}
            className="form-control"
            selectProps={{
              size: 'small',
              placeholder: 'Tout le monde',
            }}
            error={errors.filter}
            touched={touched.filter}
            prefixIcon={SelectUserIcon}
          />
          <InputField
            field={getFieldProps('search')}
            setFieldValue={setFieldValue}
            className="form-control"
            inputProps={{
              size: 'small',
              placeholder: 'Titre, contact, responsable...',
              prefix: <Icon component={SearchIcon} />,
            }}
            error={errors.search}
            touched={touched.search}
          />

          <Button className="btn-setting">
            <Icon component={SettingIcon} />
          </Button>
        </Col>
      </Col>

      <Col span={24} className="col-table">
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={{
            showSizeChanger: true,
            defaultPageSize: 10,
            showTotal: (total, range) => `${range[0]}-${range[1]} trong ${total} mục`,
          }}
        />
      </Col>
    </WrapperContact>
  );
};

export default ContactScreen;
