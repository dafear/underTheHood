import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {upDateMapLocation} from '../actions'
import './Map.css'
import {connect} from 'react-redux'

class Search extends Component {
    constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
    
  }



    handleSelect(props) {
     
      geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then (latLng => props.dispatch(upDateMapLocation(latLng.lat, latLng.lng)))
      .catch(error => console.error('Error', error))
    }


    

    render() {
      const props = this.props


      const myStyles = {
        
        input: {
          height: '100%',
          width: '100%',
          padding: '20px', 
        },

      }

      const styles2 = {
        color: 'black',
      }
     

      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
        return (
          <div className="Search">
          <h1 style={styles2}>Take A Look</h1>
          <PlacesAutocomplete inputProps={inputProps} 
          styles={myStyles}
          onEnterKeyDown={() => this.handleSelect(props)} />
           <button onClick={() => this.handleSelect(props)} >Submit</button>

              </div>
           
     
    );
  }
}

// const mapDispatchToProps = {
//    upDateMapLocation
// }

export default connect()(Search)




