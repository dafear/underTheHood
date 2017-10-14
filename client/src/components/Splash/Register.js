import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './register.css';


  class Register extends Component {
    constructor() {
      super();
      this.state = {
      email: '',
      password: '',
      logged: false,

    };
  }

  handleEmailChange = (evt) => {

    this.setState({ email: evt.target.value });

  }

  handlePasswordChange = (evt) => {

    this.setState({ password: evt.target.value });

  }

  handleSubmit = (evt) => {

    if (this.canBeSubmitted()) {
      var instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
        evt.preventDefault();
// console.log(this.state.email);
//  console.log(this.state.password);

    return instance.post('http://localhost:8080/register/register', {

      email: this.state.email,
      password: this.state.password,
  })

    .then(response => {
      console.log("It worked the server responded with:", response);
        this.goToBoard(); 
    })

    .catch(function (error) {
      console.log(error);
  });

    } else {
      alert("You need an email and password");

    }
  }

    canBeSubmitted() {

      const { email, password } = this.state;
        return (
          email.length > 0 &&
          password.length > 0
      );
    }

    goToBoard() {

      if(this.canBeSubmitted()) {this.setState({logged: true})}
        window.location.href = "/signin"
    }

    render() {

        const isEnabled = this.canBeSubmitted();



      const style = {
        textAlign: 'center',
    };


      const savedStyle = {

          position: 'absolute',
          top: 10,
          right: 0,
          backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: 75,
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18, 

      };


          return (



            <div className="list" style={style}>

              <form onSubmit={this.handleSubmit}>

                  <h1>Under The Hood</h1>


                <input

                  type="text"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  /><br/>

                  <input
                  type="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  /><br/>

                <button disabled={!isEnabled}>Sign up</button>

               <Link  style={savedStyle} to="/signin">Sign In</Link>

             </form>

          </div>


        )

    }

  };

      export default Register;

