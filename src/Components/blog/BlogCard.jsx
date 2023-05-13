import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";

const BlogCard = ({ imageSrc, date, category, title, description }) => {
  return (
    <Card className="p-4 border-0 shadow rounded-4 mt-4">
      <Row>
        <Col md="5">
          <CardImg
            className="rounded-4 img-fluid h-100"
            src={imageSrc}
            alt="Image"
          />
        </Col>
        <Col md="7">
          <CardBody className="ps-0">
            <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
              <i className="bi bi-calendar3 text-dark me-1"></i> {date}
            </div>
            <div className="d-inline-block btn-link" href="#">
              {category}
            </div>
            <h2 className="h5 my-3">
              {/* <a className="link-title" href="blog-single.html">
                {title}
              </a> */}
              <Link to="/blog-single" className="link-title">
                {title}
              </Link>
            </h2>
            <p className="mb-0">{description}</p>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};
export default BlogCard;
