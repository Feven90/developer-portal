import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="listings col">
       <label>Name:</label>
        <input type="input"></input>
       <label>Link:</label>
        <input type="input"></input>
       <input type="radio" id="tutorial" name="tutorial" value="tutorial"/>
        <label for="Tutorials">Tutorials</label>
        <input type="radio" id="blogs" name="blogs" value="blogs"/>
        <label for="Blogs">Blogs</label>
        <input type="radio" id="resources" name="resources" value="resources"/>
        <label for="Resources">Resources</label>
        <input type="radio" id="podcasts" name="podcasts" value="podcasts"/>
        <label for="Podcasts">Podcasts</label>
      </div>
    );
  }
}

export default Form;
