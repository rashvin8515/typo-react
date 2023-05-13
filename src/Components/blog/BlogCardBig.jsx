import { Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const BlogCardBig = ({ imageSrc, date, category, title, description }) => {
  return (
    <Card className="p-4 border-0 shadow rounded-4 mb-4">
      <CardImg src={imageSrc} alt="Image" className="rounded-4 img-fluid" />
      <CardBody className="p-0 pt-4">
        <div>
          <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
            <i className="bi bi-calendar3 text-dark me-1"></i> {date}
          </div>
          <a className="d-inline-block btn-link" href="#">
            {category}
          </a>
        </div>
        <h2 className="h5 my-3">
          <Link to="/blog-single" className="link-title">
            {title}
          </Link>
        </h2>
        <p className="mb-0">{description}</p>
      </CardBody>
    </Card>
  );
};
export default BlogCardBig;
