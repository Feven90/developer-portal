import React from 'react';
// import './TutorialItem.scss';
import tutorialShape from '../../helpers/propz/tutorialShape';
import authRequests from '../../helpers/data/authRequests';

class BlogItem extends React.Component {
  static propTypes = {
    blog: tutorialShape,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleBlog, blog } = this.props;
    deleteSingleBlog(blog.id);
  }

  render() {
    const { blog } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (blog.uid === uid) {
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
        <span className="col-3">{blog.name}</span>
        <span className="col-7">{blog.url}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default BlogItem;
