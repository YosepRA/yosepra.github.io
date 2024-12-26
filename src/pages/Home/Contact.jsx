import React from 'react';
import { Formik } from 'formik';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import messageAPI from '@Features/message/message-api.js';

import styles from './styles/contact.module.scss';

const Contact = function ContactComponent() {
  const initialValues = {
    name: '',
    email: '',
    body: '',
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    const response = await messageAPI.sendMessage(values);

    console.log(response);

    resetForm();
  };

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.contactTitle}>Contact Me</h2>
          </Col>
        </Row>

        <Row className={styles.contactRow}>
          <Col xs={12} md={5} lg={4} xl={5}>
            <div className={styles.contactList}>
              <div className={styles.contactListItem}>
                <span className={styles.contactListIcon}>
                  <FontAwesomeIcon icon="envelope" />
                </span>

                <span className="contact-list__text">
                  studioyosepra@gmail.com
                </span>
              </div>

              <div className={styles.contactListItem}>
                <span
                  className={cn(
                    styles.contactListIcon,
                    styles.contactListIconWhatsapp,
                  )}
                >
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                </span>

                <span className="contact-list__text">(+62) 85861251765</span>
              </div>

              <div className={styles.contactListItem}>
                <span className={styles.contactListIcon}>
                  <FontAwesomeIcon icon={['fab', 'discord']} />
                </span>

                <span className="contact-list__text">yosepra</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={7} lg={6} xl={5}>
            <div className={styles.contactForm}>
              <p className={styles.contactFormIntro}>
                Or, you can contact me using this form
              </p>

              <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label>Name</Form.Label>

                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label>Email</Form.Label>

                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <Form.Text
                        className={cn(
                          styles.contactFormInputNote,
                          styles.contactFormInputNoteBsOverride,
                        )}
                      >
                        I will send my reply to your email.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactMessage">
                      <Form.Label>Message</Form.Label>

                      <Form.Control
                        name="body"
                        as="textarea"
                        rows={6}
                        placeholder="What can I help you with..."
                        value={values.body}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <button type="submit" className={styles.contactFormSend}>
                      Send
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
