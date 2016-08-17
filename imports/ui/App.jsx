import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { HTTP } from 'meteor/http';

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

  renderJData() {
    var url = 'http://pokeapi.co/api/v2/pokemon/1/';
    var result = {};
    Meteor.call('GetUrlData',{url:url}, function(err, res) {
      if(res.statusCode=='200'){
        console.log('json data ok');
        result = res;
      }
    });

    return (
      <div>
        <h1>json data: TODO: add json data retrieved and place them correctly</h1>
      </div>
    );
  }


  render() {
    return (
    <div>
      <AppBar />

      <div className="container">
        <div className="row">
          {this.renderTasks()}
        </div>

        <div className="row">
          {this.renderJData()}
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
