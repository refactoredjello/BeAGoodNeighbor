import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar.jsx'
import Results from './Results.jsx'
import SearchResult from './SearchResult.jsx'
import CommunityMap from './CommunityMap.jsx'
import axios from 'axios'

// main component with SearchBar and Results
// hardcode center of map cuz it is very hard
// to make a map with a moving center
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: {
        lat: 40.74796877343687,
        lng: -73.95113423486512
      },
      searchVal: '',
      results: []
    }
  }
  
  // changes state of the searchVal to the borough selected from dropdown
  handleSearchInput(search) {
    this.setState({ searchVal: search }, function() {
      // request data matching search value from DB
      axios.get(`/search?borough=${search}`) 
      .then((response) => {
        // set response to results
        this.setState({ results: response.data}, function() {
        });
      })
    })
  } 

  // setting up SearchBar, CommunityMap, and Results components
  // passing down the states from App.jsx to other components
  render() {
    return (
      <div>
        <div className="logo">
          <p className="five">Be A Good Neighbor</p>
        </div>
        <div className="mainBox">
          <div className="startButton">
            <p className="startButtonText">Get Started Now!</p>
          </div>
        </div>
        <div className="search-query">
          <SearchBar search={this.state.searchVal} 
          handleSearch={this.handleSearchInput.bind(this)} />
        </div>
        <div className="loaded-results">
          <CommunityMap results={this.state.results} 
            mapCenter={this.state.mapCenter}
            containerElement={<div style={{ height: `400px` }}/>}
            mapElement={<div style={{ height: `100%`}}/>}
            />
          <Results results={this.state.results} />
        </div>
        <div className="signature">
          <p>Coded and Designed By: Team Coruscant @ HRNYC11</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
