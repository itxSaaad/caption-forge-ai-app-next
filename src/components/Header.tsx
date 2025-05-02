import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            CaptionForge
          </span>
        </Link>

        <nav className="flex justify-between items-center space-x-6">
          <Link
            href="/"
            className="hidden md:flex text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/generate-caption"
            className="hidden md:flex text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Generate Caption
          </Link>
          <Link href="/generate-caption" className="btn btn-primary text-sm py-2 px-4">
            Try it Free
          </Link>
        </nav>
      </div>
    </header>
  );
}
