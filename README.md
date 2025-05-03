# CaptionForge - AI-Powered Caption Generator

> CaptionForge is a modern micro-SaaS web application that leverages advanced AI to generate viral, SEO-optimized captions and trending hashtags for your social media images in just one click. Perfect for content creators, marketers, and businesses who want to boost engagement and reach on platforms like Instagram, Twitter, and LinkedIn.

<br/>
<div align="center">
  <h3 align="center">CaptionForge</h3>

  <p align="center">
    AI-Powered Caption Generator
    <br/>
    <br/>
    <a href="https://github.com/itxsaaad/caption-forge-ai-app-next"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://caption-forge-ai.vercel.app/">View Demo</a>
    .
    <a href="https://github.com/itxsaaad/caption-forge-ai-app-next/issues">Report Bug</a>
    .
    <a href="https://github.com/itxsaaad/caption-forge-ai-app-next/issues">Request Feature</a>
  </p>
</div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Table Of Contents

- [CaptionForge - AI-Powered Caption Generator](#captionforge---ai-powered-caption-generator)
  - [Table Of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [How It Works](#how-it-works)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [SEO \& Structured Data](#seo--structured-data)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)
  - [Support](#support)

## About The Project

## Features

- **AI-Powered:** Uses OpenAI's GPT to generate professional captions and hashtags.
- **SEO Optimized:** Captions are crafted for maximum discoverability.
- **Viral Hashtags:** Suggests trending and relevant hashtags for your content.
- **Image Analysis:** Upload your image and get context-aware suggestions.
- **Modern UI/UX:** Beautiful, responsive, and accessible design with dark mode support.
- **Usage Limits:** One free generation per user per 24 hours (per IP).
- **Fast & Secure:** Built with Next.js 15, Tailwind CSS 4.0, and deployed on Vercel.

## Screenshots

![Home Page](https://caption-forge-ai.vercel.app/opengraph-image.png)
![Generate Caption](https://caption-forge-ai.vercel.app/generate-caption/opengraph-image.png)

## How It Works

1. Upload your image.
2. Describe your post or what you want to communicate.
3. Receive a professionally crafted caption with viral hashtags.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 18, Tailwind CSS 4.0
- **Backend/API:** OpenAI API, ChatAnywhere API, Next.js API Routes
- **UI:** Montserrat (headings), Inter (body), Tailwind custom theme
- **Deployment:** Vercel
- **Other:** react-icons, react-loading-skeleton, tailwindcss

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/itxsaaad/caption-forge-ai-app-next.git
   cd caption-forge-ai-app-next
   ```

2. Install dependencies

   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables

   Create a `.env.local` file:

   ```env
   OPENAI_API_KEY = <YOUR_OPENAI_API_KEY>
   OPENAI_API_BASE_URL = <YOUR_OPENAI_API_BASE_URL>
   CHATANYWHERE_API_KEY = <YOUR_CHATANYWHERE_API_KEY>
   CHATANYWHERE_API_BASE_URL = <YOUR_CHATANYWHERE_API_BASE_URL>
   ```

4. Run locally

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Deploy

   Deploy instantly to Vercel for best performance.

## Folder Structure

```
src/
  app/
    api/
      generate/
        route.ts
      check-usage/
        route.ts
    generate-caption/
      page.tsx
    layout.tsx
    page.tsx
    error.tsx
    loading.tsx
    not-found.tsx
    globals.css
    favicon.ico
  components/
    Header.tsx
    Footer.tsx
    Alert.tsx
```

## SEO & Structured Data

- SEO-optimized metadata for every page (title, description, keywords, OpenGraph, Twitter)
- JSON-LD Structured Data for WebSite, WebApplication, and Breadcrumbs
- Canonical URLs to prevent duplicate content
- Accessible and semantic HTML

## Roadmap

See the [open issues](https://github.com/itxsaaad/caption-forge-ai-app-next) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/itxsaaad/caption-forge-ai-app-next/issues/new) to discuss it, or directly create a pull request after you edit the _README.md_ file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the repo
2. Clone the project
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m "Add some AmazingFeature"`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

## Authors

- **Muhammad Saad** - Full Stack Developer
- Portfolio: [codesbysaad](https://codesbysaad.tech/)
- LinkedIn: [Muhammad Saad](https://www.linkedin.com/in/itxsaaad/)
- Twitter: [@itxsaaad](https://twitter.com/itxsaaad)
- GitHub: [itxsaaad](https://github.com/itxsaaad)

See also the list of [contributors](https://github.com/itxsaaad/caption-forge-ai-app-next/graphs/contributors)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Support

Give ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/itxSaaad"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/itxsaaad/caption-forge-ai-app-next.svg?style=for-the-badge
[contributors-url]: https://github.com/itxsaaad/caption-forge-ai-app-next/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/itxsaaad/caption-forge-ai-app-next.svg?style=for-the-badge
[forks-url]: https://github.com/itxsaaad/caption-forge-ai-app-next/network/members
[stars-shield]: https://img.shields.io/github/stars/itxsaaad/caption-forge-ai-app-next.svg?style=for-the-badge
[stars-url]: https://github.com/itxsaaad/caption-forge-ai-app-next/stargazers
[issues-shield]: https://img.shields.io/github/issues/itxsaaad/caption-forge-ai-app-next.svg?style=for-the-badge
[issues-url]: https://github.com/itxsaaad/caption-forge-ai-app-next/issues
[license-shield]: https://img.shields.io/github/license/itxsaaad/caption-forge-ai-app-next.svg?style=for-the-badge
[license-url]: https://github.com/itxsaaad/caption-forge-ai-app-next/blob/main/LICENSE.md
