import React from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../action/auth';
import { useDispatch, useSelector } from 'react-redux';
const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ auth }) => auth.login.error)
  const onSubmit = data => {
    dispatch(loginUser(data));
  }
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
      <div className="header">Welcome here!</div>
      <div className="subheader">Login and chat with other people!</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            type="email"
            className="form-control"
            id="email"
            // value="nisar@gmail.com"
            name="email"
            aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            {...register('password')}
            type="password"
            // value="123456"
            name="password"
            className="form-control"
            id="password" />
        </div>
        {error && <div className="alert alert-danger small">{error.message}</div>}
        <button type="submit"
          className="btn btn-outline-primary">Login</button>
      </div>
    </form>
  )
}

export default LoginForm