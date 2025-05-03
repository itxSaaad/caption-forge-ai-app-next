import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[var(--background)]/50 px-4 py-8 backdrop-blur-sm sm:min-h-[70vh] md:h-screen dark:bg-[var(--background-dark)]/50 dark:backdrop-blur-sm">
      <div className="card card-hover fade-in-scale flex w-full max-w-[90%] flex-col items-center p-4 sm:max-w-[360px] sm:p-6 md:max-w-md md:p-8">
        {/* 404 with gradient */}
        <div className="slide-in mb-2 text-5xl font-black tracking-tighter delay-100 sm:text-6xl md:mb-4 md:text-7xl lg:text-8xl">
          404
        </div>

        {/* Content with staggered animations */}
        <h3 className="slide-in mb-2 text-xl font-bold text-[var(--foreground)] delay-200 sm:text-2xl md:mb-3">
          Page Not Found
        </h3>

        <p className="slide-in mb-6 max-w-full text-center text-sm text-[var(--muted)] delay-300 sm:mb-7 md:mb-8 md:text-base">
          We couldn&apos;t find the page you were looking for. It might have been moved, deleted, or
          perhaps it never existed in the first place.
        </p>

        {/* Buttons with hover effects */}
        <Link href="/" className="btn btn-primary group w-full sm:w-auto">
          <FiArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
