import React from 'react'
import SearchResult from './SearchResult.jsx'

// these are the search results that will appear below the searchbar
// after a search has been made
export default class Results extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="returned-results">
        <h3> Your Volunteer Opportunities </h3>
        There are { props.results.length } community centers in your search.
          <div className="results">
          {props.results.map((item, idx) => {
          	<SearchResult item={item}
          				  key={idx} />
          })}
          </div>
      </div>
    )
  }
}
