import React from 'react';
import './PortalNavbar.scss';
import { Tabs } from 'reactstrap';
import Tutorials from '../Tutorials/Tutorials';

class PortalNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  state = {
    activeTab: '1',
  };


toggle = (tab) => {
  if (this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab,
    });
  }
};

// defined variable you will see in dom
render() {
  // const { isAuthed } = this.props.isAuthed;
  const {
    button, tutorials, clickEvent, deleteSingleTutorial,
  } = this.props;
  return (
      <div className="my-navbar">
       <Tabs>
         <div label="Tutorials" onClick={clickEvent} >
  <Tutorials tutorials={tutorials} deleteSingleTutorial={deleteSingleTutorial} />>
 </div>
 </Tabs>
              <Tutorials tutorials={tutorials} deleteSingleTutorial={deleteSingleTutorial} />
      </div>
  );
}
}

export default PortalNavbar;
