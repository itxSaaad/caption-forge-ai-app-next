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
        return 'alert-success';
      case 'error':
        return 'alert-error';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return 'border border-[var(--border)] bg-[var(--background)]/50 text-[var(--foreground)]';
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
    <div className="fixed top-4 z-50 flex w-full justify-center px-4 sm:justify-end sm:px-6 md:px-0">
      <div
        className={`bounce-in flex w-full max-w-[calc(100vw-32px)] items-start rounded-lg p-3 shadow-md sm:max-w-md sm:p-4 ${getAlertStyles()}`}
        style={{ boxShadow: 'var(--shadow-md)' }}
      >
        <div className="mr-2 flex-shrink-0 sm:mr-3">{getIcon()}</div>

        <div className="mr-2 flex-1">
          <p className="text-sm font-medium break-words">{message}</p>
        </div>

        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full p-1.5 transition-all duration-200 hover:bg-black/10 focus:ring-2 focus:ring-[var(--ring)] focus:outline-none dark:hover:bg-white/10"
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
        >
          <FiX className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
