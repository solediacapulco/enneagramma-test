import { useState, useEffect } from "react";

type ToastType = "success" | "error" | "warning";

interface ToastState {
  visible: boolean;
  title: string;
  message: string;
  type: ToastType;
}

// Create a global event system for showing toasts
const showToastEvent = new CustomEvent<ToastState>("showToast", {
  detail: { visible: true, title: "", message: "", type: "success" },
});

// Helper function to show a toast message
export const showToast = (title: string, message: string, type: ToastType = "success") => {
  const event = new CustomEvent("showToast", {
    detail: { visible: true, title, message, type },
  });
  window.dispatchEvent(event);
};

const Toast = () => {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    title: "",
    message: "",
    type: "success",
  });

  useEffect(() => {
    const handleShowToast = (event: any) => {
      setToast(event.detail);
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        setToast(prevToast => ({ ...prevToast, visible: false }));
      }, 3000);
    };

    window.addEventListener("showToast", handleShowToast);
    
    return () => {
      window.removeEventListener("showToast", handleShowToast);
    };
  }, []);

  const getIconClass = () => {
    switch (toast.type) {
      case "success":
        return "fas fa-check-circle text-success mr-3 mt-0.5";
      case "error":
        return "fas fa-exclamation-circle text-error mr-3 mt-0.5";
      case "warning":
        return "fas fa-exclamation-triangle text-yellow-500 mr-3 mt-0.5";
      default:
        return "fas fa-info-circle text-primary mr-3 mt-0.5";
    }
  };

  const opacityClass = toast.visible ? "opacity-100" : "opacity-0 pointer-events-none";

  return (
    <div 
      id="toast" 
      className={`fixed bottom-4 right-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-start transition-opacity duration-300 ${opacityClass}`}
    >
      <i id="toast-icon" className={getIconClass()}></i>
      <div>
        <h3 id="toast-title" className="font-medium text-gray-900">{toast.title}</h3>
        <p id="toast-message" className="text-gray-600 text-sm">{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;
