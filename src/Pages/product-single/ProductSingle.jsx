import React, { useState } from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import {
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductSingle() {
  const { id } = useParams();
  //   console.log("id", id);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const firstBreadcrumb = { label: "Pages", link: "/product-single" };
  const secondBreadcrumb = {
    label: "Product Single",
    link: "/product-single",
    active: true,
  };
  const product = filteredProducts.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Product Single"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <div className="page-content">
        <section>
          {product ? (
            <Container>
              <Row className="align-items-center">
                <Col lg={5} md={6}>
                  <img
                    className="img-fluid w-100 rounded-4"
                    src={`../../${product.image}`}
                    alt={product.name}
                  />
                </Col>
                <Col lg={7} md={6} className=" mt-5 mt-md-0">
                  <div className="product-details">
                    <h3> {product.name} </h3>
                    <div className="product-price my-4">
                      <span className="product-price text-dark">
                        <del className="text-muted">${product.price}</del> $
                        {product.salePrice}
                      </span>
                      <span className="text-primary">
                        {Array.from({ length: product.rating }).map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <span className="text-dark"> Availibility: </span>{" "}
                        {product.stock}
                      </li>
                      <li>
                        <span className="text-dark"> Categories :</span>{" "}
                        {product.category}'s
                      </li>
                    </ul>
                    <p>{product.description}</p>
                    <Row className="my-4">
                      <Col lg={5} md={6}>
                        <FormGroup>
                          <h6>Size</h6>
                          <Input type="select" name="size" id="size">
                            <option value="">Size</option>
                            {product.size.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg={7} sm={6} className=" mt-3 mt-sm-0">
                        <h6>Color</h6>
                        <div className="d-flex">
                          {product.colors.map((color) => (
                            <div className="form-check pl-2">
                              <input
                                type="radio"
                                value={color}
                                className="form-check-input"
                                id={color}
                                style={{
                                  background: color,
                                  width: "24px",
                                  height: "24px",
                                  //   border:
                                  //     filters.colors === color
                                  //       ? "4px solid red" // Use red border if filters.colors matches with color
                                  //       : "4px solid #ccc", // Use default gray border otherwise
                                  paddingLeft: "2px",
                                  borderRadius: "0",
                                }}
                                //   checked={filters.colors === color}
                                //   onChange={() => handleColorClick(color)}
                              />
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                    <FormGroup className="d-flex align-items-center">
                      <h6>Quantity</h6>
                      <div className="d-flex align-items-center pr-2">
                        <Button
                          className="btn-product btn-product-up"
                          onClick={() => {
                            if (quantity > 1) setQuantity(quantity - 1);
                          }}
                        >
                          <i className="bi bi-dash-lg"></i>
                        </Button>
                        <Input
                          className="form-product"
                          type="number"
                          name="form-product"
                          value={quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (
                              newQuantity >= 1 &&
                              newQuantity <= product.stock
                            ) {
                              setQuantity(newQuantity);
                            }
                          }}
                          max={product.stock}
                        />
                        <Button
                          className="btn-product btn-product-down"
                          onClick={() => {
                            console.log(Number(product.stock));
                            if (quantity < product.stock)
                              setQuantity(quantity + 1);
                          }}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </Button>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row className="align-items-center">
                <Col lg={5} md={6}>
                  <img
                    className="img-fluid w-100 rounded-4"
                    src={`../../images/product/01.jpg`}
                    alt={"Women Lather Jacket"}
                  />
                </Col>
                <Col lg={7} md={6} className=" mt-5 mt-md-0">
                  <div className="product-details">
                    <h3> Women Lather Jacket </h3>
                    <div className="product-price my-4">
                      <span className="product-price text-dark">
                        <del className="text-muted">$ 3500</del> $ 2500
                      </span>
                      <span className="text-primary">
                        {/* {Array.from({ length: product.rating }).map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))} */}
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-2">
                        <span className="text-dark"> Availibility: </span> 32
                      </li>
                      <li>
                        <span className="text-dark"> Categories :</span> Women's
                      </li>
                    </ul>
                    <p>
                      Adjustable and removable wide shoulder strap. Lined
                      interior. Magnetic clasp closure.
                    </p>
                    <Row className="my-4">
                      <Col lg={5} md={6}>
                        <FormGroup>
                          <h6>Size</h6>
                          <Input type="select" name="size" id="size">
                            {/* {product.size.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))} */}
                            <option selected>Size</option>
                            <option value="M">M</option>
                            <option value="XL">XL</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg={7} sm={6} className=" mt-3 mt-sm-0">
                        <h6>Color</h6>
                        <div className="d-flex">
                          <div className="form-check pl-2 mt-2">
                            <input
                              type="radio"
                              value={"red"}
                              className="form-check-input"
                              id={"red"}
                              style={{
                                background: "red",
                                width: "24px",
                                height: "24px",
                                paddingLeft: "2px",
                                borderRadius: "0",
                              }}
                              //   checked={filters.colors === color}
                              //   onChange={() => handleColorClick(color)}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <FormGroup className="d-flex align-items-center">
                      <h6>Quantity:</h6>
                      <div className="d-flex align-items-center">
                        <Button
                          className="btn-product btn-product-up ml-2"
                          onClick={() => {
                            if (quantity > 1) setQuantity(quantity - 1);
                          }}
                        >
                          <i className="bi bi-dash-lg"></i>
                        </Button>
                        <Input
                          className="form-product"
                          type="number"
                          name="form-product"
                          value={quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (newQuantity >= 1 && newQuantity <= 32) {
                              setQuantity(newQuantity);
                            }
                          }}
                          max={32}
                        />
                        <Button
                          className="btn-product btn-product-down"
                          onClick={() => {
                            if (quantity < 32) setQuantity(quantity + 1);
                          }}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </Button>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProductSingle;
