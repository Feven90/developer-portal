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
      tutorials, deleteOne, blogs, deleteOneBlog,
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
              <Col sm="12">
                <Tutorials
          tutorials={tutorials}
          deleteSingleTutorial={deleteOne}
        />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Blogs</CardTitle>
                  <CardText>
                    <Blogs
          blogs={blogs}
          deleteSingleBlog={deleteOneBlog}
        />
        </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural
                    lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
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
