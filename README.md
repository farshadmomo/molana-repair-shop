# 🚗 Mechanic Diagnosis App - عیب‌یابی خودرو

A comprehensive car diagnostic web application that helps users identify vehicle problems through interactive forms, audio samples, and detailed guides. Built with modern web technologies and optimized for performance, this app serves as a digital assistant for both car owners and mechanics.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)

## 🎯 Project Overview

This application is designed to bridge the gap between car owners and professional diagnostic knowledge. It provides an intuitive interface where users can:

- **Identify car problems** through guided questionnaires
- **Listen to audio samples** of common vehicle issues
- **Compare different car models** and their typical problems
- **Access comprehensive guides** for troubleshooting and repairs

The app supports both Persian and English languages, making it accessible to a wide range of users in different regions.

## ✨ Key Features

### 🔧 Diagnostic Tools

- **Interactive Issue Forms**: Step-by-step questionnaires to identify specific car problems
- **Symptom-Based Analysis**: Input symptoms to get targeted diagnostic suggestions
- **Vehicle-Specific Guidance**: Tailored recommendations based on car make, model, and year

### 🎵 Audio Diagnostic System

- **Real Audio Samples**: High-quality recordings of actual car problems
- **Categorized Sounds**: Organized by component (engine, transmission, brakes, suspension)
- **Interactive Player**: Easy-to-use controls for listening to diagnostic samples
- **Problem Identification**: Match sounds to specific mechanical issues

### 📊 Car Comparison Tool

- **Model Comparison**: Compare different vehicles and their common issues
- **Issue Frequency**: See which problems are most common for specific models
- **Maintenance Insights**: Get preventive maintenance recommendations

### 🌐 Multi-Language Support

- **Persian Interface**: Full Persian language support for local users
- **English Support**: International accessibility
- **RTL Layout**: Proper right-to-left text support for Persian content

### 📱 Modern User Experience

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Intuitive Navigation**: Easy-to-use interface with clear visual hierarchy
- **Fast Performance**: Optimized loading times and smooth interactions
- **Accessibility**: Built with accessibility best practices

## 🛠️ Technical Architecture

### Frontend Stack

- **Next.js 15**: Latest version with App Router for optimal performance
- **React 19**: Modern React with latest features and optimizations
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **TypeScript**: Type-safe development with better code quality

### Key Components

- **AudioGrid**: Interactive audio player for diagnostic samples
- **CarIssueForm**: Dynamic forms for problem identification
- **ComparePageClient**: Vehicle comparison interface
- **IssuesCheck**: Comprehensive problem database and search
- **PerformanceMonitor**: Real-time performance tracking

### Data Management

- **JSON Databases**: Structured data for car issues, models, and audio samples
- **Context API**: State management for user interactions
- **Local Storage**: User preferences and session data

## 🎵 Audio Diagnostic Features

The app includes real audio samples of common car problems:

### Engine Sounds

- **Starter Motor Issues**: Clicking, grinding, or no-start sounds
- **Piston Problems**: Knocking, tapping, or rattling noises
- **Valve Issues**: Ticking, clicking, or chattering sounds
- **Belt Problems**: Squealing, chirping, or grinding noises

### Transmission Sounds

- **CV Joint Issues**: Clicking or popping during turns
- **Gearbox Problems**: Grinding, whining, or clunking sounds
- **Clutch Issues**: Squealing, grinding, or chattering noises

### Brake System

- **Brake Pad Wear**: Squealing, grinding, or metal-on-metal sounds
- **Rotor Problems**: Pulsing, grinding, or vibration noises
- **ABS Issues**: Clicking, grinding, or buzzing sounds

### Suspension & Steering

- **Shock Absorber**: Clunking, rattling, or bouncing sounds
- **Ball Joint**: Clicking, popping, or creaking noises
- **Steering Pump**: Whining, groaning, or squealing sounds

## 📊 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page with service information
│   ├── compare/           # Car comparison tool
│   ├── issueCheck/        # Interactive diagnostic forms
│   ├── issues/            # Comprehensive issues database
│   ├── sound-check/       # Audio diagnostic samples
│   └── page.js            # Home page with feature overview
├── components/            # Reusable React components
│   ├── AudioGrid.jsx      # Audio samples display and player
│   ├── CarIssueForm.jsx   # Dynamic diagnostic forms
│   ├── ComparePageClient.jsx # Vehicle comparison interface
│   ├── IssuesCheck.jsx    # Problem identification tools
│   └── Navbar.jsx         # Navigation component
├── context/               # React Context for state management
├── utils/                 # Utility functions
│   ├── performance.js     # Performance monitoring
│   ├── scrollTo.js        # Smooth scrolling utilities
│   └── seo.js             # SEO optimization helpers
public/
├── audio/                 # Audio sample files (MP3 format)
├── data/                  # JSON data files
│   ├── all-car-issues.json # Comprehensive issues database
│   ├── car-problems.json  # Problem definitions
│   └── cars-compare.json  # Vehicle comparison data
└── fonts/                 # Custom Persian fonts
```

## 🎨 Design Philosophy

### User-Centered Design

- **Intuitive Interface**: Simple, clear navigation that doesn't require technical knowledge
- **Visual Hierarchy**: Important information is prominently displayed
- **Consistent Styling**: Unified design language throughout the application

### Accessibility First

- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: High contrast ratios for better readability
- **Responsive Text**: Scalable fonts and proper spacing

### Performance Optimization

- **Fast Loading**: Optimized images, fonts, and code splitting
- **Smooth Interactions**: 60fps animations and transitions
- **Efficient Audio**: Compressed audio files with lazy loading
- **Bundle Optimization**: Minimal JavaScript bundles for faster loading

## 🌟 Unique Value Propositions

### For Car Owners

- **Self-Diagnosis**: Identify problems before visiting a mechanic
- **Cost Savings**: Avoid unnecessary repairs through accurate diagnosis
- **Educational**: Learn about car maintenance and common issues
- **Confidence**: Make informed decisions about vehicle repairs

### For Mechanics

- **Reference Tool**: Quick access to diagnostic information
- **Client Education**: Help customers understand their car problems
- **Efficiency**: Faster problem identification and explanation
- **Professional Image**: Demonstrate expertise with visual and audio aids

### For Students & Enthusiasts

- **Learning Resource**: Comprehensive database of car problems and solutions
- **Audio Training**: Develop skills in identifying car sounds
- **Technical Knowledge**: Deep dive into automotive systems
- **Practical Application**: Real-world diagnostic scenarios

## 🔮 Future Enhancements

The project is designed to be extensible with potential future features:

- **AI-Powered Diagnosis**: Machine learning for more accurate problem identification
- **Video Tutorials**: Step-by-step repair guides
- **Community Features**: User-generated content and reviews
- **Mobile App**: Native iOS and Android applications
- **Integration**: Connect with OBD-II scanners for real-time diagnostics

---

**Built with ❤️ for the automotive community**
