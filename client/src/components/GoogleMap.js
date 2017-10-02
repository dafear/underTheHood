import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
   fetchPlaces(mapProps, map) {
   const {google} = mapProps;
   const service = new google.maps.places.PlacesService(map);

   }
    

     



render() {



        const style = {
        width: '100%',
        height: '100%'
      }

    return (
      <Map 
       
        google={this.props.google} 
        onReady={this.fetchPlaces}
         
        style={style}
        initialCenter={{
          lat: 40.758896,
          lng: -73.985130
        }}
        
        zoom={15}
        onClick={this.onMapClicked}
      >
          
        

        <Marker 
                name={'Current location'} />

        <InfoWindow>
            <div>
              <h1>''</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyATS32dIh3IRtgghLWmuWnOvBRTlVMAyeM')
})(GoogleMap)
