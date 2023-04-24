import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormRegister, RegisterLabel, RegBtn } from './RegisterForm.styled'; 

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <RegisterLabel >
        Username
        <input type="text" name="name" />
      </RegisterLabel>
      <RegisterLabel >
        Email
        <input type="email" name="email" />
      </RegisterLabel>
      <RegisterLabel >
        Password
        <input type="password" name="password" />
      </RegisterLabel>
      <RegBtn type="submit">Register</RegBtn>
    </FormRegister>
  );
};
