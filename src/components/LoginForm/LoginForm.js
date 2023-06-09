import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { FormLogin, LoginLabel } from './LoginForm.styled'; 
import { RegBtn } from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <input type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <input type="password" name="password" />
      </LoginLabel>
      <RegBtn type="submit">Log In</RegBtn>
    </FormLogin>
  );
};
