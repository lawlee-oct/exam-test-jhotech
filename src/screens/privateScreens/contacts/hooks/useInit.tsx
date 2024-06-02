import React from 'react';
import Icon from '@ant-design/icons';
import { useFormik } from 'formik';
import { ColumnsType } from 'antd/lib/table';
import { Avatar, Col, Typography } from 'antd';

import { DeleteIcon, EditIcon, EmailIcon, PhoneIcon, SettingIcon } from 'src/assets/icon';
import { AVATAR } from 'src/assets/image';

const { Text } = Typography;

const useInit = (): Contacts.useForm => {
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

  const columns: ColumnsType<Contacts.DataType> = [
    {
      dataIndex: '',
      title: 'Nom du contact',
      render: (record: Contacts.DataType) => (
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
      render: (record: Contacts.DataType) => {
        if (record.isAssigner) {
          return <Text className="is-assginer">Me l’assigner</Text>;
        } else {
          return (
            <Text className="avatar">
              <Avatar src={record.avatar} alt="avatar" />
              {record.responsible}
            </Text>
          );
        }
      },
    },
    {
      dataIndex: 'tags',
      title: 'Etiquettes',
      align: 'center',
      render: tags => (
        <Col>
          <Text className="tag-first">{tags[0]}</Text>
          <Text className="tag-second">{tags[1]}</Text>
          {tags.length > 2 && <Text className="tag-three">+{tags.length - 2}</Text>}
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

  const data: Contacts.DataType[] = Array.from({ length: 50 }, (_, i) => ({
    key: (i + 1).toString(),
    name: `Romain Gillig ${i}`,
    position: 'Particulier',
    email: `romain_${i}@gilling.studio`,
    phone: `06 88 65 26 8${i}`,
    opportunity: 'Formation 3D',
    responsible: `Sébastien ${i}`,
    tags: i % 2 === 0 ? ['BTP', 'BtoB', 'ABC'] : ['BTP', 'BtoB', 'ABC', 'BCD'],
    avatar: AVATAR,
    isAssigner: i === 2,
  }));

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Contacts.DataType[]) => {},
    getCheckboxProps: (record: Contacts.DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  return { formik, columns, data, rowSelection };
};

export default useInit;
