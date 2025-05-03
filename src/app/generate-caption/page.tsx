'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiCheck, FiClipboard, FiUpload } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Alert from '@/components/Alert';

interface CaptionSet {
  caption: string;
  hashtags: string[];
}

interface GenerationResult {
  captionSets: CaptionSet[];
}

const CAPTION_STYLES = ['Professional', 'Casual', 'Witty', 'Inspirational', 'Question-based'];

export default function GenerateCaptionPage() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [selectedCaptionIndex, setSelectedCaptionIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [usageRemaining, setUsageRemaining] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkUsage = async () => {
      try {
        const response = await fetch('/api/check-usage');
        const data = await response.json();
        setUsageRemaining(data.usageRemaining);
      } catch (err) {
        console.error('Failed to check usage limit:', err);
      }
    };
    checkUsage();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      // Create image preview
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target) {
          setImagePreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!image) {
      setError('Please upload an image');
      return;
    }

    if (!description.trim()) {
      setError('Please provide a description');
      return;
    }

    if (!usageRemaining) {
      setError('You have reached your daily usage limit. Please try again tomorrow.');
      return;
    }

    try {
      setIsGenerating(true);
      setError(null);

      const formData = new FormData();
      formData.append('image', image);
      formData.append('description', description);

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate caption');
      }

      setResult(data);
      setSelectedCaptionIndex(0);
      setSuccess('Captions generated successfully!');
      setUsageRemaining(false);

      // Reset copied state when new caption is generated
      setCopied(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!result || !result.captionSets || !result.captionSets[selectedCaptionIndex]) return;

    const selectedCaption = result.captionSets[selectedCaptionIndex];
    const textToCopy = `${selectedCaption.caption}\n\n\n\n${selectedCaption.hashtags.join(' ')}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setSuccess('Copied to clipboard!');

      // Reset copied state after 3 seconds
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  const currentCaption = result?.captionSets?.[selectedCaptionIndex];

  return (
    <div className="container-custom py-12">
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}

      {success && <Alert type="success" message={success} onClose={() => setSuccess(null)} />}

      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Generate Your Perfect Caption
        </h1>

        <p className="mb-8 text-center text-slate-600 dark:text-slate-400">
          Upload your image, tell us what it&apos;s about, and we&apos;ll create 5 engaging caption
          styles with trending hashtags.
        </p>

        {!usageRemaining && (
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-center dark:border-amber-700 dark:bg-amber-900/20">
            <p className="text-amber-800 dark:text-amber-200">
              You&apos;ve reached your daily usage limit. The tool will be available again in 24
              hours.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="mb-4 text-xl font-bold">Upload & Describe</h2>

            <form onSubmit={handleSubmit}>
              <div
                className="mb-6 flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-4 transition-colors hover:border-blue-500 dark:border-slate-700 dark:hover:border-blue-500"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <div className="relative mb-2 h-48 w-full">
                    <Image src={imagePreview} alt="Preview" fill className="object-contain" />
                  </div>
                ) : (
                  <div className="text-center">
                    <FiUpload className="mx-auto mb-2 h-12 w-12 text-slate-400" />
                    <p className="text-slate-600 dark:text-slate-400">Click to upload an image</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      PNG, JPG, WEBP up to 5MB
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Describe your image and what you'd like in your caption..."
                  className="w-full rounded-lg border border-slate-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isGenerating || !usageRemaining}
                className={`btn btn-primary w-full ${
                  isGenerating || !usageRemaining ? 'cursor-not-allowed opacity-70' : ''
                }`}
              >
                {isGenerating ? 'Generating...' : 'Generate Captions'}
              </button>
            </form>
          </div>

          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Your Captions</h2>

              {result && (
                <button
                  onClick={handleCopyToClipboard}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {copied ? (
                    <>
                      <FiCheck className="mr-1" /> Copied
                    </>
                  ) : (
                    <>
                      <FiClipboard className="mr-1" /> Copy Caption
                    </>
                  )}
                </button>
              )}
            </div>

            {result && result.captionSets && result.captionSets.length > 0 && (
              <div className="mb-4 flex overflow-x-auto">
                {CAPTION_STYLES.map((style, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCaptionIndex(index)}
                    className={`mr-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ${
                      selectedCaptionIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            )}

            <div className="min-h-[300px] rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              {isGenerating ? (
                <div>
                  <Skeleton count={4} className="mb-2 animate-pulse" />
                  <Skeleton width="80%" className="mb-6 animate-pulse" />
                  <div className="mt-4 animate-pulse">
                    <Skeleton count={1} width="90%" />
                  </div>
                </div>
              ) : result && currentCaption ? (
                <div>
                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {CAPTION_STYLES[selectedCaptionIndex]} Caption
                    </h3>
                    <p className="whitespace-pre-line text-slate-800 dark:text-slate-200">
                      {currentCaption.caption}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      Hashtags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCaption.hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <p className="text-slate-500 dark:text-slate-400">
                    Your generated captions will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
