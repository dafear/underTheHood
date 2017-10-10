import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {upDateMapLocation} from '../actions'
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
     

      const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
        return (
          <PlacesAutocomplete inputProps={inputProps} 
          onEnterKeyDown={() => this.handleSelect(props)} 
        />
     
    );
  }
}

// const mapDispatchToProps = {
//    upDateMapLocation
// }

export default connect()(Search)




