import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section class="p-0">
        <Container>
          <Row class="row">
            <Col class="col-12">
              <div
                class="bg-dark p-4 p-lg-10 rounded-4 text-center"
                data-bg-img="images/bg/01.png"
              >
                <h2 class="text-white mb-0 font-w-7">
                  500k Customer Have <br />
                  Build a stunning site today.
                </h2>
                <p class="text-light my-4">
                  We help our clients succeed by creating brand identities.
                </p>

                <Link to="contact-us" className="btn btn-primary">
                  Let's Get Started
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
