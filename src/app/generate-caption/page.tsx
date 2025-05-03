'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  FiCamera,
  FiCheck,
  FiClock,
  FiCopy,
  FiEdit3,
  FiHash,
  FiMessageCircle,
  FiTrendingUp,
  FiUpload,
} from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Alert from '@/components/Alert';
import Script from 'next/script';

interface CaptionSet {
  caption: string;
  hashtags: string[];
}

interface GenerationResult {
  captionSets: CaptionSet[];
}

const CAPTION_STYLES = ['Professional', 'Casual', 'Witty', 'Inspirational', 'Question-based'];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CaptionForge AI - Caption Generator',
  url: 'https://caption-forge-ai.vercel.app/generate-caption',
  applicationCategory: 'SocialNetworkingApplication',
  description:
    'Upload your image and let CaptionForge AI generate viral, SEO-friendly captions and trending hashtags tailored to your content.',
  operatingSystem: 'All',
  browserRequirements: 'Requires JavaScript. Modern browser recommended.',
  publisher: {
    '@type': 'Organization',
    name: 'CaptionForge AI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://caption-forge-ai.vercel.app/favicon.ico',
    },
  },
  breadcrumbs: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://caption-forge-ai.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Generate Caption',
        item: 'https://caption-forge-ai.vercel.app/generate-caption',
      },
    ],
  },
};

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
  const captionStylesRef = useRef<HTMLDivElement>(null);

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

  // Scroll selected style into view on mobile
  useEffect(() => {
    if (captionStylesRef.current && result) {
      const selectedButton = captionStylesRef.current.children[selectedCaptionIndex] as HTMLElement;
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedCaptionIndex, result]);

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
    const textToCopy = `${selectedCaption.caption}\n\n${selectedCaption.hashtags.join(' ')}`;
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
    <>
      <section className="container-custom min-h-[80vh] items-center bg-gradient-to-b from-transparent to-[var(--secondary-light)]/5 py-24 md:pt-4 md:pb-24 dark:to-[var(--secondary)]/10">
        {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
        {success && <Alert type="success" message={success} onClose={() => setSuccess(null)} />}

        <div className="fade-in-scale mx-auto mb-8 max-w-4xl sm:mb-12">
          <h1 className="mb-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
            Generate Your Perfect Caption
          </h1>
          <p className="mx-auto max-w-2xl text-center text-sm text-slate-600 sm:text-base dark:text-slate-400">
            Upload your image, tell us what it&apos;s about, and we&apos;ll create 5 engaging
            caption styles with trending hashtags.
          </p>
        </div>

        {!usageRemaining && (
          <div className="fade-in-scale mb-8 flex items-center justify-center space-x-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center shadow-sm dark:border-amber-700 dark:bg-amber-900/20">
            <FiClock className="h-5 w-5 text-amber-500 dark:text-amber-400" />
            <p className="text-sm text-amber-800 sm:text-base dark:text-amber-200">
              You&apos;ve reached your daily usage limit. The tool will be available again in 24
              hours.
            </p>
          </div>
        )}

        <div className="grid max-w-full gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Left Column - Upload Form */}
          <div className="card flex min-h-[500px] w-full max-w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-md transition-all duration-300 hover:shadow-lg sm:min-h-[600px] sm:rounded-3xl">
            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <div className="mb-5 flex items-center">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-50)] dark:bg-[var(--primary)]/20">
                  <FiUpload className="h-4 w-4 text-[var(--primary)]" />
                </div>
                <h2 className="text-lg font-bold sm:text-xl">Upload & Describe</h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
                <div
                  className="mb-5 flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--primary-50)]/30 sm:h-64 sm:p-6 dark:border-slate-700 dark:bg-slate-800/20 dark:hover:border-[var(--primary)] dark:hover:bg-[var(--primary-900)]/10"
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload image"
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  {imagePreview ? (
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image src={imagePreview} alt="Preview" fill className="object-contain" />
                      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <p className="flex items-center text-xs text-white">
                          <FiEdit3 className="mr-1" /> Click to change image
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bounce-in px-4 py-8 text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 shadow-sm sm:h-16 sm:w-16">
                        <FiCamera className="h-7 w-7 text-[var(--primary)] sm:h-8 sm:w-8" />
                      </div>
                      <p className="mb-1.5 font-medium text-slate-700 dark:text-slate-300">
                        Click to upload an image
                      </p>
                      <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-500">
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
                    aria-label="Upload image"
                  />
                </div>

                <div className="mb-5 flex-grow">
                  <label
                    htmlFor="description"
                    className="mb-2 flex items-center text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <FiEdit3 className="mr-2 h-4 w-4 text-[var(--primary)]" /> Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Describe your image and what you'd like in your caption..."
                    className="input h-28 w-full resize-none bg-slate-50/50 transition-all duration-200 focus:ring-[var(--primary)]/20 sm:h-32 dark:bg-slate-800/20"
                    rows={4}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating || !usageRemaining}
                  className={`btn ${
                    isGenerating || !usageRemaining
                      ? 'cursor-not-allowed bg-slate-400 opacity-70'
                      : 'gradient-primary hover:shadow-md'
                  } w-full transform rounded-xl py-3 transition-all active:scale-[0.98]`}
                  aria-label={isGenerating ? 'Generating captions' : 'Generate captions'}
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="mr-2 -ml-1 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Generating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FiMessageCircle className="mr-2 -ml-1 h-5 w-5" />
                      Generate Captions
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Caption Results */}
          <div className="card flex min-h-[500px] w-full max-w-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-md sm:min-h-[600px] sm:rounded-3xl">
            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--secondary-light)]/20">
                    <FiHash className="h-4 w-4 text-[var(--secondary)]" />
                  </div>
                  <h2 className="text-lg font-bold sm:text-xl">Your Captions</h2>
                </div>

                {result && (
                  <button
                    onClick={handleCopyToClipboard}
                    className={`flex items-center rounded-full text-xs sm:text-sm ${copied ? 'bg-[var(--success)]/10 text-[var(--success)]' : 'bg-[var(--secondary)]/10 text-[var(--secondary)]'} px-2.5 py-1.5 transition-all hover:shadow-sm sm:px-3`}
                    aria-label="Copy caption to clipboard"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="mr-1.5" /> Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="mr-1.5" /> Copy
                      </>
                    )}
                  </button>
                )}
              </div>

              {result && result.captionSets && result.captionSets.length > 0 && (
                <div className="no-scrollbar -mx-4 mb-5 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                  <div
                    className="inline-flex w-max space-x-1 rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800/50"
                    ref={captionStylesRef}
                  >
                    {CAPTION_STYLES.map((style, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCaptionIndex(index)}
                        className={`rounded-lg px-3 py-2 text-xs font-medium whitespace-nowrap transition-all sm:px-4 sm:text-sm ${
                          selectedCaptionIndex === index
                            ? 'bg-gradient-cool bg-slate-200 shadow-sm dark:bg-slate-700/60 dark:text-slate-300'
                            : 'bg-transparent text-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700/60'
                        }`}
                        aria-pressed={selectedCaptionIndex === index}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Added max-w-full to prevent overflow */}
              <div className="fade-in-scale min-h-[320px] max-w-full flex-1 overflow-hidden rounded-xl bg-slate-50/80 p-4 shadow-sm sm:min-h-[380px] sm:p-5 dark:bg-slate-900/50">
                {isGenerating ? (
                  <div className="fade-in-scale flex h-full flex-col">
                    <div className="mb-3 flex items-center space-x-2 sm:mb-4">
                      <div className="skeleton h-6 w-20 animate-pulse rounded-full bg-slate-200/70 sm:h-8 sm:w-24 dark:bg-slate-700/50"></div>
                    </div>

                    <div className="mb-4 rounded-lg bg-white/60 p-3 shadow-sm sm:mb-6 sm:p-4 dark:bg-slate-800/60">
                      <div className="animate-pulse space-y-2 sm:space-y-3">
                        <Skeleton height={16} width="100%" className="sm:h-[20px]" />
                        <Skeleton height={16} width="92%" className="sm:h-[20px]" />
                        <Skeleton height={16} width="96%" className="sm:h-[20px]" />
                        <Skeleton height={16} width="88%" className="sm:h-[20px]" />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-2 flex animate-pulse items-center sm:mb-3">
                        <div className="skeleton mr-2 h-4 w-4 rounded-full sm:h-5 sm:w-5"></div>
                        <Skeleton
                          width={80}
                          height={16}
                          className="rounded-md sm:h-[18px] sm:w-[120px]"
                        />
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <div className="animate-pulse transition-all">
                          <Skeleton
                            width={60}
                            height={22}
                            className="transform rounded-full sm:h-[28px] sm:w-[80px]"
                          />
                        </div>
                        <div className="animation-delay-100 animate-pulse">
                          <Skeleton
                            width={75}
                            height={22}
                            className="transform rounded-full sm:h-[28px] sm:w-[100px]"
                          />
                        </div>
                        <div className="animation-delay-200 animate-pulse">
                          <Skeleton
                            width={55}
                            height={22}
                            className="transform rounded-full sm:h-[28px] sm:w-[70px]"
                          />
                        </div>
                        <div className="animation-delay-300 animate-pulse">
                          <Skeleton
                            width={65}
                            height={22}
                            className="transform rounded-full sm:h-[28px] sm:w-[90px]"
                          />
                        </div>
                        <div className="animation-delay-400 animate-pulse">
                          <Skeleton
                            width={80}
                            height={22}
                            className="transform rounded-full sm:h-[28px] sm:w-[110px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : result && currentCaption ? (
                  <div className="fade-in flex h-full flex-col overflow-hidden">
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h3 className="text-3xs xs:text-2xs mb-1.5 flex items-center font-medium text-slate-500 sm:mb-2 sm:text-xs md:mb-3 dark:text-slate-400">
                        <FiMessageCircle className="xs:h-3 xs:w-3 mr-1 h-2.5 w-2.5 text-[var(--secondary)] sm:mr-1.5 sm:h-3.5 sm:w-3.5 md:mr-2 md:h-4 md:w-4" />{' '}
                        {CAPTION_STYLES[selectedCaptionIndex]}
                      </h3>
                      {/* Caption text - improved overflow handling */}
                      <div className="xs:p-3 max-w-full rounded-lg bg-white p-2.5 shadow-sm sm:p-4 md:p-5 dark:bg-slate-800">
                        <p className="text-3xs xs:text-xs leading-relaxed break-words whitespace-pre-wrap text-slate-800 sm:text-sm md:text-base dark:text-slate-200">
                          {currentCaption.caption}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto overflow-hidden">
                      <h3 className="text-3xs xs:text-2xs mb-1.5 flex items-center font-medium text-slate-500 sm:mb-2 sm:text-xs md:mb-3 dark:text-slate-400">
                        <FiTrendingUp className="xs:h-3 xs:w-3 mr-1 h-2.5 w-2.5 text-[var(--secondary)] sm:mr-1.5 sm:h-3.5 sm:w-3.5 md:mr-2 md:h-4 md:w-4" />{' '}
                        Trending Hashtags
                      </h3>
                      <div className="xs:max-h-24 xs:gap-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 flex max-h-20 max-w-full flex-wrap gap-1 overflow-y-auto sm:max-h-28 md:max-h-32 md:gap-2">
                        {currentCaption.hashtags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-3xs xs:text-2xs xs:px-2 xs:py-0.5 inline-block rounded-full bg-[var(--primary-50)] px-1.5 py-0.5 font-medium break-all text-[var(--primary-dark)] shadow-sm transition-all hover:scale-105 hover:shadow-md sm:px-2.5 sm:py-1 sm:text-xs dark:bg-[var(--primary)]/20 dark:text-[var(--primary-light)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="xs:p-4 flex h-full flex-col items-center justify-center p-3 text-center sm:p-6">
                    <div className="xs:mb-4 xs:h-16 xs:w-16 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 shadow-sm sm:h-20 sm:w-20 dark:bg-slate-800">
                      <FiMessageCircle className="xs:h-7 xs:w-7 h-5 w-5 text-slate-400 sm:h-9 sm:w-9" />
                    </div>
                    <h3 className="xs:mb-2 xs:text-base mb-1 text-sm font-medium text-slate-700 sm:text-lg dark:text-slate-300">
                      No Captions Yet
                    </h3>
                    <p className="xs:max-w-xs text-3xs xs:text-xs max-w-[240px] text-slate-500 sm:text-sm dark:text-slate-400">
                      Upload an image and add a description to generate engaging captions for your
                      content
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </>
  );
}
