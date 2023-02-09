import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

import { VARIANT_OPTIONS } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);

  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleCreateToast(event) {
    event.preventDefault();

    createToast(toastVariant, toastMessage);

    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleCreateToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(event) => {
                setToastMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={toastVariant === option}
                  onChange={(event) => {
                    setToastVariant(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
