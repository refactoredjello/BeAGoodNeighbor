import React from 'react'

// these are the search results that will appear below the searchbar
// after a search has been made
export default class Results extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="returned-results">
      </div>
    )
  }
}
