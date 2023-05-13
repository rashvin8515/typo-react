import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleNav = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    {
      label: "Home",
      to: "/",
      dropdown: true,
      items: [
        { label: "Landing 1", to: "/index" },
        { label: "Landing 2", to: "/index-2" },
        { label: "Landing 3", to: "/index-3" },
      ],
    },
    {
      label: "Pages",
      to: "/",
      dropdown: true,
      items: [
        { label: "About Us", to: "/about-us-1" },
        { label: "About Us 2", to: "/about-us-2" },
        { label: "Team", to: "/team" },
        { label: "Team Single", to: "/team-single" },
        { label: "Pricing", to: "/pricing" },
        { label: "Faq", to: "/faq" },
        { label: "Sign In", to: "/login" },
        { label: "Sign Up", to: "/signup" },
        { label: "Maintenance", to: "/maintenance" },
        { label: "Coming Soon", to: "/coming-soon" },
        { label: "Error 404", to: "/error-404" },
      ],
    },
    {
      label: "Shop",
      to: "/",
      dropdown: true,
      items: [
        { label: "Product Grid", to: "/product-grid" },
        { label: "Product List", to: "/product-list" },
        { label: "Product Single", to: "/product-single" },
        { label: "Cart", to: "/product-cart" },
        { label: "Checkout", to: "/product-checkout" },
        { label: "Order Completed", to: "/order-complete" },
        { label: "Forgot Password", to: "/forgot-password" },
      ],
    },
    {
      label: "Features",
      to: "/",
      dropdown: true,
      items: [
        { label: "Blog", to: "/feature-blog" },
        { label: "Counter", to: "/feature-counter" },
        { label: "Accordion", to: "/feature-accordion" },
        { label: "Feature Box", to: "/feature-icon-box" },
        { label: "Hero Banner", to: "/feature-hero" },
        { label: "Price Table", to: "/feature-pricing" },
        { label: "Team", to: "/feature-team" },
        { label: "Testimonial", to: "/feature-testimonial" },
      ],
    },
    {
      label: "Blogs",
      to: "/",
      dropdown: true,
      items: [
        { label: "Blog Card", to: "/blog-card" },
        { label: "Blog Listing 1", to: "/blog-listing" },
        { label: "Blog Listing 2", to: "/blog-listing-2" },
        { label: "Blog Single", to: "/blog-single" },
      ],
    },
    {
      label: "Contact",
      dropdown: true,
      to: "/",
      items: [
        { label: "Contact 1", to: "/contact-us" },
        { label: "Contact 2", to: "/contact-us-2" },
      ],
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(navItems.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const newArray = [...dropdownOpen];
    newArray[index] = !newArray[index];
    setDropdownOpen(newArray);
  };

  return (
    <div className="">
      <header className="site-header">
        <div id="header-wrap">
          <Container className="container">
            <Row className="row">
              {/* <!--menu start--> */}
              <Col className="col">
                <Nav className="navbar navbar-expand-lg p-4 shadow bg-white">
                  <NavbarBrand href="/" className="navbar-brand logo">
                    <img src="images/logo.png" alt="" />
                  </NavbarBrand>

                  <NavbarToggler onClick={toggleNav} className="me-2" />
                  <Collapse className="navbar-collapse" isOpen={!isCollapsed}>
                    <Nav className="navbar-nav mx-auto">
                      {navItems.map((item, index) => (
                        <Dropdown
                          key={item.label}
                          nav
                          isOpen={dropdownOpen[index]}
                          toggle={() => toggleDropdown(index)}
                        >
                          <DropdownToggle nav caret>
                            {item.label}
                          </DropdownToggle>
                          <DropdownMenu>
                            {item.items.map((subItem) => (
                              <DropdownItem key={subItem.label} className="">
                                <Link
                                  to={subItem.to}
                                  style={{ color: "black" }}
                                  className="h-5"
                                >
                                  {subItem.label}
                                </Link>
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      ))}
                    </Nav>
                  </Collapse>

                  <div className="d-flex align-items-center">
                    <a className="login-btn btn-link" href="login.html">
                      <i className="bi bi-person me-2 fs-3 align-middle"></i>
                      Login
                    </a>
                    <div className="right-menu ms-4">
                      <Button
                        color="light"
                        className="navbar-toggler d-block border-0 p-3 bg-white shadow"
                        onClick={toggle}
                      >
                        <i className="bi bi-list-nested fs-3 text-dark"></i>
                      </Button>
                    </div>
                  </div>
                </Nav>
              </Col>
              {/* <!--menu end--> */}
            </Row>
          </Container>
        </div>
      </header>

      {/* <!--off canvas menu start--> */}
      <Offcanvas
        className="bg-dark"
        direction="end"
        isOpen={isOpen}
        toggle={toggle}
      >
        <OffcanvasHeader>
          <Button
            className="btn-close bg-transparent fs-1 ms-auto"
            onClick={toggle}
          >
            <i className="bi bi-x-octagon"></i>
          </Button>
        </OffcanvasHeader>
        <OffcanvasBody className="px-md-10 px-4 py-8">
          <img
            className="img-fluid side-logo mb-3"
            src="images/logo-white.png"
            alt=""
          />
          <p className="mb-0 text-white lead">
            Taypo - Multipurpose Bootstrap5 Template is Most PowerFull template
            2022 For Everyone, Start working with an company that provide
            everything you need to generate awareness.
          </p>
          <div className="form-info border-top border-dark pt-6 mt-6">
            <h5 className=" text-white border-bottom border-white d-inline-block">
              Contact info
            </h5>
            <ListGroup className="mt-4 bg-transparent px-0">
              <ListGroupItem className="mb-2 h6 text-light bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-geo-alt me-2"></i>
                423B, Road Wordwide Country, USA
              </ListGroupItem>
              <ListGroupItem className="mb-2 h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-telephone me-2"></i>
                <a className="text-light" href="tel:+912345678900">
                  +91-234-567-8900
                </a>
              </ListGroupItem>
              <ListGroupItem className="h6 bg-transparent px-0">
                <i className="text-primary fs-4 align-middle bi bi-envelope me-2"></i>
                <a className="text-light" href="mailto:themeht23@gmail.com">
                  themeht23@gmail.com
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div className="border-top border-dark pt-6 mt-6">
            <h5 className="text-white border-bottom border-white">
              Follow Us:
            </h5>
            <ListGroup className="mt-4 px-0" horizontal>
              <ListGroupItem className="me-2 bg-transparent px-0">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-facebook"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-dribbble"></i>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-instagram"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-twitter"></i>
                </Link>
              </ListGroupItem>

              <ListGroupItem className="me-2 bg-transparent px-2">
                <Link to="/" className="text-light fs-4">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Header;
