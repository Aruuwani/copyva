import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Auth.css'; 
import { useNavigate } from 'react-router-dom';

// import loginbg from "../../assets/loginbg.jpeg"

const schema = yup.object().shape({
  fullName: yup.string().when('isLogin', {
    is: false,
    then: yup.string().required('Full name is required')
  }),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().when('isLogin', {
    is: false,
    then: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
  })
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [isUser, setIsUser] = useState(true); 
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { isLogin }
  });

  const onSubmit = data => {
    if (isLogin) {
      // Handle login
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === data.email && storedUser.password === data.password && storedUser.type === (isUser ? 'user' : 'owner')) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } else {
      // Handle registration
      localStorage.setItem('user', JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        type: isUser ? 'user' : 'owner'
      }));
      alert('Registration successful! You can now log in.');
      setIsLogin(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 className="auth-logo">COPYVA</h1>
        <p className="auth-welcome">Welcome to Copyva</p>
        <p className="auth-description">Your one-stop destination to buy & sell<br/> licenses</p>
        {/* <img src={loginbg} alt="" className="auth-image" /> */}
      </div>
      <div className="auth-right">
        <h2 className="auth-title">{isLogin ? 'Login' : 'Create account'}</h2>
        <div className="auth-toggle">
          <button 
            className={isUser ? 'active' : ''}
            onClick={() => setIsUser(true)}>
            User
          </button>
          <button 
            className={!isUser ? 'active' : ''}
            onClick={() => setIsUser(false)}>
            Owner
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          {!isLogin && (
            <>
              <input 
                type="text" 
                placeholder="Full name"
                {...register('fullName')} 
                className={errors.fullName ? 'input-error' : ''}
              />
              {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
            </>
          )}
          <input 
            type="email" 
            placeholder="Email address" 
            {...register('email')} 
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
          <input 
            type="password" 
            placeholder="Password" 
            {...register('password')} 
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
          {!isLogin && (
            <>
              <input 
                type="password" 
                placeholder="Confirm password" 
                {...register('confirmPassword')} 
                className={errors.confirmPassword ? 'input-error' : ''}
              />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </>
          )}
          {isLogin && <p className="forgot-password">Forgot password?</p>}
          <button type="submit" className="auth-submit">Submit</button>
        </form>
        <div className="auth-divider">
          <span>Or</span>
        </div>
       
        <button className="google-signin">Continue with Google</button>
        <p className="auth-switch">
          {isLogin 
            ? 'Not a member? Sign up' 
            : 'Already a member? Login'}
         
        </p>

        <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="google-signin">
            {isLogin ? 'Create your account' : 'Login'}
          </button>
      </div>
    </div>
  );
};

export default Auth;
