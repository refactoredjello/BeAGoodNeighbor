import React from 'react'

// this is where someone will make a search
export default class SearchBar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchVal: 'Manhattan'
    }
  }
  
  // upon clicking the 'Search' button, the SearchBar's state
  // changes to the inputted value
  handleNewInput(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.searchVal);
    // console.log(this.state.searchVal)
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
        <form onSubmit={this.handleNewInput.bind(this)}>
          <label>
          Pick your borough:
          <select value={this.state.searchVal} onChange={this.handleChange.bind(this)}>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
            <option value="All">All</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}