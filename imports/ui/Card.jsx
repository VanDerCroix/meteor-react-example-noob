import React, { Component, PropTypes } from 'react';

import { Mons } from '../api/mons.js';

import CardReveal from './CardReveal.jsx';

// Card component - represents a single todo item
export default class Card extends Component {

  deleteThisTask() {
    Mons.remove(this.props.poke._id);
  }

  render() {

    return (
      <div className="col s6 m3 l3">
        <div className="card hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.poke.url} />
            <span className="card-title black-text">{this.props.poke.entry}</span>
          </div>

          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.poke.name}
              <i className="material-icons right">more_vert</i>
            </span>
          </div>


            <a className="btn-floating btn-small red" style={{bottom:"10px"}}
              onClick={this.deleteThisTask.bind(this)}>
              <i className="material-icons">delete</i>
            </a>

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
