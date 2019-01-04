import './PortalNavbar.scss';
import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
} from 'reactstrap';
import Tutorials from '../Tutorials/Tutorials';
import Blogs from '../Blogs/Blogs';
import classnames from 'classnames';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const {
      tutorials, deleteSingleTutorial, blogs, deleteSingleBlog,
    } = this.props;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Blogs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
              <Card body>
                  <CardText>
                <Tutorials
          tutorials={tutorials}
          deleteSingleTutorial={deleteSingleTutorial}
        />
                  </CardText>
              </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardText>
                    <Blogs
          blogs={blogs}
          deleteSingleBlog={deleteSingleBlog}
        />
        </CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

// render(<ControlledTabs />);

// defined variable you will see in dom
// render() {
// const { isAuthed } = this.props.isAuthed;
//   const {
//     button, tutorials, clickEvent, deleteSingleTutorial,
//   } = this.props;
//   return (
//       <div className="my-navbar">
//        <Tabs>
//          <div label="Tutorials" onClick={clickEvent} >
//   <Tutorials tutorials={tutorials} deleteSingleTutorial={deleteSingleTutorial} />>
//  </div>
//  </Tabs>
//               <Tutorials tutorials={tutorials} deleteSingleTutorial={deleteSingleTutorial} />
//       </div>
//   );
// }
// }

export default Example;
