import React from 'react'
import SearchResult from './SearchResult.jsx'
import SavedResults from './SavedResults.jsx'


// these are the search results that will appear below the searchbar
// after a search has been made
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedResults: [],
      serverSaved: [],
      isSavedShown: false,
      isSavedPressed: false
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

  // if the item is checked, push the item id into the savedResults array
  handleCheckedItem(item) {
    this.setState((prevState) => {
      console.log(prevState)
      var tempArr = prevState.savedResults.slice();
      tempArr.push(item.id)
      // console.log(tempArr)
      return { savedResults: tempArr }
    })
  }

  // when the save button is clicked, send a list of ids of the items to the server. 
  // On response, set the state of the this equal to the response, which should be an an array of items. 
  handleSave() {
    this.setState({isSavedPressed: true})
    if (this.state.serverSaved.length > 0) {
      axios.post('/saved', {saved: this.state.savedResults})
      .then((response) => {
        this.setState({serverSaved: response.data} )
        // this.setState({isSavedShown: true})
      })
      .catch((err) => console.log(err))
    } 
  }
  // className="saved-results": if savedResults has any items in it and isSavedShown 
  // is true, render the saved results to the page
  // className="search-results": maps over all values from the search and creates a 
  // search result element for each returned item. Each item has it's own checkbox, which
  // sets the state upon being clicked
  render() {
    return (
      <div className="returned-results">
        <h3> Your Volunteer Opportunities </h3>
          {this.state.isSavedPressed && !this.state.savedResults.length ? <span className="noneChecked">Please select a community</span> : null}
          <button onClick={this.handleSave.bind(this)} >
          Save your results
          </button>
          <div>
            <div className="saved-results">
              <div className="saved-label">
              {this.state.serverSaved.length > 0 ?
                <h3>Saved Results</h3> : null }
              </div> 
              {(this.state.serverSaved.length > 0) ?
                this.state.serverSaved.map((item, idx) => (
                  <SavedResults item={item}
                                key={idx} 
                  />
                )) : null }
            </div>
          </div>
          <div className="search-results">
            {this.props.results.length > 0 && !this.state.serverSaved.length ?
              this.props.results.map((item, idx) => (
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