import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'store/auth/operation';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
