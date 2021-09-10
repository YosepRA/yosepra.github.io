import React, { createContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import cn from 'classnames';

import mainStyles from '../../styles/main.module.scss';

const ToastContext = createContext({ showToast: () => {} });

function Toast({ show, setShow, variant, message, timeoutId }) {
  const handleClose = () => {
    setShow(false);
    clearTimeout(timeoutId);
  };

  return (
    <Alert
      variant={variant}
      className={cn(mainStyles.toast, mainStyles.alertOverride, {
        [mainStyles.toastActive]: show,
      })}
      dismissible
      onClose={handleClose}
    >
      {message}
    </Alert>
  );
}

function ToastProvider({ children }) {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState('success');
  const [message, setMessage] = useState('Default message');
  const [timeoutId, setTimeoutId] = useState(null);

  const showToast = (toastVariant, toastMessage) => {
    setShow(true);
    setVariant(toastVariant);
    setMessage(toastMessage);

    setTimeoutId(
      setTimeout(() => {
        setShow(false);
      }, 5000),
    );
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast
        show={show}
        setShow={setShow}
        variant={variant}
        message={message}
        timeoutId={timeoutId}
      />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
