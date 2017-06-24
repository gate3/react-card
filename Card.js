import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      raised:''
    }
  }

  lowerCard() {
    this.setState({
      raised:''
    })
  }

  raiseCard() {
    this.setState({
      raised:'card-raised'
    })
  }

  render = () => (
    <div className={'col-xs-12 card '+this.state.raised}
         onMouseLeave={this.lowerCard.bind(this)}
         onMouseEnter={this.raiseCard.bind(this)}
         style={{ display: (this.props.visible === true ? 'none' : ''), marginTop: "0px",marginBottom:"20px" }}>
         
         {this.props.children}

    </div>
  )
}

Card.PropTypes = {
  children:PropTypes.any
}

export default Card;
