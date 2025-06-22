import { X } from "lucide-react";

function AlertModal({ show, status, message, onClose }) {
  if (!show) return null;

  const bgColor =
    status === "success"
      ? "bg-green-600 text-white"
      : "bg-red-600 text-white";

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 max-w-sm w-[90%] md:w-full z-50 p-4 rounded-lg shadow-lg transition-all duration-300 animate-slide-in ${bgColor}`}
    >
      <div className="flex justify-between items-start gap-4">
        <p className="font-semibold text-sm">{message}</p>
        <button onClick={onClose}>
          <X className="w-5 h-5 hover:opacity-80 transition" />
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
