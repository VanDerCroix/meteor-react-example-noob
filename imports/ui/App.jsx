import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Mons } from '../api/mons.js';

import Card from './Card.jsx';
import AppBar from './AppBar.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.mons.map((poke) => (
      <Card key={poke._id} poke={poke} />
    ));
  }

  render() {
    return (
    <div>
      <AppBar />

      <div className="container">
        <div className="row">
          {this.renderTasks()}
        </div>
      </div>
    </div>
    );
  }
}

App.propTypes = {
  mons: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    mons: Mons.find({}).fetch(),
  };
}, App);
