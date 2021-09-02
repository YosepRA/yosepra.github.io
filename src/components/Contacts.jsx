import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DataSource, { VITE_API_ENDPOINT } from './data/DataSource';

function ajaxErrorHandler(error) {
  console.log(error);
}

const dataSource = new DataSource(ajaxErrorHandler);
const initialValues = {
  email: '',
  subject: '',
  message: '',
};

function Contacts() {
  const handleSend = async (values, { resetForm }) => {
    const result = await dataSource.postData(
      `${VITE_API_ENDPOINT}/mail`,
      values,
    );
    console.log(result.message);

    resetForm();
  };

  return (
    <Row>
      <Col>
        <section className="contacts">
          <header className="section-header">
            <h2 className="section-title">Contact Me</h2>
            <h3 className="section-subtitle">
              and I will turn your ideas to reality.
            </h3>
          </header>

          <div className="contact-list">
            <Row>
              <Col md={8} lg={4} className="contact-info">
                <div className="contact-wa">
                  <span className="contact-logo">
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                  </span>
                  <span className="contact-text">+6285861251765</span>
                </div>

                <div className="contact-email">
                  <span className="contact-logo">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <span className="contact-text">studioyosepra@gmail.com</span>
                </div>
              </Col>
              <Col md={8} lg={6} className="contact-form">
                <Formik initialValues={initialValues} onSubmit={handleSend}>
                  {({ handleSubmit }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Field name="email">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              type="email"
                              placeholder="your_email@mail.com"
                            />
                          )}
                        </Field>
                      </Form.Group>

                      <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Field name="subject">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              placeholder="Message title"
                            />
                          )}
                        </Field>
                      </Form.Group>

                      <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Field name="message">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              as="textarea"
                              placeholder="Tell me more about your ideas. Or ask me any questions."
                            />
                          )}
                        </Field>
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </div>
        </section>
      </Col>
    </Row>
  );
}

export default Contacts;
