/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import SocialMediaButtons from "components/Buttons/SocialMediaButtons";
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for checking out my portfolio!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <SocialMediaButtons 
                  color='instagram'
                  link='https://www.instagram.com/johnkatua99/'
                  icon='instagram'
                  description='Follow me'
                />
                <SocialMediaButtons 
                  color='facebook'
                  link='https://www.facebook.com/john.katua.180/'
                  icon='facebook-square'
                  description='Like me'
                />
                <SocialMediaButtons 
                  color='github'
                  link='https://github.com/johnkatua'
                  icon='github'
                  description='Star on Github'
                />
                <SocialMediaButtons 
                  color='linkedin'
                  link='https://www.linkedin.com/in/john-katua-7580a2194/'
                  icon='linkedin'
                  description='connect'
                />
              </Col>
            </Row>
            <hr />
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a>
                    John Katua
                  </a>
                  .
                </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
