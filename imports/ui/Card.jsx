import React, { Component, PropTypes } from 'react';


import CardReveal from './CardReveal.jsx';

// Card component - represents a single todo item
export default class Card extends Component {

  render() {

    return (
      <div className="col s6 m3 l3">
        <div className="card sticky-action hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.poke.url} />
            <span className="card-title black-text"></span>
          </div>

          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              <i className="material-icons right">more_vert</i>
            </span>
            {this.props.poke.name}
          </div>

          <div className="card-action">
            Entry: {this.props.poke.entry}<br />
            CP: {this.props.poke.cp}<br />
            Owner: {this.props.poke.username}
          </div>

          <CardReveal poke={this.props.poke} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  poke: PropTypes.object.isRequired,
};
