import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-100 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-heading font-bold text-indigo-700">
          CaptionForge AI
        </Link>
        <div className="space-x-4">
          <Link
            href="/generate-caption"
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Generate
          </Link>
          <Link href="#features" className="font-semibold text-gray-600 hover:text-indigo-600">
            Features
          </Link>
          <Link href="#contact" className="font-semibold text-gray-600 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
