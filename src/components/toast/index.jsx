import React, { createContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import cn from 'classnames';

import mainStyles from '../../styles/main.module.scss';

const ToastContext = createContext({ showToast: () => {} });

function Toast({ show, setShow, variant, message }) {
  return (
    <Alert
      variant={variant}
      className={cn(mainStyles.toast, mainStyles.alertOverride, {
        [mainStyles.toastActive]: show,
      })}
      dismissible
      onClose={() => setShow(false)}
    >
      {message}
    </Alert>
  );
}

function ToastProvider({ children }) {
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState('success');
  const [message, setMessage] = useState(
    'Test message which will be somewhat long.',
  );

  const showToast = (toastVariant, toastMessage) => {
    setShow(true);
    setVariant(toastVariant);
    setMessage(toastMessage);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast
        show={show}
        setShow={setShow}
        variant={variant}
        message={message}
      />

      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
