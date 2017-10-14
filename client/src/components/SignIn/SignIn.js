import React, {Component} from 'react';
import './cool.css';
import axios from 'axios';




class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
      showError: false,
      submitted: false,
    };
  }

     


  handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value, error: false });
    }

  handlePasswordChange = (evt) => { 
      this.setState({ password: evt.target.value, error: false });
    }

  handleSubmit = (evt) => {

    if (this.canBeSubmitted()) {
      var instance = axios.create({ headers: { 'Content-Type': 'application/json' } });
      evt.preventDefault();
      // console.log(this.state.email);
      // console.log(this.state.password);

      return instance.post('http://localhost:8080/login', {
        
        email: this.state.email,
        password: this.state.password,
      })
        .then(response => {
          this.setState({submitted:true});
          console.log("It worked the server responded with:", response.data);
        
          localStorage.setItem('apiToken', response.data.token);
          localStorage.setItem('email', this.state.email);
          if (response.data.term) {
             localStorage.setItem('term', response.data.term);
          }

          if (response.data.success) {
              this.goToBoard();
              console.log(response.data.success);
          }
          
          // this.goToBoard();

        })
        
        .catch(error => {
          this.setState({error:error});
         
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
                   window.location.href = "/App"
         }



    render() {


    const isEnabled = this.canBeSubmitted();

     
       const style = {
            textAlign: 'center',
           };


        const style2 = {
          color: '#FF8C00',
        }


           // console.log(this.state.error);
         let errorMessage = ""
        if (this.state.error) {
            errorMessage =  "Sorry incorrect password!" 
         
         } 



        let loading = ""
        if (this.state.submitted) {
          loading =  <div className='loading-indicator'> </div> 
        }


        


  return (
     
       <div className="Signin" style={style}>

           <form onSubmit={this.handleSubmit}>
                
                  <h1 style={style2}> Under The Hood</h1>
                  <h2 style={style2}> Get The Real!</h2>

              <input
                  type="text"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={evt => this.setState({ email: evt.target.value, error: false }) }
                /><br/>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={evt => this.setState({ password: evt.target.value, error: false }) }
                /><br/>
                <button disabled={!isEnabled}>Sign In</button>
                <p>{errorMessage}</p>
                
              </form>
               {loading}
               
              </div>
              
     
        
    )
  }
}
export default SignIn;