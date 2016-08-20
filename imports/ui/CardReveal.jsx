import React, { Component, PropTypes } from 'react';
import { Random } from 'meteor/random';

import { Mons } from '../api/mons.js';

export default class CardReveal extends Component {
  deleteThisTask() {
    Mons.remove(this.props.poke._id);
  }

  powerUp() {
    Mons.update(this.props.poke._id, {
      $set: { cp: this.props.poke.cp + Math.floor(Random.fraction() * 10) },
    });
  }

  render() {
    return (
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {this.props.poke.name}
          <i className="material-icons right">close</i>
        </span>

        <table>
			<tbody>
			  <tr>
			    <td></td>
			    <td>
					<a className="btn-floating btn-small yellow darken-1">
              		<i className="material-icons">mode_edit</i>
            		</a>
			    </td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>
			    	<a className="btn-floating btn-small green">
              		<i className="material-icons">functions</i>
            		</a>
			    </td>
			    <td></td>
			    <td>
    				<a className="btn-floating btn-small red"
    				onClick={this.deleteThisTask.bind(this)}>
      				<i className="material-icons">delete</i>
    				</a>
  				</td>
			  </tr>
			  <tr>
			    <td></td>
			    <td>
			    	<a className="btn-floating btn-small blue"
      				onClick={this.powerUp.bind(this)}>
      				<i className="material-icons">fitness_center</i>
            		</a>
			    </td>
			    <td></td>
			  </tr>
		  </tbody>
		</table>

        <p>more information.</p>

      </div>
    );
  }
}

CardReveal.propTypes = {
	poke: PropTypes.object.isRequired,
};
