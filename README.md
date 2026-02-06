# مركز الإمام الحسين (ع) الصحي - Website

A modern, professional healthcare center website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### ✅ **SEO Optimized**
- **Schema.org Structured Data** for LocalBusiness and MedicalClinic
- **Comprehensive Meta Tags** (OpenGraph, Twitter Cards)
- **robots.txt** for search engine crawling instructions
- **Sitemap** for better indexing
- **Arabic Language Optimization** with proper RTL support
- **Mobile-First Responsive Design**
- **Fast Loading** with Next.js optimization

### 🎨 **Modern UI/UX**
- **8 Comprehensive Sections:**
  1. Hero Section with video and strong CTAs
  2. About Us with mission, vision, and statistics
  3. Why Choose Us highlighting unique value propositions
  4. Specialized Clinics (18 specialties)
  5. Diagnostic Services (Lab & Radiology)
  6. Doctors Schedule with search and pagination
  7. Patient Testimonials with ratings
  8. FAQ Section with category filtering

- **Professional Design:**
  - Gradient backgrounds and modern color palette
  - Smooth animations and transitions
  - Hover effects and micro-interactions
  - Glassmorphism and shadow effects
  - Responsive across all devices

### 📱 **User Engagement**
- **WhatsApp Floating Button** for instant contact
- **Back to Top Button** for easy navigation
- **Smooth Scroll** behavior
- **Mobile-Optimized Navigation** with slide-out menu
- **Interactive FAQ** with accordion
- **Search Functionality** for doctors schedule

### 🏗️ **Technical Excellence**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Centralized Constants** for maintainability
- **Component-Based Architecture**
- **Optimized Images** with next/image
- **Clean Code Structure**

## 📊 Statistics

- **50,000+** Satisfied Patients
- **15+** Years of Experience
- **18** Specialized Clinics
- **15+** Specialist Doctors

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ih.website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ih.website/
├── public/
│   ├── images/
│   │   └── favicon.png
│   ├── ih.jpeg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx             # Home page
│   │   └── sitemap.ts           # Dynamic sitemap
│   ├── components/
│   │   ├── about-section.tsx
│   │   ├── animated-section.tsx
│   │   ├── back-to-top.tsx
│   │   ├── clinics-section.tsx
│   │   ├── contact-footer.tsx
│   │   ├── diagnostic-services.tsx
│   │   ├── doctors-schedule.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── whatsapp-float.tsx
│   │   ├── whatsapp-icon.tsx
│   │   ├── why-choose-us.tsx
│   │   └── ui/                  # Reusable UI components
│   ├── data/
│   │   ├── clinics.ts
│   │   ├── doctors.ts
│   │   ├── faq.ts
│   │   └── testimonials.ts
│   └── lib/
│       ├── constants.ts         # Centralized configuration
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Key Improvements Made

### **Phase 1: Infrastructure & SEO**
✅ Created centralized constants file (`src/lib/constants.ts`)
✅ Added `robots.txt` for search engines
✅ Implemented Schema.org structured data
✅ Enhanced metadata with OpenGraph and Twitter Cards
✅ Added proper alt text for images
✅ Optimized for Arabic language and RTL

### **Phase 2: New Content Sections**
✅ **About Us Section** - Mission, vision, and statistics
✅ **Why Choose Us** - Unique value propositions
✅ **Testimonials** - Patient reviews with ratings
✅ **FAQ Section** - Common questions with filtering

### **Phase 3: Design Enhancements**
✅ Improved hero section with better CTAs
✅ Enhanced footer with 4-column layout
✅ Added hover effects and animations
✅ Improved color scheme and gradients
✅ Better typography hierarchy

### **Phase 4: Code Quality**
✅ Replaced hardcoded values with constants
✅ Fixed all TypeScript lint errors
✅ Improved component structure
✅ Better code organization
✅ Type-safe implementations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://ih-health.center
```

### Update Constants

Edit `src/lib/constants.ts` to update:
- Contact information
- Social media links
- Statistics
- Services details
- Working hours

## 📱 Contact Information

- **Phone:** +961 1 454644
- **WhatsApp:** +961 76 040 882
- **Location:** برج البراجنة - نزلة مستشفى الرسول الأعظم - مقابل بناية الموسوي
- **Hours:** Monday - Saturday, 8:00 AM - 5:00 PM (Sunday closed)

## 🌐 Social Media

- Instagram: [@ih.healthcenter](https://www.instagram.com/ih.healthcenter)
- TikTok: [@user8186067258852](https://www.tiktok.com/@user8186067258852)

## 📝 License

© 2026 مركز الإمام الحسين (ع) الصحي - All rights reserved

## 🤝 Contributing

This is a private project for مركز الإمام الحسين (ع) الصحي.

## 📞 Support

For technical support or questions, please contact the development team.

---

**Built with ❤️ for our community**