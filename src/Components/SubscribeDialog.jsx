import { useEffect, useRef } from "react";

// The "thank you" pop-up shown after someone subscribes in the footer.
// Uses the browser's built-in <dialog>, so Esc closes it and keyboard focus stays inside.
const SubscribeDialog = ({ email, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (email && dialog && !dialog.open) dialog.showModal();
  }, [email]);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // clicking the dark area around the box closes it
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
      aria-labelledby="subscribe-title"
      className="fade-up m-auto w-[calc(100%-2rem)] max-w-[520px] bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/60"
    >
      <div className="relative p-8 md:p-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-[44px] w-[44px] items-center justify-center text-stone transition-colors hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-forest"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
            <path d="m3.5 6.5 8.5 6 8.5-6" />
          </svg>
        </div>

        <h2 id="subscribe-title" className="display mt-6 text-[34px] leading-[1.1] md:text-[40px]">
          Thanks for subscribing
        </h2>

        <p className="mt-4 text-[16px] leading-[1.7] text-stone">
          We've sent a confirmation email to{" "}
          <strong className="break-all font-semibold text-ink">{email}</strong>.
          Open it and click the link inside to start getting our insights.
        </p>
        <p className="mt-3 text-[16px] leading-[1.7] text-stone">
          Can't find it? Check your spam or promotions folder.
        </p>

        <p className="mt-6 border-t border-line pt-4 text-[13px] leading-[1.5] text-stone">
          This is a concept site, so no email is actually sent.
        </p>

        <button type="button" onClick={close} className="btn-primary mt-8">
          Done
        </button>
      </div>
    </dialog>
  );
};

export default SubscribeDialog;
