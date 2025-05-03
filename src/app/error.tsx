'use client';

import { useEffect } from 'react';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[var(--background)]/50 px-4 py-8 backdrop-blur-sm sm:min-h-[70vh] md:h-screen dark:bg-[var(--background-dark)]/50 dark:backdrop-blur-sm">
      <div className="card card-hover fade-in-scale w-full max-w-[90%] sm:max-w-[360px] md:max-w-md">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Error icon with animation */}
          <div className="gradient-warm bounce-in mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg sm:h-18 sm:w-18 md:h-20 md:w-20">
            <FiAlertTriangle className="h-8 w-8 text-white sm:h-9 sm:w-9 md:h-10 md:w-10" />
          </div>

          <h1 className="slide-in mb-2 text-center text-xl font-bold delay-100 sm:text-2xl">
            Oops! Something went wrong
          </h1>

          <p className="slide-in mb-4 text-center text-xs text-[var(--muted)] delay-200 sm:text-sm md:mb-6">
            We&apos;re sorry for the inconvenience. Our team has been notified and is working to fix
            the issue.
          </p>

          <div className="alert alert-error slide-in mb-4 text-sm delay-300 md:mb-6">
            <FiAlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Error encountered: {error.digest || 'Unknown error'}</span>
          </div>

          <div className="slide-in flex justify-center delay-400">
            <button onClick={() => reset()} className="btn btn-primary">
              <FiRefreshCw className="mr-2 h-4 w-4" />
              Try again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
