// import crypto from 'crypto-js'
import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../../providers/ToastProvider';

const VARIANT_OPTIONS = [
  {
    id: 1,
    value: 'notice', 
  },
  {
    id: 2,
    value: 'warning'
  },
  {
    id: 3,
    value: 'success'
  },
  {
    id: 4,
    value: 'error'
  }
];
const DEFAULT_VARIANT=0;

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[DEFAULT_VARIANT].value);
  const { addNotifications } = React.useContext(ToastContext);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addNotifications({variant, message});
    setMessage("");
    setVariant(VARIANT_OPTIONS[DEFAULT_VARIANT].value);
  }
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />  
      
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea 
                id="message" 
                className={styles.messageInput} 
                value={message}
                onChange={ (event) => {setMessage(event.target.value)} }
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              { VARIANT_OPTIONS.map( ({id, value}) => (
                  <label htmlFor="variant-notice" key={id}>
                    <input
                      id="variant-notice"
                      type="radio"
                      name="variant"
                      value={value}
                      checked={value === variant}
                      onChange={(event) => {setVariant(event.target.value)}}
                    />
                    {value}
                  </label>
                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
