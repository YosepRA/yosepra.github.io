import React, { useContext } from 'react';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as yup from 'yup';

import mainStyles from '../styles/main.module.scss';
import contactStyles from '../styles/contact.module.scss';

import { VITE_API_ENDPOINT, postData } from './data/DataSource.js';
import { ToastContext } from './toast/index.jsx';

const initialValues = {
  email: '',
  subject: '',
  message: '',
};
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('This field is required.'),
  subject: yup.string().required('This field is required.'),
  message: yup.string().required('This field is required.'),
});

function Contacts() {
  const { showToast } = useContext(ToastContext);

  const ajaxErrorHandler = (error) => {
    const { response } = error;

    if (response.status >= 300) {
      showToast('danger', response.data.message);
    }
  };

  const handleSend = async (values, { resetForm }) => {
    const result = await postData(
      `${VITE_API_ENDPOINT}/mail`,
      values,
      ajaxErrorHandler,
    );
    showToast('success', result.message);

    resetForm();
  };

  return (
    <Row className={mainStyles.contentSection} as="section">
      <Col>
        <section className="contacts">
          <header className={mainStyles.sectionHeader}>
            <h2 className={mainStyles.sectionTitle}>Contact Me</h2>
            <h3 className={mainStyles.sectionSubtitle}>
              and I will turn your ideas to reality.
            </h3>
          </header>

          <div className="contact-list">
            <Row className={contactStyles.contactListRow}>
              <Col md={8} lg={4} className={contactStyles.contactInfo}>
                <div className={contactStyles.contactPoint}>
                  <span className={contactStyles.contactLogo}>
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <span className="contact-text">studioyosepra@gmail.com</span>
                </div>

                <div className={contactStyles.contactPoint}>
                  <span className={contactStyles.contactLogo}>
                    <FontAwesomeIcon icon={['fab', 'discord']} />
                  </span>
                  <span className="contact-text">YosepRA#4863</span>
                </div>

                <div className={contactStyles.contactPoint}>
                  <span className={contactStyles.contactLogo}>
                    <FontAwesomeIcon icon={['fab', 'telegram']} />
                  </span>
                  <span className="contact-text">YosepRA</span>
                </div>

                <div className={contactStyles.contactPoint}>
                  <span className={contactStyles.contactLogo}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </span>
                  <span className="contact-text">studioyosepra</span>
                </div>

                <div className={contactStyles.contactPoint}>
                  <span className={contactStyles.contactLogo}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </span>
                  <span className="contact-text">studioyosepra</span>
                </div>
              </Col>

              <Col md={8} lg={6} className="contact-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSend}
                  validationSchema={schema}
                >
                  {({ handleSubmit, isSubmitting, errors, touched }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>

                        <Field name="email">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              type="email"
                              placeholder="your_email@mail.com"
                              isInvalid={touched.email && !!errors.email}
                              disabled={isSubmitting}
                            />
                          )}
                        </Field>

                        <ErrorMessage name="email">
                          {(msg) => (
                            <Form.Control.Feedback type="invalid">
                              {msg}
                            </Form.Control.Feedback>
                          )}
                        </ErrorMessage>
                      </Form.Group>

                      <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>

                        <Field name="subject">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              placeholder="Message title"
                              isInvalid={touched.subject && !!errors.subject}
                              disabled={isSubmitting}
                            />
                          )}
                        </Field>

                        <ErrorMessage name="subject">
                          {(msg) => (
                            <Form.Control.Feedback type="invalid">
                              {msg}
                            </Form.Control.Feedback>
                          )}
                        </ErrorMessage>
                      </Form.Group>

                      <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>

                        <Field name="message">
                          {({ field }) => (
                            <Form.Control
                              {...field}
                              as="textarea"
                              placeholder="Tell me more about your ideas. Or ask me any questions."
                              className={cn(
                                contactStyles.contactMessageInput,
                                contactStyles.formControlOverride,
                              )}
                              isInvalid={touched.message && !!errors.message}
                              disabled={isSubmitting}
                            />
                          )}
                        </Field>

                        <ErrorMessage name="message">
                          {(msg) => (
                            <Form.Control.Feedback type="invalid">
                              {msg}
                            </Form.Control.Feedback>
                          )}
                        </ErrorMessage>
                      </Form.Group>

                      <button
                        className={contactStyles.contactSendBtn}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              animation="border"
                              role="status"
                              className={cn(
                                contactStyles.contactSendBtnSpinner,
                                contactStyles.spinnerBorderOverride,
                              )}
                            >
                              <span className="sr-only">Sending...</span>
                            </Spinner>{' '}
                            Sending
                          </>
                        ) : (
                          'Send'
                        )}
                      </button>
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
