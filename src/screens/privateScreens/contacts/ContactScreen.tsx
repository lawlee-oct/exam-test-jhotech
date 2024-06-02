import React from 'react';
import { Avatar, Button, Col, Table, Typography } from 'antd';
import Icon from '@ant-design/icons';

import {
  DeleteIcon,
  EditIcon,
  EmailIcon,
  FilterIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SelectUserIcon,
  SettingIcon,
} from 'src/assets/icon';
import { WrapperContact } from './styled';
import { InputField, SelectField } from 'src/components/form';
import { useFormik } from 'formik';
import { ColumnsType } from 'antd/lib/table';
import { AVATAR } from 'src/assets/image';

const { Text } = Typography;

const ContactScreen: React.FC = () => {
  const initialValues = {
    search: '',
    select: null,
    filter: null,
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: async value => {},
  });

  const { setFieldValue, getFieldProps, errors, touched } = formik;

  interface DataType {
    key: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    opportunity: string;
    responsible: string;
    tags: string[];
    avatar?: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      dataIndex: '',
      title: 'Nom du contact',
      render: (record: DataType) => (
        <Text className="name">
          {record.name} <br />
          <Text className="position">{record.position}</Text>
        </Text>
      ),
    },
    {
      dataIndex: 'email',
      title: 'Email',
      render: email => (
        <Text className="email">
          <Icon component={EmailIcon} />
          {email}
        </Text>
      ),
    },
    {
      dataIndex: 'phone',
      title: 'Téléphone',
      render: phone => (
        <Text className="phone">
          <Icon component={PhoneIcon} />
          {phone}
        </Text>
      ),
    },
    { dataIndex: 'opportunity', title: 'Opportunity' },
    {
      dataIndex: '',
      title: 'Responsable',
      render: (record: DataType) => (
        <Text className="avatar">
          <Avatar src={record.avatar} alt="avatar" />
          {record.opportunity}
        </Text>
      ),
    },
    {
      dataIndex: 'tags',
      title: 'Etiquettes',
      align: 'center',
      render: tags => (
        <Col>
          <Text className="tag-first">{tags[0]}</Text>
          <Text className="tag-second">{tags[1]}</Text>
          {tags.length > 2 && <Text className="tag-three">+1</Text>}
        </Col>
      ),
    },
    {
      dataIndex: '',
      title: <Icon component={SettingIcon} />,
      align: 'center',
      render: _ => (
        <Col className="col-setting">
          <Icon component={EditIcon} className="edit-icon" />
          <Icon component={DeleteIcon} />
        </Col>
      ),
    },
  ];

  const data: DataType[] = Array.from({ length: 50 }, (_, i) => ({
    key: (i + 1).toString(),
    name: `Romain Gillig ${i}`,
    position: 'Particulier',
    email: 'romain@gilling.studio',
    phone: '06 88 65 26 87',
    opportunity: 'Formation 3D',
    responsible: 'Sébastien',
    tags: ['BTP', 'BtoB', '+1'],
    avatar: AVATAR,
  }));

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

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
