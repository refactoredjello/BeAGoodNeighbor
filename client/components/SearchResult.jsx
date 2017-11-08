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
        <div className="facility-name">
        {props.item.facility}
        </div>
        <div className="borough">
        {props.item.borough}
        </div>
        <div className="program">
        {props.item.program}
        </div>
        <div className="sponsor">
        {props.item.sponsor}
        </div>
        <div className="address">
        {props.item.address}
        </div>
        <div className="telephone">
        {props.item.telephone}
        </div>
      </div>
    )
  }
}