import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from "reactstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const portfolioItems = [
    {
      category: "webDesign",
      imgSrc: "images/portfolio/01.jpg",
      title: "Social Marketing",
    },
    {
      category: "appDesign",
      imgSrc: "images/portfolio/02.jpg",
      title: "Web Development",
    },
    {
      category: "branding",
      imgSrc: "images/portfolio/03.jpg",
      title: "Design Work",
    },
    {
      category: "appDesign",
      imgSrc: "images/portfolio/04.jpg",
      title: "App Management",
    },
    {
      category: "branding",
      imgSrc: "images/portfolio/05.jpg",
      title: "Hosting Service",
      type: "webDesign",
    },
  ];

  const filteredPortfolioItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const prevSrc =
    filteredPortfolioItems[
      (photoIndex + filteredPortfolioItems.length - 1) %
        filteredPortfolioItems.length
    ].imgSrc;
  const nextSrc =
    filteredPortfolioItems[(photoIndex + 1) % filteredPortfolioItems.length]
      .imgSrc;

  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-end mb-8">
            <Col xs="12" lg="5">
              <h2 className="mb-5 mb-lg-0">
                Some of our Creative & Finest Work.
              </h2>
            </Col>
            <Col xs="12" lg="6" className="ms-auto">
              <div className="portfolio-filter d-sm-flex align-items-center justify-content-lg-end">
                <Nav>
                  <Button
                    className={activeTab === "all" ? "is-checked" : ""}
                    onClick={() => handleTabClick("all")}
                  >
                    All
                  </Button>
                  <Button
                    // class="mb-2 mb-sm-0"
                    className={activeTab === "webDesign" ? "is-checked" : ""}
                    onClick={() => handleTabClick("webDesign")}
                  >
                    Web Design
                  </Button>
                  <Button
                    className={activeTab === "appDesign" ? "is-checked " : ""}
                    onClick={() => handleTabClick("appDesign")}
                  >
                    App Design
                  </Button>
                  <Button
                    className={activeTab === "branding" ? "is-checked" : ""}
                    onClick={() => handleTabClick("branding")}
                  >
                    Branding
                  </Button>
                </Nav>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredPortfolioItems.map((item, index) => (
              <Col key={index} lg="4" md="6" className="mb-5">
                <div className="hover-translate position-relative bg-white shadow p-3 rounded-4">
                  <img
                    className="img-fluid w-100 rounded-4"
                    src={item.imgSrc}
                    alt=""
                  />
                  <div className="portfolio-title d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="mb-2">{item.category}</small>
                      <h6 className="mb-0">
                        <Link className="btn-link" to={"/portfolio-single"}>
                          {item.title}
                        </Link>
                      </h6>
                    </div>
                    {/* <a className="popup-img btn-link" href={item.imgSrc}>
                      <i className="bi bi-patch-plus fs-4"></i>
                    </a> */}
                    <a
                      className="popup-img btn-link"
                      href={item.imgSrc}
                      onClick={(e) => {
                        e.preventDefault();
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <i className="bi bi-patch-plus fs-4"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={filteredPortfolioItems[photoIndex].imgSrc}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredPortfolioItems.length - 1) %
                filteredPortfolioItems.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredPortfolioItems.length)
          }
        />
      )}
    </div>
  );
}

export default Portfolio;
