import React from 'react'
import SearchResult from './SearchResult.jsx'

// these are the search results that will appear below the searchbar
// after a search has been made
var Results = (props) => (
  <div className="returned-results">
    <h3> Your Volunteer Opportunities </h3>
      <div className="search-results">
        {props.results.length > 0 ?
          props.results.map((item, idx) => (
            // console.log(item);
            <SearchResult item={item}
                    key={idx} />
          )) : null }
      </div>
  </div>
)

export default Results;