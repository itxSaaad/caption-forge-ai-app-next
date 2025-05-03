import Link from 'next/link';
import { FiHeart, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] py-12">
      {/* Background accent */}
      <div className="bg-gradient-cool absolute top-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 opacity-70"></div>

      <div className="container-custom">
        {/* Main footer content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="group flex items-center">
              <span className="relative text-2xl font-bold transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-primary absolute inset-0 bg-clip-text opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  CaptionForge
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[var(--muted)]">
              AI-powered caption generator that helps you create engaging social media captions in
              seconds.
            </p>

            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#"
                className="btn btn-sm btn-outline rounded-full p-2 transition-all hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                <FiTwitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline rounded-full p-2 transition-all hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                <FiInstagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline rounded-full p-2 transition-all hover:border-[var(--primary-light)] hover:text-[var(--primary)]"
              >
                <FiLinkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="mb-4 text-base font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/generate-caption"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Generate Caption
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-base font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-[var(--muted)] transition-all hover:text-[var(--primary)]"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="mb-4 text-sm text-[var(--muted)] md:mb-0">
            © {currentYear} CaptionForge. All rights reserved.
          </p>

          <p className="flex items-center text-sm text-[var(--muted)]">
            Made with <FiHeart className="mx-1 text-[var(--accent)]" /> for social media creators
          </p>
        </div>
      </div>
    </footer>
  );
}
