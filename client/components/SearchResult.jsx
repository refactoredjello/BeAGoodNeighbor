import React from 'react'

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
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
            checked={this.props.checked} 
            onChange={this.props.handleCheck} />
            Select this opportunity!
          </label>
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