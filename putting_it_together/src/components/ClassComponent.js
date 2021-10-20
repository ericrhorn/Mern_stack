import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageAgain: this.props.age,
    };
  }

  render() {
    const { firstName, lastName, hair } = this.props;

    return (
      <div>
        <h1>
          {firstName}, {lastName}
        </h1>
        <p>Age: {this.state.ageAgain}</p>
        <p>hari: {hair}</p>
        <button
          onClick={() => this.setState({ ageAgain: this.state.ageAgain + 1 })}
        >
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
