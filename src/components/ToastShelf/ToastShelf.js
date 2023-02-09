import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismissToast }) {
  console.log("kek");
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, toastVariant, toastMessage }, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast
            variant={toastVariant}
            handleDismiss={() => handleDismissToast(id)}
          >
            {toastMessage}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
