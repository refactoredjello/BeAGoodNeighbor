import React from 'react'
import SearchResult from './SearchResult.jsx'

// these are the search results that will appear below the searchbar
// after a search has been made
export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedResults: [],
      checked: false,
      checkedBoxes: []
    }
  }

  handleInputChange(event) {
    this.setState({
      checked: !(this.state.checked)
    })
    .then(() => if (this.state.checked === true) {
      this.state.checkedBoxes.push(i)
    }
    )
  }

  handleCheckedResults(event) {

  }

  render() {
    return (
      <div className="returned-results">
        <h3> Your Volunteer Opportunities </h3>
          <button>
          Save your results
          </button>
          <div className="search-results">
            {this.props.results.length > 0 ?
              this.props.results.map((item, idx) => (
              // console.log(item);
                <SearchResult item={item}
                              key={idx} 
                              handleCheck={this.handleInputChange.bind(this)}/>
              )) : null }
          </div>
      </div>
    )
  }
} 