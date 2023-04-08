
import { Link } from "react-router-dom";


import { useAuthContext } from "../../contexts/AuthContext";//import { useContext } from "react";//import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

   return (
      <section id="login-page" className="auth">
          <form id="login" method="POST" onSubmit={onSubmit}>
              <div className="container">
                  <div className="brand-logo"></div>
                  <h1>Login</h1>

                 

                  <label htmlFor="email">Email:</label>
                  <input
                      className="form-control border-white p-3"
                      type="email"
                      id="email"
                      placeholder="Sokka@gmail.com"
                      name={LoginFormKeys.Email}
                      value={values[LoginFormKeys.Email]}
                      onChange={changeHandler}
                  />

                  <label htmlFor="login-pass">Password:</label>
                  <input
                      className="form-control border-white p-3"
                      type="password"
                      id="login-password"
                      name={LoginFormKeys.Password}
                      value={values[LoginFormKeys.Password]}
                      onChange={changeHandler}
                  />
                  <input type="submit" className="btn submit btn btn-primary px-4"value="Login" />
                  <p className="field">
                      <span>If you don't have profile click <Link to="/register">here</Link></span>
                  </p>
              </div>
          </form>
      </section>
  );
  
};
