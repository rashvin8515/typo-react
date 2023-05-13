import React from "react";
import { Container, Row, Col } from "reactstrap";

function Maintenance() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <section className="vh-100 p-0">
          <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
              <Col lg="8">
                <lottie-player
                  src="https://lottie.host/fd0926ee-890d-43f8-abc9-34ffb1b2237a/uZ6bWkgUj1.json"
                  background="transparent"
                  speed="1"
                  //style="width: auto; height: auto;"
                  loop
                  autoplay
                ></lottie-player>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Maintenance;
