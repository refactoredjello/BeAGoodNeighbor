import React from 'react'

export default class SavedResults extends React.Component {
  
  // displays the data components with their descriptions
  // down the line, we want to make radio buttons and a save button here
  // props = item, passed down from Results.jsx
  render() {
    return (
      <div className="saved-search-component">
        <div className="facility-name">
          Facility: {this.props.item.facility}
        </div>
        <div className="borough">
          Borough: {this.props.item.borough}
        </div>
        <div className="program">
          Program: {this.props.item.program}
        </div>
        <div className="sponsor">
          Sponsor: {this.props.item.sponsor}
        </div>
        <div className="address">
          Address: {this.props.item.address}
        </div>
        <div className="telephone">
          Telephone: {this.props.item.telephone.length <= 1 ?
          "No number provided" :  this.props.item.telephone}
        </div>
      </div>
    )
  }
}