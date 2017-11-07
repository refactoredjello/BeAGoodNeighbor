import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar.jsx'
import Results from './Results.jsx'

// main component with SearchBar and Results
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchVal: ''
		}
	}
  
  // changes state of the searchVal
	handleSearchInput(search) {
		this.setState({
			searchVal: search
		}, function(err, searchVal) {
			if (err) console.error(err)
			console.log(this.state.searchVal)
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
          <Results />
        </div>
      </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
