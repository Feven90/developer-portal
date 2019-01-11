import React from 'react';
// import './TutorialItem.scss';
import tutorialShape from '../../helpers/propz/tutorialShape';
import authRequests from '../../helpers/data/authRequests';

class PodcastItem extends React.Component {
  static propTypes = {
    tutorial: tutorialShape,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePodcast, podcast } = this.props;
    deleteSinglePodcast(podcast.id);
  }

  render() {
    const { podcast } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (podcast.uid === uid) {
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
      return <span className="col space"></span>;
    };
    return (
      <li className="tutorial-item text-center">
        <span className="col-2">{podcast.name}</span>
        <span className="col-7">{podcast.url}</span>
        {makeButtons()}
        <input type="checkbox"></input>
        <label>Done</label>
      </li>
    );
  }
}

export default PodcastItem;
