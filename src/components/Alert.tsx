import { useEffect, useState } from 'react';
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
  onClose?: () => void;
}

export default function Alert({ type, message, duration = 5000, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200';
      default:
        return 'bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="h-5 w-5" />;
      case 'error':
      case 'warning':
      case 'info':
        return <FiAlertCircle className="h-5 w-5" />;
      default:
        return <FiAlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-md w-full p-4 rounded-lg border shadow-md flex items-start ${getAlertStyles()}`}
    >
      <div className="flex-shrink-0 mr-3">{getIcon()}</div>

      <div className="flex-1 mr-2">
        <p className="text-sm font-medium">{message}</p>
      </div>

      <button
        type="button"
        className="flex-shrink-0 ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
      >
        <FiX className="h-4 w-4" />
      </button>
    </div>
  );
}
