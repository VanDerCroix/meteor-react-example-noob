import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Mons } from '../api/mons.js';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Card from './Card.jsx';
import AppBar from './AppBar.jsx';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const entry = ReactDOM.findDOMNode(this.refs.textInputEntry).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.textInputName).value.trim();

    // Mons.insert({
    //   entry:  parseInt(entry,10),
    //   url: "mons/"+entry+".png",
    //   cp: 0,
    //   name: name,
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    // });
    Meteor.call('mons.insert', entry, name);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInputEntry).value = '';
    ReactDOM.findDOMNode(this.refs.textInputName).value = '';
  }

  renderTasks() {
    return this.props.mons.map((poke) => (
      <Card key={poke._id} poke={poke} />
    ));
  }

  render() {
    return (
    <div>
      <AppBar />

      <AccountsUIWrapper />

      { this.props.currentUser ?
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInputEntry"
            placeholder="Type pokemon entry id" />
            <input
              type="text"
              ref="textInputName"
              placeholder="Type pokemon name" />
          <button type="submit" >ADD</button>
        </form> : ''
      }


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
  Meteor.subscribe('mons');

  return {
    // mons: Mons.find({}).fetch(),
    mons: Mons.find({}, { sort: { entry: 1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
