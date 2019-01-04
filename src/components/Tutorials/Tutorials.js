import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShape';

import TutorialItem from '../TutorialItem/TutorialItem';

import './Tutorials.scss';

class Tutorials extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialShape),
    deleteSingleTutorial: PropTypes.func,
  }

  render() {
    const { tutorials, deleteSingleTutorial } = this.props;
    const tutorialsItemComponents = tutorials.map(tutorial => (
      <TutorialItem
        tutorial={tutorial}
        key={tutorial.id}
        deleteSingleTutorial={deleteSingleTutorial}
      />
    ));
    return (
      <div className="tutorials col">
        <ul>{tutorialsItemComponents}</ul>
      </div>
    );
  }
}

// class TutorialButton extends React.Component {
//   render() {
//     const { buttons } = this.props;
//     const tutorialEvent = (e) => {
//       e.preventDefault();
//     };

//     return (
//       <div className="buttons col">
//         <button onClick={tutorialEvent}>Tutorials</button>
//         {buttons}
//       <Tutorials />
//       </div>
//     );
//   }
// }

export default Tutorials;
