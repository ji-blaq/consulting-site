import { createContext, useContext } from "react";

// Call useToast() in any component to get a function that shows a short message:
//   const showToast = useToast();
//   showToast("We're working on our careers page. Check back soon.");
export const ToastContext = createContext(() => {});

export const useToast = () => useContext(ToastContext);
