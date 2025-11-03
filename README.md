# Contentstack Website Replica

A modern, interactive React.js replica of the Contentstack landing page with enhanced features and improved user experience.

## Features

- ✨ **Modern Design** - Beautiful, polished UI with smooth animations
- 🎯 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Interactive Components** - Engaging carousels, hover effects, and transitions
- ⚡ **Performance Optimized** - Fast loading and smooth animations using Framer Motion
- 🎭 **Hero Carousel** - Auto-rotating hero section with manual controls
- 🏢 **Company Logos** - Smooth infinite scrolling company logos section
- 📱 **Mobile Menu** - Responsive navigation with mobile-friendly menu
- 🎪 **Customer Stories** - Interactive carousel for customer success stories
- 📚 **Latest Insights** - Beautiful grid layout for resources and insights

## Tech Stack

- **React 18** - Modern React with hooks
- **Contentstack SDK** - Headless CMS integration
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **React Router** - Client-side routing
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Contentstack account (optional - app works with fallback content if not configured)

### Quick Start (Without Contentstack)

1. **Clone or navigate to this project directory:**
   ```bash
   cd "CS Website replica 2"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - Components will show fallback/default content if Contentstack is not configured

### Setup with Contentstack (Recommended)

To enable dynamic content from Contentstack:

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_CONTENTSTACK_API_KEY=your_api_key_here
   REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
   REACT_APP_CONTENTSTACK_ENVIRONMENT=production
   REACT_APP_CONTENTSTACK_REGION=us
   ```
   
   See `ENV_SETUP.md` for detailed instructions on getting your credentials.

3. **Import Content Types:**
   - Content type schemas are in the `contentstack-schemas/` folder
   - Import them into your Contentstack stack (see `contentstack-schemas/README.md`)

4. **Create and Publish Content:**
   - Create entries for each content type in Contentstack
   - Publish them to your environment

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **Restart Required:**
   - If you modify the `.env` file, you must restart the development server
   - Stop the server (Ctrl+C) and run `npm start` again

For detailed Contentstack integration instructions, see `CONTENTSTACK_INTEGRATION.md`.

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
CS Website replica 2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TopBanner.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── CompanyLogos.js
│   │   ├── PlatformSection.js
│   │   ├── Features.js
│   │   ├── CustomerStories.js
│   │   ├── Insights.js
│   │   ├── CTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Components

### TopBanner
Announcement banner at the top of the page with gradient background.

### Header
Sticky navigation header with:
- Logo
- Navigation menu with dropdowns
- Search icon
- CTA buttons (Talk to Us, Start Free)
- Mobile-responsive menu

### Hero
Interactive hero section with:
- Auto-rotating carousel
- 4 different slides with unique gradients
- Manual navigation controls
- Pause/play functionality
- Smooth transitions

### CompanyLogos
Infinite scrolling company logos section with smooth animation.

### PlatformSection
Featured platform section with gradient background and CTAs.

### Features
Grid of feature cards showcasing platform capabilities:
- Headless CMS
- Personalization
- Customer Analytics
- Front-end Hosting
- Intelligent Agents

### CustomerStories
Interactive carousel showcasing customer success stories.

### Insights
Grid layout displaying latest resources and insights.

### CTA
Call-to-action sections encouraging user engagement.

### Footer
Comprehensive footer with:
- Multiple link sections
- Platform, Solutions, Resources links
- Company and Partner information
- Social media links
- Legal links

## Improvements Over Original

1. **Enhanced Animations** - Smooth transitions using Framer Motion
2. **Better Mobile Experience** - Improved responsive design
3. **Interactive Elements** - More engaging hover effects and interactions
4. **Modern Styling** - Updated color schemes and gradients
5. **Performance** - Optimized animations and rendering
6. **Accessibility** - Better ARIA labels and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created as a replica/demo project for demonstration purposes.

## Contact

For questions or issues, please refer to the project repository.

