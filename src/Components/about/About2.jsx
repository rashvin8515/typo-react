import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function About2() {
  return (
    <div>
      <section className="py-4">
        <Container>
          <Row class="align-items-center">
            <Col xs={12} lg={6} className=" mb-lg-0 order-lg-1">
              <lottie-player
                src="https://lottie.host/f83a82e9-604e-4d44-9fcb-e889c7b5404b/EuPKpfBQSu.json"
                background="transparent"
                speed="1"
                // style="width: auto; height: auto;"
                loop
                autoplay
              ></lottie-player>
            </Col>
            <Col xs={12} lg={6} className="pt-10">
              <h6 class="border-bottom border-dark border-2 d-inline-block">
                About Us
              </h6>
              <h2 class="font-w-6">
                For Sites That Attention Better Experience
              </h2>
              <p class="lead mb-4">
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades incididunt aliqua.
              </p>
              <div class="d-flex align-items-start mb-3">
                <div class="me-3">
                  <i class="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 class="mb-2">Collaborate on ideas 7x faster</h6>
                  <p class="mb-0">
                    We provide the modern work way for business development.
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-start">
                <div class="me-3">
                  <i class="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 class="mb-2">Easy ways to implement</h6>
                  <p class="mb-0">
                    We provide the modern work way for business development.
                  </p>
                </div>
              </div>

              <Link class="btn btn-dark mt-6" to="/about-us">
                Learn More About
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About2;
