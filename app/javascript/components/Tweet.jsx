import React from "react"
import PropTypes from "prop-types"

export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle orange">person_pin</i>
        <span className="title">{ this.props.name }</span>
        <p>{ this.props.body }</p>
      </li>
    )
  }
}
