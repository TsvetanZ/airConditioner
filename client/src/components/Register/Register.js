import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit} = useForm({
    email:'',
    password: '',
    confirmPassword:'',

  }, onRegisterSubmit)

    return (
        
  <section id="register-page" className="content auth">
    <form id="register" method="POST" onSubmit={onSubmit}>
      <div className="container">
        <div className="brand-logo" />
        <h1>Register</h1>
        <label htmlFor="email">Email:</label>
        <input
         className="form-control border-white p-3"
          type="email"
          id="email"
          name="email"
          placeholder="maria@email.com"
          value={values.email}
          onChange={changeHandler}
        />
        <label htmlFor="pass">Password:</label>
        <input 
         className="form-control border-white p-3"
        type="password"
         name="password" 
         id="register-password" 
         value={values.password}
         onChange={changeHandler}         
         />
        <label htmlFor="con-pass">Confirm Password:</label>
        <input
         className="form-control border-white p-3"
        type="password"
        name="confirmPassword"
        id="confirm-password"
        value={values.confirmPassword}
        onChange={changeHandler} 
         />
        <input className="btn submit btn btn-primary px-4" type="submit" value="Register" />
        <p className="field">
          <span>
            If you already have profile click <Link to="/login">here</Link>
          </span>
        </p>
      </div>
    </form>
  </section>
 

    );
};