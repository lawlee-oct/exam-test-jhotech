import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Col, Divider, Row, Typography } from 'antd';
import Icon from '@ant-design/icons';

import UseFormLogin from './hooks/useForm';
import { InputField, PasswordField } from 'src/components/form';
import { ROUTERS } from 'src/constants/routers';
import { useAppDispatch } from 'src/stores';
import { loginWithFacebookAction, loginWithGoogleAction } from 'src/stores/screens/publicScreens/auth/auth.action';
import GoogleIcon from 'src/assets/icon/GoogleIcon';
import FacebookIcon from 'src/assets/icon/FacebookIcon';
import TitleFormLogin from 'src/assets/icon/TitleFormLogin';

import { LoginScreenStyle } from './styled';
import CircleIcon from 'src/assets/icon/CircleIcon';

const { Text } = Typography;

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { formik } = UseFormLogin();

  const { setFieldValue, getFieldProps, handleSubmit, errors, touched } = formik;

  const handleClickLoginBtn = async (type: 'google' | 'facebook'): Promise<void> => {
    if (type === 'google') {
      void dispatch(
        loginWithGoogleAction({
          callback: () => {
            navigate(ROUTERS.DASHBOARD.PATH);
          },
        }),
      );
    } else {
      void dispatch(
        loginWithFacebookAction({
          callback: () => {
            navigate(ROUTERS.DASHBOARD.PATH);
          },
        }),
      );
    }
  };

  return (
    <LoginScreenStyle>
      <Row className="row-form">
        <Icon component={CircleIcon} className="circle-icon" />

        <Col className="col-title" span={24}>
          <Icon component={TitleFormLogin} />
        </Col>
        <Col className="col-sub-title" span={24}>
          <Text>Connexion</Text>
        </Col>
        <Col className="col-sub-desc" span={24}>
          <Text>
            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry
          </Text>
        </Col>
        <Col span={24} className="col-input">
          <InputField
            field={getFieldProps('email')}
            setFieldValue={setFieldValue}
            className="form-control form-email"
            inputProps={{
              size: 'large',
              placeholder: 'Email Address',
            }}
            error={errors.email}
            touched={touched.email}
          />

          <PasswordField
            field={getFieldProps('password')}
            className="form-control form-email"
            inputProps={{
              size: 'large',
              placeholder: 'Password',
            }}
            error={errors.password}
            touched={touched.password}
          />
        </Col>
        <Col className="col-rest-pass" span={24}>
          <Text underline>Mot de passe oublié?</Text>
        </Col>
        <Col className="col-btn-submit" span={24}>
          <Button onClick={() => handleSubmit()}>Connexion</Button>
        </Col>
        <Divider>Or</Divider>
        <Col className="col-btn-gg" span={24}>
          <Button
            onClick={() => {
              void handleClickLoginBtn('google');
            }}
          >
            <Icon component={GoogleIcon} />
            Continue with Google
          </Button>
        </Col>
        <Col className="col-btn-fb" span={24}>
          <Button
            onClick={() => {
              void handleClickLoginBtn('facebook');
            }}
          >
            <Icon component={FacebookIcon} />
            Continue with Facebook
          </Button>
        </Col>
        <Col className="col-register" span={24}>
          <Text>Not a member?</Text>
          <Text underline>Inscription</Text>
        </Col>
      </Row>
    </LoginScreenStyle>
  );
};
export default LoginScreen;
