import React, { Component, PropTypes } from 'react';

export default class CardReveal extends Component {
  render() {
    return (
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Nombre: {this.props.poke.name}
              <i className="material-icons right">close</i>
            </span>

            <table>
							<tbody>
							  <tr>
							    <td></td>
							    <td>
										<a className="btn-floating btn-small yellow darken-1">
				              <i className="material-icons">star</i>
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
							    <td>$0.87</td>
							  </tr>
							  <tr>
							    <td></td>
							    <td>
							    	<a className="btn-floating btn-small blue">
				              <i className="material-icons">memory</i>
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