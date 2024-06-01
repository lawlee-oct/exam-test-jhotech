import React from 'react';
import Icon from '@ant-design/icons';
import { Avatar, Button, Col, Row, Typography } from 'antd';

import useFormHeader from './hooks/useForm';
import { useAppSelector } from 'src/stores';
import { InputField } from 'src/components/form';
import { LogoIcon, NotificationIcon, SearchIcon, SettingIcon, QuestionIcon } from 'src/assets/icon';
import { WrapperHeaderCard } from './styled';

const { Text } = Typography;

const HeaderCard: React.FC = () => {
  const { formik } = useFormHeader();

  const { meInfo } = useAppSelector(state => state.auth);

  const { setFieldValue, getFieldProps, errors, touched } = formik;

  return (
    <WrapperHeaderCard className="body-header">
      <Row className="row-header">
        <Col>
          <Icon component={LogoIcon} />
        </Col>
        <Col>
          <InputField
            field={getFieldProps('search')}
            setFieldValue={setFieldValue}
            className="form-control"
            inputProps={{
              size: 'small',
              placeholder: 'Rechercher dans Metaforma',
              prefix: <Icon component={SearchIcon} />,
            }}
            error={errors.search}
            touched={touched.search}
          />

          <Button className="btn-plus">+</Button>
        </Col>
        <Col className="col-right">
          <Icon component={NotificationIcon} />
          <Icon component={QuestionIcon} />
          <Icon component={SettingIcon} />
          <Avatar
            alt="avatar"
            src={
              meInfo?.photoURL ??
              'https://tapchilamdep.com/photos/file/092023/giong-hat-cua-rose-rat-dac-trung-va-cuon-hut-va-thu-hut-nguoi-xem.jpg'
            }
          />
          <Text className="text-name">
            {meInfo?.displayName} <br /> <Text className="text-role">CEO, Admin</Text>
          </Text>
        </Col>
      </Row>
    </WrapperHeaderCard>
  );
};

export default HeaderCard;
