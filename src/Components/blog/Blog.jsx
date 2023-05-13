import React from "react";
import BlogCard from "./BlogCard";
import BlogCardBig from "./BlogCardBig";
import { Col, Container, Row } from "reactstrap";

function Blog() {
  const blogData = [
    {
      imageSrc: "images/blog/02.jpg",
      date: "October 30, 2022",
      category: "Sass",
      title: "10 Simple Practices That Will Help You Get Better",
      description:
        "Highly at nisi nam vestibulum ut eget vitae always made uniquely",
    },
    {
      imageSrc: "images/blog/03.jpg",
      date: "October 30, 2022",
      category: "Sass",
      title: "Made World-Class Design With Taypo products",
      description:
        "Highly at nisi nam vestibulum ut eget vitae always made uniquely",
    },
  ];

  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-end mb-6">
            <Col xs={12} md={12} lg={6} className="my-lg-0">
              <div>
                <h2 class="mb-0">From Our Blog List Latest News & Article</h2>
              </div>
            </Col>
            <Col xs={12} md={12} lg={5} className="ms-auto">
              <p class="lead mb-0">
                Advanced cameras combined with a large display, fast
                performance, and highly calibrated sensors have always made
                uniquely capable.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={12} lg={5} className="mb-5 mb-lg-0">
              <BlogCardBig
                imageSrc="images/blog/01.jpg"
                date="October 30, 2022"
                category="Business"
                title="Create Stunning Websites Like a Pro With Taypo"
                description="Highly at nisi nam vestibulum ut eget vitae sed. Potenti aliquam feugiat proin facilisi. ac nunc always made uniquely calibrated."
              />
            </Col>
            <Col xs={12} lg={7} className="mb-5 mb-lg-0">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  imageSrc={blog.imageSrc}
                  date={blog.date}
                  category={blog.category}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Blog;
