import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

function WhyWebApplication() {
  return (
    <Row>
      <Col>
        <section className="why-web-application">
          <header className="section-header">
            <h2 className="section-title">Why Do You Need Web Application?</h2>
            <h3 className="section-subtitle">
              and why I can build it for you.
            </h3>
          </header>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/853x480/181a1a.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/853x480/181a1a.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/853x480/181a1a.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Col>
    </Row>
  );
}

export default WhyWebApplication;
