import React from 'react'

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  // handles when the checkbox is checked or unchecked
  handleCheck() {
    // changes state of checked to what it is not
    this.setState({
      checked: !(this.state.checked)
    }, function() {
      // if checked, add this item to the savedResults array
      if (this.state.checked === true) {
        this.props.handleCheckedItem(this.props.item)
      } else {
        // if unchecked, remove this item from savedResults array
        this.props.handleUncheckedItem(this.props.item)
      }   
    })
  }
  
  // displays the data components with their descriptions
  // down the line, we want to make radio buttons and a save button here
  // props = item, passed down from Results.jsx
  render() {
    return (
      <div className="result-component">
        <div className="radio">
          <label>
            <input type="checkbox" name="selectMe" 
            onChange={this.handleCheck.bind(this)} />
            Select this opportunity!
          </label>
        </div>
        <div>
        My state is {this.state.checked}
        </div>
        <div className="facility-name">
          {this.props.item.facility}
        </div>
        <div className="borough">
          {this.props.item.borough}
        </div>
        <div className="program">
          {this.props.item.program}
        </div>
        <div className="sponsor">
          {this.props.item.sponsor}
        </div>
        <div className="address">
          {this.props.item.address}
        </div>
        <div className="telephone">
          {this.props.item.telephone}
        </div>
      </div>
    )
  }
}