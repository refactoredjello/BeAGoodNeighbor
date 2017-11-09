import React from 'react'
// import GoogleMap package
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// set up CommunityMap element using withGoogleMap(HOC - Higher Order Component)
// HOC is a function that takes a component and returns a new component
const CommunityMap = withGoogleMap(props => {
  
  // props.results is passed down from App.jsx
  const markers = props.results || []
  
  // the GoogleMap requires a zoom and a center
  // create a marker element for each position by mapping value in SearchResult
  // map markers require an object with lat & lng - lat&lng are set with
  // data from DB that requires a bunch of slicing to 
  // convert from string to Number
  return (
    <div className="map">

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

export default CommunityMap
