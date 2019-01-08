import './PortalNavbar.scss';
import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
} from 'reactstrap';
import Tutorials from '../Tutorials/Tutorials';
import Blogs from '../Blogs/Blogs';
import Podcasts from '../Podcasts/Podcasts';
import classnames from 'classnames';

class TabsComponent extends React.Component {
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
      deleteSinglePodcast, podcasts,
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
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Podcasts
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="15">
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
              <Col sm="15">
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
          <TabPane tabId="3">
            <Row>
              <Col sm="15">
                <Card body>
                  <CardText>
                    <Podcasts
          podcasts={podcasts}
          deleteSinglePodcast={deleteSinglePodcast}
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

export default TabsComponent;
