import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



class Comment extends Component {
 	
 	render() {
 		 return (
     
       <div className="Comment">

           <form>
                
                  <h1>Under The Hood</h1>
                  <h2>Get The Real!</h2>

              <input
                  type="text"
                  required
                  placeholder="Enter Comment"
                  // value={this.state.comment}
                  onChange={this.handleCommentChange}
                /><br/>
               
                <p></p>
                
              </form>
              
               
              </div>
              
     
        
     )
 	}
}
export default connect() (Comment)