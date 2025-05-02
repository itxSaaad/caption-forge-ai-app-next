import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              Create Perfect Social Media Captions with AI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-700 dark:text-slate-300">
              Generate engaging, SEO-friendly captions and trending hashtags for your social media
              posts in seconds. Powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/generate-caption" className="btn btn-primary text-center">
                Try It Free
              </Link>
              <a
                href="#features"
                className="btn border border-slate-300 dark:border-slate-600 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px]">
            <Image
              src="/hero-image.jpg"
              alt="Social media caption generator"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Make Us Stand Out</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our AI technology thinks like a professional content strategist, writer, and digital
            marketer all in one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">SEO-Optimized Captions</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our AI generates captions that are optimized for search engines, helping your content
              reach a wider audience.
            </p>
          </div>

          <div className="card">
            <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Trending Hashtags</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Get recommendations for viral and trending hashtags that are relevant to your content
              and industry.
            </p>
          </div>

          <div className="card">
            <div className="h-12 w-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-violet-600 dark:text-violet-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Image Analysis</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Upload your images and our AI will analyze them to generate content that perfectly
              matches what you&apos;re sharing.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 -mx-4 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Generate perfect captions in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Your Image</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Upload the image you want to post on social media.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Describe Your Content</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Tell us what your image is about and what you want to communicate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Caption</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Receive a professionally crafted caption with trending hashtags.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Start generating engaging captions that convert and drive engagement.
            </p>
            <Link href="/generate-caption" className="btn bg-white text-blue-600 hover:bg-blue-50">
              Try CaptionForge Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
