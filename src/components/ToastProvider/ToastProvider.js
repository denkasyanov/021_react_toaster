import React from "react";

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "It works!",
      variant: "success",
    },
    {
      id: crypto.randomUUID(),
      message: "Logged in",
      variant: "success",
    },
  ]);

  function createToast(variant, message) {
    const id = crypto.randomUUID();
    setToasts([...toasts, { id, variant, message }]);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
