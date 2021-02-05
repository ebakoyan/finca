import s from "./Login.module.css";
import {NavLink,Redirect} from 'react-router-dom'
import {createUser} from '../../api'
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginAllow: false,
      passAllow: false,
      redirect:false
    };
    this.testLogin = (e) => {
      if (e.target.value.length >= 5) {
        this.setState({ loginAllow: true });
        e.target.style.borderColor = "green";
      } else {
        e.target.style.borderColor = "red";
        this.setState({ loginAllow: false });
      }
      if (e.target.value.length === 0) e.target.style.borderColor = "#e0e0bb";
    };
    this.testPass = (e) => {
      if (e.target.value.length >= 5) {
        this.setState({ passAllow: true });
        e.target.style.borderColor = "green";
      } else {
        e.target.style.borderColor = "red";
        this.setState({ passAllow: false });
      }
      if (e.target.value.length === 0) e.target.style.borderColor = "#e0e0bb";
    };
    this.handleReg = async ()=>{
      const username = document.getElementById('login').value
      const password = document.getElementById('password').value
      if(await createUser(username, password)){
        this.setState({redirect:true})
      }
    }
  }
 
  render() {
    const loginBtn =
      this.state.loginAllow && this.state.passAllow ? (
        <button onClick={this.handleReg} className='btn btn-success'>Register</button>
      ) : (
        <button className='btn btn-success' disabled>
          Register
        </button>
      );
    const icon =
      this.state.loginAllow && this.state.passAllow ? (
        <i class='fas fa-lock-open fa-2x' style={{ color: "green" }}></i>
      ) : (
        <i class='fas fa-lock fa-2x'></i>
      );
    return (
      <div className={s.login}>
      {this.state.redirect?<Redirect to='/'/>:null}
        <div className={s.inputs}>
          <div>{icon}</div>
          <input type='text' placeholder='Login' onChange={this.testLogin} id="login"/>
          <input
            type='password'
            placeholder='Password'
            onChange={this.testPass}
            id = "password"
          />
          {loginBtn}
          <NavLink to ='/' style={{marginTop:"10px"}}className="btn btn-danger">Login</NavLink>
        </div>
      </div>
    );
  }
}
export default Login;
