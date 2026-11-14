import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContext } from "./toastContext";

// Small message that slides up at the bottom of the screen for a few seconds.
// Used for links that don't have a page yet (social profiles, careers).
const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const showToast = useCallback((message) => {
    clearTimeout(timer.current);
    setToast({ id: Date.now(), message });
    timer.current = setTimeout(() => setToast(null), 4000);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}

      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
      >
        {toast && (
          <p
            key={toast.id}
            className="fade-up pointer-events-auto max-w-[460px] rounded-2xl bg-ink px-6 py-4 text-center text-[15px] leading-[1.5] text-white shadow-lg"
          >
            {toast.message}
          </p>
        )}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
