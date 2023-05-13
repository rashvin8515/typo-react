import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Footer() {
  const socialMedia = [
    { icon: "bi-facebook", link: "/index" },
    { icon: "bi-dribbble", link: "/index" },
    { icon: "bi-instagram", link: "/index" },
    { icon: "bi-tweeter", link: "/index" },
    { icon: "bi-linkedin", link: "/index" },
  ];
  return (
    <div>
      <footer className="py-11 position-relative overflow-hidden">
        <Container className="z-index-1">
          <Row>
            <Col md={12} lg={4} className="pe-lg-7">
              <Link class="footer-logo" to="index">
                <img class="img-fluid" src="images/logo.png" alt="" />
              </Link>
              <p class="my-4">
                Taypo Multipurpose Bootstrap5 Template Is fully responsible,
                Build whatever you like with the Taypo, Taypo is the creative
                Template suitable for Your business.
              </p>
              <ul className="media-icon list-unstyled">
                <ListGroupItem className="mb-2">
                  <Link to="mailto:themeht23@gmail.com" className="h6">
                    themeht23@gmail.com
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="tel:+912345678900" className="h6">
                    +91-234-567-8900
                  </Link>
                </ListGroupItem>
              </ul>
            </Col>

            <Col md={6} lg={2} className="mt-6 mt-lg-0 ">
              <h5 className="mb-4">Our Link</h5>
              <Nav className="navbar-nav list-unstyled mb-0">
                <NavItem className="mb-3">
                  <Link to="about-us-1" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="team" className="nav-link">
                    Team
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="blog-card" className="nav-link">
                    Blogs
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="contact-us" className="nav-link">
                    Contact Us
                  </Link>
                </NavItem>
              </Nav>
            </Col>

            <Col md={6} lg={2} className="mt-6 mt-lg-0 footer-menu">
              <h5 className="mb-4">Legal</h5>
              <Nav className="navbar-nav list-unstyled mb-0">
                <NavItem className="mb-3">
                  <Link to="faq" className="nav-link">
                    Faq
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="faq" className="nav-link">
                    Product Grid
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="terms-and-conditions" className="nav-link">
                    Term Of Service
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="privacy-policy" className="nav-link">
                    Privacy Policy
                  </Link>
                </NavItem>
              </Nav>
            </Col>
            <Col md={8} lg={4} className="mt-6 mt-lg-0">
              <h5 class="mb-4">Our Address</h5>
              <h6 class="mb-3 text-muted">423B, Road Wordwide Country, USA </h6>

              <ul horizontal className="list-inline  mb-3">
                {socialMedia.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="list-inline-item"
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <Link to={item.link} className="text-dark fs-3">
                      <item.icon />
                      <i className={`bi ${item.icon}`}></i>
                    </Link>
                  </ListGroupItem>
                ))}
              </ul>
              <div class="subscribe-form">
                <p class="mb-3 font-w-6 text-primary">Sign Up For Newsletter</p>
                <form
                  id="mc-form"
                  class="d-flex align-items-center shadow p-2 rounded bg-white"
                >
                  <input
                    type="email"
                    // value=""
                    name="EMAIL"
                    class="email form-control bg-light border-0 me-2"
                    id="mc-email"
                    placeholder="Enter your email address"
                    required=""
                  />
                  <input
                    class="btn btn-dark"
                    type="submit"
                    name="subscribe"
                    value="Subscribe"
                  />
                </form>
              </div>
            </Col>
          </Row>
          <Row className="mt-7">
            <Col className="text-center text-dark">
              Copyright 2022 Taypo Theme by
              <u>
                <a href="#">ThemeHt</a>
              </u>
              | All Rights Reserved
            </Col>
          </Row>
        </Container>
        <div class="position-absolute animation-1 opacity-1">
          <lottie-player
            src="https://lottie.host/dc3f8a9d-b6c0-4c1a-ba22-138d2d9240e3/jKmAYbusnp.json"
            background="transparent"
            speed="1"
            style={{ width: "auto", height: "auto" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
