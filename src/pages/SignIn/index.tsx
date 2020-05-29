import React, { useContext, useRef, useState } from 'react';
import { AiOutlineBgColors } from 'react-icons/ai';
import { SubmitHandler, FormHandles } from '@unform/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeContext } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

import AppContext from '../../services/context';
import Input from '../../components/Input';

import {
  Container,
  ButtonToggleTheme,
  CardLogin,
  Form,
  ButtonSubmit,
} from './styles';

import logo from '../../assets/img/logo.png';

interface FormData {
  password: string;
  email: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { toggleTheme } = useContext(AppContext);
  const { colors } = useContext(ThemeContext);

  const [loading, setLoading] = useState<Boolean>(false);

  const handleSubmit: SubmitHandler<FormData> = async (values: FormData) => {
    setLoading(true);

    try {
      window.location.href = '/dashboard';
    } catch (error) {}
    setLoading(false);
  };

  return (
    <Container>
      <CardLogin>
        <img src={logo} alt='admin-template-typescript' className='logo' />

        <Form ref={formRef} onSubmit={handleSubmit}>
          {loading ? (
            <div>
              <ClipLoader size={25} color={colors.primary} />
            </div>
          ) : (
            <>
              <Input name='email' label='Email' required />
              <Input name='password' label='Senha' type='password' required />

              <ButtonSubmit type='submit'>
                Entrar <BsChevronRight />{' '}
              </ButtonSubmit>
            </>
          )}
        </Form>
      </CardLogin>

      <ButtonToggleTheme onClick={toggleTheme}>
        <AiOutlineBgColors />
      </ButtonToggleTheme>
    </Container>
  );
};

export default SignIn;
