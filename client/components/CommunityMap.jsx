import React from 'react'
// import GoogleMap package
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// set up CommunityMap element using withGoogleMap(HOC - Higher Order Component)
// HOC is a function that takes a component and returns a new component
const CommunityMap = withGoogleMap(props => {
  
  // props.results is passed down from App.jsx
  // '<CommunityMap results={this.state.results} />'
  const markers = props.results || [];
  // console.log(props.results)
  // console.log(props.mapCenter)
  // const mapCenter = {{ lat: markers[0].the_geom.coordinates[0], 
  //         lng: markers[0].the_geom.coordinates[1] }} || props.mapCenter; 
  
  
  // the GoogleMap requires a zoom and a center
  // create a marker element for each position (value in SearchResult)
  return (
    <div className="map">{props.mapCenter.lat}

      <GoogleMap
        defaultZoom={11}
        defaultCenter={props.mapCenter}
      >
        {markers.length > 0 ?
          markers.map((marker, idx) => (
          <Marker position={{lat: Number(marker.the_geom.split(',')[2].split(']')[0]), 
            lng: Number(marker.the_geom.split(',')[1].split('[')[1])}} 
          />
          )) : null}
      </GoogleMap>

    </div>
  )
})

export default CommunityMap;

// defaultCenter={{ lat: markers[0].the_geom.coordinates[0], 
//           lng: markers[0].the_geom.coordinates[1] }}
//           
//           
//           <GoogleMap
      //   defaultZoom={12}
      //   defaultCenter={{lat: 40.79796877343687,
      //                 lng: -73.96923141968897}}
      // >
      //   {console.log(markers)}
      //   {markers.length > 0 ?
      //     markers.map((marker, idx) => (
      //     <Marker position={{lat: marker.the_geom.coordinates[0], 
      //       lng: marker.the_geom.coordinates[0]}} 
      //     />
      //   )) : null}
      // </GoogleMap>