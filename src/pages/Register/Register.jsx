import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerThunk } from '../../store/auth/operation.js';
import { Button, TextField } from '@mui/material';
import { BgImage, RegisterForm } from './StyledRegister.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
        navigate('/contacts');
        toast.success(`Welcome, ${res.user.name}!`);
      })
      .catch(() => {
        toast.error(`Who are you?`);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <BgImage></BgImage>
      <RegisterForm onSubmit={handleSubmit(submit)}>
        <TextField
          {...register('name')}
          type="text"
          label="Enter name"
          variant="outlined"
        />
        <TextField
          {...register('email')}
          type="email"
          label="Enter email"
          variant="outlined"
        />
        <TextField
          {...register('password')}
          type="password"
          label="Enter password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </RegisterForm>
    </div>
  );
};

export default Register;
