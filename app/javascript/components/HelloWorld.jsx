import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {

  printName() {
    return("The greeting is:" + this.props.greeting);
  }

  render () {
    return (
      <React.Fragment>
        { this.printName() }
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
