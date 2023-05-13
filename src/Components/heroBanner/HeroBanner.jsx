import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function HeroBanner1() {
  return (
    <div>
      <section className="overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="order-lg-1 ms-auto mb-8 mb-lg-0">
              <lottie-player
                src="https://lottie.host/3ddc0e30-a9f7-48e1-9b8d-a0ead2fa5ee4/JrQpGMHV6n.json"
                background="transparent"
                speed="1"
                style={{ width: "auto", height: "auto" }}
                loop
                autoplay
              ></lottie-player>
            </Col>
            <Col xs={12} lg={5}>
              <h1 className="font-w-4 mb-4">
                Build your
                <span className="title-bg text-primary position-relative font-w-7 d-inline-block">
                  Product
                </span>
                <br className="d-md-block d-none" /> with taypo.
              </h1>
              {/* <!-- Text --> */}
              <p className="lead text-dark mb-5">
                We're helped client to create your website with our talented
                experts.
              </p>
              <Form id="mc-form1" className="group">
                <FormGroup className="bg-light p-3 rounded-4 z-index-1 mb-0 d-flex align-items-center">
                  <Input
                    type="email"
                    //value=""
                    name="EMAIL"
                    className="email form-control border-0 shadow-sm me-2 bg-white"
                    id="mc-email1"
                    placeholder="Email Address"
                    required=""
                  />
                  <Button color="dark">Get Started</Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          {/* <!-- / .row --> */}
        </Container>
        {/* <!-- / .container --> */}
        <div className="position-absolute animation-1">
          <lottie-player
            src="https://lottie.host/0de28702-1a29-48d3-892d-16f278889351/i4201FkTJi.json"
            background="transparent"
            speed="1"
            style={{ width: "auto", height: "auto" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner1;
