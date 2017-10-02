import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import GoogleMap from './components/GoogleMap';
import './App.css';


class App extends React.Component {
 	constructor(props) {
 		super(props)
 		this.state = { address: 'New York City, NY'}
 		this.onChange = (address) => this.setState({ address })
 	}

 	handleFormSubmit = (event) => {
 		event.preventDefault()

 		geocodeByAddress(this.state.address)
 		.then(results => getLatLng(results[0]))
 		.then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))

 	}


  render() {
  	const inputProps = {
  		value: this.state.address,
  		onChange: this.onChange,
  	}



    return (
       <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
       </form>

      

    

    );
  }
}

export default App;



// export default GoogleApiWrapper({
//   apiKey: (AIzaSyDRD4_9jzVwtBqgF-BE88BvEoxiMlaBlhw)
// })(MapContainer)

