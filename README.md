# 🚗 Mechanic Diagnosis App - عیب‌یابی خودرو

A comprehensive car diagnostic web application built with Next.js that helps users identify vehicle problems through interactive forms, audio samples, and detailed guides. The app supports both Persian and English languages and provides specialized diagnostic tools for various car components.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)

## ✨ Features

### 🔧 Core Functionality

- **Vehicle Issue Diagnosis**: Interactive forms to identify car problems based on symptoms
- **Audio Diagnostic Samples**: Listen to real audio samples of common car problems
- **Car Comparison Tool**: Compare different vehicle models and their common issues
- **Comprehensive Issue Database**: Extensive database of car problems with solutions
- **Multi-language Support**: Persian and English language support

### 🎵 Audio Features

- **Real Audio Samples**: High-quality audio recordings of various car problems
- **Interactive Audio Player**: Easy-to-use audio controls for diagnostic samples
- **Categorized Sounds**: Organized audio samples by car component (engine, transmission, brakes, etc.)

### 🚀 Technical Features

- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **SEO Optimized**: Complete SEO implementation with meta tags, sitemaps, and structured data
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, intuitive interface with Tailwind CSS
- **Bundle Analysis**: Built-in performance monitoring and optimization tools

### 📱 Pages & Sections

- **Home Page**: Welcome page with feature overview
- **Issue Check**: Interactive diagnostic form
- **Sound Check**: Audio samples for problem identification
- **Issues Guide**: Comprehensive problem database
- **Car Comparison**: Vehicle comparison tool
- **About Page**: Information about the diagnostic service

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Language**: JavaScript/TypeScript
- **Icons**: Heroicons, Lucide React, React Icons
- **UI Components**: Headless UI
- **Performance**: Bundle Analyzer, Performance Monitoring
- **SEO**: Custom SEO utilities, Sitemap generation

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/mechanic-diagnosis.git
   cd mechanic-diagnosis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues

# Analysis & Optimization
npm run analyze         # Analyze bundle size
npm run build:analyze   # Build and analyze bundle
npm run validate        # Validate configuration
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── compare/           # Car comparison tool
│   ├── issueCheck/        # Issue diagnostic form
│   ├── issues/            # Issues database
│   ├── sound-check/       # Audio diagnostic samples
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── robots.js          # SEO robots.txt
│   └── sitemap.js         # SEO sitemap
├── components/            # React components
│   ├── AudioGrid.jsx      # Audio samples grid
│   ├── CarIssueForm.jsx   # Diagnostic form
│   ├── ComparePageClient.jsx # Car comparison
│   ├── HomePageContent.jsx # Home page content
│   ├── IssuesCheck.jsx    # Issue checking
│   ├── Navbar.jsx         # Navigation
│   └── ...                # Other components
├── context/               # React context
├── utils/                 # Utility functions
│   ├── performance.js     # Performance monitoring
│   ├── scrollTo.js        # Scroll utilities
│   └── seo.js             # SEO utilities
public/
├── audio/                 # Audio sample files
├── data/                  # JSON data files
├── fonts/                 # Custom fonts
└── images/                # Image assets
```

## 🎯 Key Features Explained

### Audio Diagnostic System

The app includes real audio samples of common car problems, allowing users to:

- Listen to engine sounds (starter motor, piston, valve issues)
- Hear transmission problems (CV joint, gearbox sounds)
- Identify brake system issues (brake pad sounds)
- Recognize suspension problems (shock absorber, ball joint sounds)

### Interactive Diagnostic Forms

Users can input their vehicle information and symptoms to get:

- Targeted problem identification
- Recommended solutions
- Related audio samples for verification
- Step-by-step repair guides

### Performance Optimizations

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Analysis**: Built-in tools to monitor and optimize bundle size
- **SEO Optimization**: Complete meta tags, structured data, and sitemap generation

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Other Deployment Options

- **Netlify**: Compatible with static export
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 📊 Performance Metrics

The application includes built-in performance monitoring:

- Bundle size analysis
- Core Web Vitals tracking
- SEO score monitoring
- Loading time optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/) and [Lucide](https://lucide.dev/)
- Audio samples recorded for educational purposes

## 📞 Support

For support, email support@example.com or create an issue in this repository.

---

**Made with ❤️ for car enthusiasts and mechanics**
