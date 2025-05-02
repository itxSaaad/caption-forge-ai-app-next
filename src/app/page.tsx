import Link from 'next/link';

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-heading font-bold text-indigo-700 mb-4">CaptionForge AI</h1>
        <p className="max-w-xl mx-auto text-lg text-gray-700 mb-8">
          Instantly generate viral, SEO-friendly captions and trending hashtags from your images
          using AI.
        </p>
        <Link
          href="/generate-caption"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-indigo-700 transition"
        >
          Try It Now
        </Link>
      </div>
      <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-heading text-xl font-bold text-indigo-600 mb-2">AI-Powered</h3>
          <p className="text-gray-600">
            Leverages GPT-4o for context-aware, creative captions and hashtags.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-heading text-xl font-bold text-indigo-600 mb-2">Modern UX</h3>
          <p className="text-gray-600">
            Lightning-fast, mobile-friendly, and visually appealing interface.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-heading text-xl font-bold text-indigo-600 mb-2">SEO & Trends</h3>
          <p className="text-gray-600">
            Captions and hashtags optimized for reach, engagement, and discoverability.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-heading font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-left text-gray-700 space-y-2">
          <li>Upload your image and describe your post or topic.</li>
          <li>Let CaptionForge AI analyze and generate optimized captions and hashtags.</li>
          <li>Copy and use your results instantly!</li>
        </ol>
      </div>
    </section>
  );
}
