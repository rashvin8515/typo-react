import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

function HeroBanner2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <section class="px-lg-10 pb-0 pt-5">
        <div className="overflow-hidden position-relative bg-light-3 z-index-1 rounded-4 py-10">
          <Container className="z-index-1">
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-8 mb-lg-0">
                <lottie-player
                  src="https://lottie.host/b14a820f-04dd-421a-8a4e-5ec6e1213216/wKVIQvfzPQ.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "auto", heigth: "auto" }}
                  loop
                  autoplay
                ></lottie-player>{" "}
              </Col>
              <Col xs={12} lg={6} className="ps-lg-8">
                <h1 className="font-w-6 mb-5">
                  Best Quality Services You Really Want.{" "}
                </h1>
                <p className="lead mb-6">
                  We're helped client to create your website with our talented
                  experts help you from Taypo..
                </p>
                <div>
                  <Button color="dark" className="me-3" href="contact-us.html">
                    Let's Get Started
                  </Button>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Nv7RgGpu6ME"
                    className="popup-youtube btn-link bg-white d-inline-block px-3 py-1 rounded-4 shadow"
                  >
                    <i className="bi bi-play-circle-fill text-primary me-2 fs-3 align-middle"></i>
                    Watch Video
                  </a> */}
                  <Popup
                    trigger={
                      <a
                        //href="https://www.youtube.com/watch?v=Nv7RgGpu6ME"
                        className="btn-link bg-white d-inline-block px-3 py-1 rounded-4 shadow"
                      >
                        <i className="bi bi-play-circle-fill text-primary me-2 fs-3 align-middle"></i>
                        Watch Video
                      </a>
                    }
                    modal
                    nested
                    closeOnDocumentClick
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          close
                        </button>
                        <div className="header"> Watch Video </div>
                        <div className="content">
                          <iframe
                            width="auto"
                            height="auto"
                            src="https://www.youtube.com/embed/Nv7RgGpu6ME"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="position-absolute animation-1 w-100">
            <lottie-player
              src="https://lottie.host/0de28702-1a29-48d3-892d-16f278889351/i4201FkTJi.json"
              background="transparent"
              speed="1"
              style={{ width: "auto", heigth: "auto" }}
              loop
              autoplay
            ></lottie-player>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner2;
