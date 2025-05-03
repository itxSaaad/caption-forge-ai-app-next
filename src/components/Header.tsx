'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const isGenerateCaptionPage = pathname === '/generate-caption';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 py-4 backdrop-blur-sm transition-all">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <span className="relative text-2xl font-bold transition-all duration-300 group-hover:scale-105">
            <span className="bg-gradient-primary absolute inset-0 bg-clip-text opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              CaptionForge
            </span>
          </span>
        </Link>

        {!isGenerateCaptionPage && (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden items-center justify-between space-x-8 md:flex">
              <Link
                href="/"
                className={`relative font-medium transition-all duration-200 hover:text-[var(--primary)] ${
                  pathname === '/' ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'
                }`}
              >
                <span className="relative z-10">Home</span>
                {pathname === '/' && (
                  <span className="bg-gradient-primary absolute bottom-0 left-0 h-0.5 w-full" />
                )}
              </Link>
              <Link
                href="/generate-caption"
                className={`relative font-medium transition-all duration-200 hover:text-[var(--primary)] ${
                  pathname === '/generate-caption'
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--foreground)]'
                }`}
              >
                <span className="relative z-10">Generate Caption</span>
                {pathname === '/generate-caption' && (
                  <span className="bg-gradient-primary absolute bottom-0 left-0 h-0.5 w-full" />
                )}
              </Link>
              <Link
                href="/generate-caption"
                className="btn btn-accent bounce-in px-5 py-2.5 font-medium"
              >
                Try it Free
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex p-2 text-[var(--foreground)] md:hidden"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && !isGenerateCaptionPage && (
        <div className="container-custom slide-in py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-2 py-2 transition-all ${
                pathname === '/'
                  ? 'bg-[var(--primary-50)] text-[var(--primary)] dark:bg-[var(--primary-900)]/10'
                  : 'text-[var(--foreground)] hover:bg-[var(--background)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/generate-caption"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-lg px-2 py-2 transition-all ${
                pathname === '/generate-caption'
                  ? 'bg-[var(--primary-50)] text-[var(--primary)] dark:bg-[var(--primary-900)]/10'
                  : 'text-[var(--foreground)] hover:bg-[var(--background)]'
              }`}
            >
              Generate Caption
            </Link>
            <Link
              href="/generate-caption"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent w-full py-2.5 text-center"
            >
              Try it Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
