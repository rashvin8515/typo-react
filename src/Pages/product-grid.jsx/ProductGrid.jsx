import React, { useState, useEffect } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomPagination from "../../Components/pagination";
import SideBar from "../../Components/sidebar/SideBar";

function ProductGrid() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products.allProducts);
  //console.log("all", allProducts);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const filters = useSelector((state) => state.products.filters);

  // useEffect(() => {
  //   // Fetch products from API or JSON here and dispatch setProducts action
  //   // const products = [];
  //   // dispatch(setProducts(products));
  //   console.log("filters", filters);
  //   console.log("all ", filteredProducts);
  // }, [filters]);

  const firstBreadcrumb = { label: "Pages", link: "/product-grid" };
  const secondBreadcrumb = {
    label: "Product Grid",
    link: "/product-grid",
    active: true,
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (activePage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Product Grid"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div class="page-content">
        <Container>
          <Row className="mb-5">
            <Col>
              <Card className="border p-3 rounded">
                <Row className="align-items-center">
                  <Col md="5" className="mb-3 mb-md-0">
                    <CardText tag="span" className="text-muted">
                      Showing 1 to {productsToShow.length} of
                      {filteredProducts.length}
                    </CardText>
                  </Col>
                  <Col
                    md="7"
                    className="d-flex align-items-center justify-content-md-end"
                  >
                    <div className="me-3">
                      <Link
                        to="/product-grid"
                        className="active align-middle me-2 text-primary"
                      >
                        <i className="fs-3 bi bi-grid-3x2"></i>
                      </Link>
                      <Link to="/product-list" className="text-dark">
                        <i className="fs-3 bi bi-card-list"></i>
                      </Link>
                    </div>
                    <div className="sort-filter ms-3 d-flex align-items-center">
                      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle
                          caret
                          className="bg-transparent text-dark  ms-3"
                        >
                          Sort By
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Newest Item</DropdownItem>
                          <DropdownItem>Populer</DropdownItem>
                          <DropdownItem>Best Match</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={9} md={12} className="order-lg-1">
              <Row className="text-center">
                {productsToShow.map((product) => (
                  <Col lg="4" md="6" className="mt-5">
                    <Card
                      className="shadow rounded-4 p-4"
                      key={product.id}
                      onClick={() => navigate(`/product-single/${product.id}`)}
                    >
                      <img
                        class="img-fluid rounded-4"
                        src={product.image}
                        alt=""
                      />
                      <CardBody>
                        <CardTitle>
                          <Link
                            //to="/product-single/${product.id}"
                            className="mt-4 mb-2 d-block link-title h6"
                          >
                            {product.name}
                          </Link>
                          <button
                            onClick={() => {
                              console.log("fnd", product);
                            }}
                          >
                            {product.name}
                          </button>
                        </CardTitle>
                        <span className="product-price text-dark">
                          <del className="text-muted mr-2">
                            ${product.price}
                          </del>
                          <span style={{ marginLeft: "2px" }}>
                            ${product.salePrice}
                          </span>
                        </span>
                        <div className="product-link mt-3">
                          <Link
                            style={{ marginRight: "3px" }}
                            className="add-cart"
                            to="/add-to-cart"
                          >
                            <i className="bi bi-bag-check me-2"></i>Add To Cart
                          </Link>
                          <Link className="wishlist-btn" to="/product-grid">
                            <i className="bi bi-bag-heart"></i>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
                <Row
                  className="mt-5"
                  style={{ display: "inline-grid", justifyContent: "center" }}
                >
                  <CustomPagination
                    activePage={activePage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </Row>
              </Row>
            </Col>
            <Col lg={3} md={12}>
              <SideBar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProductGrid;
