import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Splash from './Splash/Splash'
import App from './App'
import SignIn from './SignIn/SignIn'
import Comment from './AddComment/Comment'

const Main = () => (

<Router>
    <div>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/dashboard" component={App}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/comment" component={Comment}/>
    </div>
  </Router>

)

export default Main;