import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {connect} from 'react-redux'
// import './Map.css'

  export class GoogleMap extends Component {
   // fetchPlaces(mapProps, map) {
   // const {google} = mapProps;
   // // const service = new google.maps.places.PlacesService(map);

   // }

      mapClicked(mapProps, map, clickEvent) {

      }

       render() {
    
        const style = {
        width: '100%',
        height: '100%',
       
      }

    return (

        <Map className="Cool"
        google={window.google} 
        // onReady={this.fetchPlaces}
        center={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        zoom={10}
        onClick={this.onMapClicked}
      >  
        <Marker 
                name={'Current location'} />
        <Marker 
          title={'Bronx County Court'}
          name={'court'}
          position={{lat: 40.826747, lng: -73.92069500000002}} />
          
        <InfoWindow>
            <div>
              <h1>''</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

const mapStateToProps = (state) => {
console.log(state.map)
 return{
  lat: state.map.lat,
  lng: state.map.lng
 }
}
export default connect(mapStateToProps)(GoogleMap)


// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyATS32dIh3IRtgghLWmuWnOvBRTlVMAyeM')
// })(GoogleMap)
