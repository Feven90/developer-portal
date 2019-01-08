import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShape';

import PodcastItem from '../PodcastItem/PodcastItem';

// import './Tutorials.scss';

class Podcasts extends React.Component {
  static propTypes = {
    tutorials: PropTypes.arrayOf(tutorialShape),
    deleteSinglePodcast: PropTypes.func,
  }

  render() {
    const { podcasts, deleteSinglePodcast } = this.props;
    const podcastItemComponents = podcasts.map(podcast => (
      <PodcastItem
        podcast={podcast}
        key={podcast.id}
        deleteSinglePodcast={deleteSinglePodcast}
      />
    ));
    return (
      <div className="tutorials col">
        <ul>{podcastItemComponents}</ul>
      </div>
    );
  }
}

export default Podcasts;
