import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import useEscapeKey from '../../hooks/use-escape-key';

import { ToastContext } from '../../providers/ToastProvider';

function ToastShelf() {
  const { notifications, removeNotifications, clearNotifications } = React.useContext(ToastContext);
  useEscapeKey(clearNotifications);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {notifications.map( ({ id, variant, message}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id} close={removeNotifications} >{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
