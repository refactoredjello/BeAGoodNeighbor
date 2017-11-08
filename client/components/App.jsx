import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar.jsx'
import Results from './Results.jsx'
import SearchResult from './SearchResult.jsx'
import CommunityMap from './CommunityMap.jsx'
import axios from 'axios'

// main component with SearchBar and Results
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      results: []
    }
  }
  
  // changes state of the searchVal
  // NOTE: we need a special request for ALL since there will be No Filter
  handleSearchInput(search) {
    // console.log(this.state.searchVal)
    this.setState({ searchVal: search }, function() {
      // change path to wherever data is
      axios.get(`/searchInput?borough=${search}`) 
      .then(function(response) {
        this.setState({results: response});
      })
    })  
  }

  render() {
    return (
      <div>
        <div className="logo">
          <label>
          BeAGoodNeighbor Today!
          </label>
        </div>
        <div className="search-query">
          <SearchBar search={this.state.searchVal} 
          handleSearch={this.handleSearchInput.bind(this)} />
        </div>
        <div className="loaded-results">
          <CommunityMap results={this.state.results} />
          <Results results={this.state.results} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
