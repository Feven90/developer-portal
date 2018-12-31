import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShape';

import TutorialItem from '../TutorialItem/TutorialItem';


class Buttons extends React.Component {
  render() {
    // const { buttons } = this.props;
    return (
      <div className="buttons col">
        <button>Tutorials</button>
        <button>Blogs</button>
        <button>Resources</button>
        <button>Podcasts</button>
      </div>
    );
  }
}

export default Buttons;
