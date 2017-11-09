import React from 'react'
import SearchResult from './SearchResult.jsx'
import SavedResults from './SavedResults.jsx'


// these are the search results that will appear below the searchbar
// after a search has been made
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedResults: []
    }
  }

  // removes the checked item from the savedResults array if its in there
  handleUncheckedItem(item) {
    // prevState refers to the current state of savedResults
    this.setState((prevState) => {
      // save a copy of the prevState
      var tempArr = prevState.savedResults.slice();
      console.log(tempArr)
      // if the item is in tempArr, splice it out
      if (tempArr.indexOf(item) > -1) {
        tempArr.splice(tempArr.indexOf(item), 1);
        console.log(tempArr);
      }
      return { savedResults: tempArr }
    })
  }

  // if the item is checked, push the item into the savedResults array
  handleCheckedItem(item) {
    this.setState((prevState) => {
      // console.log(prevState)
      var tempArr = prevState.savedResults.slice();
      tempArr.push(item)
      // console.log(tempArr)
      return { savedResults: tempArr }
    })
  }

  render() {
    return (
      <div className="returned-results">
        <h3> Your Volunteer Opportunities </h3>
          <button >
          Save your results
          </button>
          <div>
            <SavedResults items={this.state.savedResults} />
          </div>
          <div className="search-results">
            {this.props.results.length > 0 ?
              this.props.results.map((item, idx) => (
                // item.checked = false
                <SearchResult item={item}
                              key={idx} 
                              handleCheckedItem={this.handleCheckedItem.bind(this)}
                              handleUncheckedItem={this.handleUncheckedItem.bind(this)} />
              )) : null }
          </div>
      </div>
    )
  }
}