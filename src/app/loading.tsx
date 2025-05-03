export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[var(--background)]/50 px-4 py-8 backdrop-blur-sm sm:min-h-[70vh] md:h-screen dark:bg-[var(--background-dark)]/50 dark:backdrop-blur-sm">
      <div className="card card-hover fade-in-scale flex w-full max-w-[90%] flex-col items-center p-4 sm:max-w-[360px] sm:p-6 md:max-w-md md:p-8">
        {/* Loading spinner with gradient - responsive size */}
        <div className="relative mb-4 h-16 w-16 sm:mb-6 sm:h-18 sm:w-18 md:h-20 md:w-20">
          <div className="absolute inset-0 animate-ping rounded-full bg-[var(--gradient-primary)] opacity-30"></div>
          <div className="absolute inset-1 animate-spin rounded-full border-4 border-t-[var(--primary)] border-r-[var(--primary-light)] border-b-[var(--secondary)] border-l-[var(--secondary-light)]"></div>
        </div>

        {/* Loading text with animated dots */}
        <h3 className="mb-1 text-lg font-medium text-[var(--foreground)] sm:mb-2 sm:text-xl">
          Loading
        </h3>
        <p className="mb-2 text-center text-xs text-[var(--muted)] sm:mb-4 sm:text-sm">
          Please wait while we fetch the latest data. This may take a few seconds.
        </p>
      </div>
    </div>
  );
}
