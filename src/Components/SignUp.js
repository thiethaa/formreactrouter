import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const validEmailRegex = 
                  RegExp(
                    /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  );

  const formValid = ({ error, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(error).forEach((val) => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach((val) => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class SignUp extends Component {
  constructor(){
    super();

    this.state={
      firstName: null,
      lastName:null,
      email:null,
      password:null,
      error:{
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        }
      }
    }
  
  handleSubmit = e =>{
    e.preventDefault();

    if (formValid(this.state)){
      console.log (` --SUBMITTING--
      First Name: ${this.state.FirstName}
      Last Name: ${this.state.LastName}
      Email: ${this.state.Email}
      Password: ${this.state.Password}`)
    }else{
      alert('Error Form Invalid')
    }
  }

  handleChange = e =>{
    e.preventDefault();

    const {name,value} = e.target;
    let error =this.state.error;

    switch (name){
      case 'firstName':
        error.firstName =
        value.length < 3 ? 'minimum 3 characters required' : '';
      break;
      case 'lastName':
        error.lastName=
        value.length < 3 ? 'minimum 3 characters required' : '';
      break;
      case 'email':
        error.email = validEmailRegex.test(value)
        ? '' : "invalid email address";
      break;
      case 'password':
        error.password =
        value.length < 6 ? 'minimum 6 character required' : '';
      break;
      default:
      break;

    }this.setState({error, [name]: value })
  };
  
  render() {
    const {error} = this.state;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure" onSubmit={this.handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="first-name">FirstName</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
              {error.firstName.length > 0 && <span style={{color:'red', textAlign:'right'}}>{error.firstName}</span>}
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="last-name">LastName</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={this.handleChange}
                />
              </div>
              {error.lastName.length > 0 && <span style={{color:'red', textAlign:'right'}}>{error.lastName}</span>}
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email-address"
                  onChange={this.handleChange}
                />
              </div>
              {error.email.length > 0 && <span style={{color:'red', textAlign:'right'}}>{error.email}</span>}
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              {error.password.length > 0 && <span style={{color:'red', textAlign:'right'}}>{error.password}</span>}
            </fieldset>
            
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up"
                />
              </div>
            
            <div className="lh-copy mt3">
              <Link to="/SignIn" ><p className="f6 link dim black db pointer">Already Have an Account</p></Link>
            </div>
          </form>
        </main>
      </article>
      );
  }
}

export default SignUp;

      
