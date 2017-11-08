import React from 'react'
// import GoogleMap package
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// set up CommunityMap element using withGoogleMap(HOC - Higher Order Component)
// HOC is a function that takes a component and returns a new component
const CommunityMap = withGoogleMap(props => {
  
  // props.results is passed down from App.jsx
  // '<CommunityMap results={this.state.results} />'
  const markers = props.results || [];
  
  // the GoogleMap requires a zoom and a center
  // create a marker element for each position (value in SearchResult)
  return (
    <div className="map">

      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: markers[0].the_geom.coordinates[0], 
          lng: markers[0].the_geom.coordinates[1] }}
      >
        {markers.map((marker, idx) => (
          <Marker position={{lat: marker.the_geom.coordinates[0], 
            lng: marker.the_geom.coordinates[0]}} 
          />
        ))}
      </GoogleMap>

    </div>
  )
})

export default CommunityMap;