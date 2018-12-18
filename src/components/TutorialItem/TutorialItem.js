import React from 'react';
import './TutorialItem.scss';
import tutorialShape from '../../helpers/propz/tutorialShape';
import authRequests from '../../helpers/data/authRequests';

class TutorialItem extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleTutorial, tutorial } = this.props;
    deleteSingleTutorial(tutorial.id);
  }

  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (tutorial.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-default" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <li className="tutorial-item text-center">
        <span className="col-3">{tutorial.name}</span>
        <span className="col-7">{tutorial.url}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default TutorialItem;
