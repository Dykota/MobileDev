import React from 'react';
import './index.css';

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.props = "This is a Card";
  }

  render() {
    return(
      <div>
        <h1>{this.props}</h1>
      </div>
    );
  }

}

export default Card;
