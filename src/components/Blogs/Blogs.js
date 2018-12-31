import React from 'react';
import PropTypes from 'prop-types';
import tutorialShape from '../../helpers/propz/tutorialShape';

import BlogItem from '../BlogItem/BlogItem';

class Blogs extends React.Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(tutorialShape),
    deleteSingleBlog: PropTypes.func,
  }

  render() {
    const { blogs, deleteSingleBlog } = this.props;
    const blogsItemComponents = blogs.map(blog => (
      <BlogItem
        blog={blog}
        key={blog.id}
        deleteSingleBlog={deleteSingleBlog}
      />
    ));
    return (
      <div className="blogs col">
        <h2>Blogs</h2>
        <ul>{blogsItemComponents}</ul>
      </div>
    );
  }
}

export default Blogs;
