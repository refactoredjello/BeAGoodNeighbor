import React from 'react'

// this is where someone will make a search
export default class SearchBar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    }
  }
  
  // upon clicking the 'Search' button, the SearchBar's state
  // changes to the inputted value
  handleNewInput(event) {
    event.preventDefault();
    this.props.handleSearchInput(this.state.searchVal);
  }
  
  // this allows you the change the state upon typing
  handleChange(event) {
    this.setState({
      searchVal: event.target.value
    })
  }

  render() {
    return (
      <div className="search-bar-input">
        <input 
          type="text"
          placeholder="Search for your borough here!"
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleNewInput.bind(this)}>
          Search
        </button>
      </div>
    )
  }
}
