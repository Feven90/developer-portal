import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShape';

import TutorialItem from '../TutorialItem/TutorialItem';


class Buttons extends React.Component {
  render() {
    // const { buttons } = this.props;
    const tutorialEvent = (e) => {
      e.preventDefault();
      const { tutorial } = this.props;
    };

    return (
      <div className="buttons col">
        <button onClick={this.tutorialEvent}>Tutorials</button>
      </div>
    );
  }
}

export default Buttons;
