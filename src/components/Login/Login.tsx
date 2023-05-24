import { useState } from 'react';
import LoginImage from '../../assets/login-image.png';
import Logo from '../../assets/logo.png';
import './login.scss';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="login">
      <div className="login__l padding">
        <div className="login__logo">
          <img src={Logo} alt="Brand Logo" className="login__logo-image " />
        </div>
        <div className="login__image-container">
          <img
            src={LoginImage}
            alt="login thumbnail"
            className="login__main-thumbnail"
          />
        </div>
      </div>
      <div className="login__r padding">
        <div className="heading">
          <h3>Welcome!</h3>
          <p>Enter details to login.</p>
        </div>
        <div>
          <form className="form">
            <div className="form-control">
              <input type="text" className="form-group" placeholder="Email" />
            </div>
            <div className="form-control">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-group"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                data-test-id="toggle"
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
            <p className="password">forgot password?</p>
            <button className="form__btn">LOG IN</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;