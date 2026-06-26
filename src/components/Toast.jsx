import { createContext, useCallback, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon.jsx";

/**
 * Toast — transient notifications.
 *
 * Wrap your app once:  <ToastProvider><App /></ToastProvider>
 * Then anywhere:       const toast = useToast(); toast({ variant: "success", title: "Saved" })
 *
 * toast() accepts a string or { variant, title, message, action, duration }.
 * Returns an id; dismiss early with the returned `dismiss` from useToastControls.
 */
const ToastCtx = createContext(null);
let counter = 0; // module-scoped id source (stable, no RNG)

const VARIANT_ICON = {
  info: "info",
  success: "check-circle",
  warning: "alert",
  danger: "x-circle",
};

export function ToastProvider({ children, duration = 4000, placement = "bottom-right" }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  const toast = useCallback(
    (opts) => {
      const id = ++counter;
      const t = typeof opts === "string" ? { message: opts } : opts;
      setToasts((prev) => [...prev, { id, variant: "info", ...t }]);
      const d = t.duration ?? duration;
      if (d > 0) timers.current[id] = setTimeout(() => dismiss(id), d);
      return id;
    },
    [duration, dismiss],
  );

  return (
    <ToastCtx.Provider value={{ toast, dismiss }}>
      {children}
      {createPortal(
        <div className={`aw-toasts aw-toasts--${placement}`} role="region" aria-label="Notifications">
          {toasts.map((t) => (
            <ToastItem key={t.id} {...t} onClose={() => dismiss(t.id)} />
          ))}
        </div>,
        document.body,
      )}
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast() must be used within <ToastProvider>");
  return ctx.toast;
}

export function useToastControls() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToastControls() must be used within <ToastProvider>");
  return ctx;
}

function ToastItem({ variant = "info", title, message, action, onClose }) {
  return (
    <div className={`aw-toast aw-toast--${variant}`} role="status">
      <Icon name={VARIANT_ICON[variant] || "info"} size={18} className="aw-toast__icon" />
      <div className="aw-toast__body">
        {title && <p className="aw-toast__title">{title}</p>}
        {message && <p className="aw-toast__msg">{message}</p>}
      </div>
      {action && (
        <button
          type="button"
          className="aw-toast__action"
          onClick={() => {
            action.onClick?.();
            onClose();
          }}
        >
          {action.label}
        </button>
      )}
      <button type="button" className="aw-toast__close" aria-label="Dismiss" onClick={onClose}>
        <Icon name="close" size={14} />
      </button>
    </div>
  );
}
