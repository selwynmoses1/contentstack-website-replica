# Contentstack Integration Guide

This document explains how Contentstack has been integrated into your React application and how to configure it.

## Overview

Your React application has been fully integrated with Contentstack. All components now fetch their data from Contentstack instead of using hardcoded values. When content is created and published in Contentstack, it will automatically appear on your website.

## What Was Integrated

### 1. Contentstack SDK Installation
- Installed `contentstack` npm package
- Created service file at `src/services/contentstack.js` with all API functions

### 2. Components Updated
All the following components now fetch data from Contentstack:

#### Home Page Components:
- **TopBanner** - Fetches announcement banner from `top_banner` content type
- **Hero** - Fetches carousel slides from `hero_slide` content type
- **CompanyLogos** - Fetches company logos from `company_logo` content type
- **PlatformSection** - Fetches platform overview from `platform_section` content type
- **Features** - Fetches features from `feature` content type
- **CustomerStories** - Fetches customer stories from `customer_story` content type
- **Insights** - Fetches resources and insights from `insight` content type
- **CTA** - Fetches call-to-action sections from `cta_section` content type

#### Platform Page Components:
- **Platform Features** - Fetches from `platform_feature` content type
- **Roles** - Fetches from `role` content type
- **Customer Stories** - Uses same `customer_story` content type
- **CTA Sections** - Uses same `cta_section` content type

### 3. Configuration Files Created
- **ENV_SETUP.md** - Instructions for setting up environment variables
- **.gitignore** - Updated to exclude `.env` files
- **src/services/contentstack.js** - Complete Contentstack service layer

## Setup Instructions

### Step 1: Configure Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add your Contentstack credentials:

```env
REACT_APP_CONTENTSTACK_API_KEY=your_api_key_here
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
REACT_APP_CONTENTSTACK_ENVIRONMENT=production
REACT_APP_CONTENTSTACK_REGION=us
```

### Step 2: Get Your Contentstack Credentials

1. **API Key**:
   - Log in to Contentstack
   - Go to Settings > Stack Settings
   - Copy the API Key

2. **Delivery Token**:
   - Go to Settings > Tokens > Delivery Tokens
   - Create a new token or use an existing one
   - Copy the Delivery Token

3. **Environment**:
   - Go to Settings > Environments
   - Note the environment name where your content will be published (usually "production" or "development")

4. **Region**:
   - Check your stack settings for the region
   - Common values: `us`, `eu`, `azure-na`, `azure-eu`

### Step 3: Import Content Types

Your content types are already defined in the `contentstack-schemas/` folder. Import them into Contentstack:

1. **Via Contentstack UI**:
   - Go to Settings > Stack Settings > Content Types
   - Click "Import" and upload each JSON file from `contentstack-schemas/`
   - Import in this order (see `contentstack-schemas/README.md`)

2. **Via Management API**:
   - Use the Contentstack Management API to import programmatically

### Step 4: Create Content Entries

After importing content types, create entries in Contentstack:

1. Go to Content Manager in Contentstack
2. Create entries for each content type
3. Fill in the required fields
4. Publish the entries to your environment

### Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm start
   ```

2. The application will now fetch content from Contentstack
3. If no content is found, components will show fallback/default content
4. Check the browser console for any errors

## How It Works

### Service Layer (`src/services/contentstack.js`)

The service file contains functions for fetching each content type:

- `getTopBanner()` - Fetches active top banner
- `getHeroSlides()` - Fetches hero carousel slides
- `getCompanyLogos()` - Fetches company logos
- `getPlatformSection()` - Fetches platform section
- `getFeatures()` - Fetches features
- `getCustomerStories()` - Fetches customer stories
- `getInsights()` - Fetches insights/resources
- `getCTASections(location)` - Fetches CTA sections for home or platform pages
- `getPlatformFeatures()` - Fetches platform page features
- `getRoles()` - Fetches user roles

### Component Integration

Each component:
1. Uses `useState` to store fetched data
2. Uses `useEffect` to fetch data on mount
3. Shows loading states while fetching
4. Falls back to default content if Contentstack data is unavailable
5. Handles errors gracefully

### Data Flow

```
Contentstack → Service Layer → React Components → UI
```

When content is published in Contentstack:
1. It becomes available via the Content Delivery API
2. Components fetch it on page load (or when data changes)
3. The UI updates automatically

## Content Type Mapping

See `contentstack-schemas/COMPONENT_MAPPING.md` for detailed mapping between Contentstack content types and React components.

## Troubleshooting

### Issue: No content showing
- **Check**: Are environment variables set correctly?
- **Check**: Have you published content in Contentstack?
- **Check**: Is the environment name correct?
- **Solution**: Components have fallback content, so they should still render

### Issue: Console errors about API keys
- **Check**: Is your `.env` file in the root directory?
- **Check**: Do all variables start with `REACT_APP_`?
- **Solution**: Restart your development server after creating/modifying `.env`

### Issue: Content not updating
- **Check**: Is the content published to the correct environment?
- **Check**: Are you using the correct delivery token?
- **Solution**: Content updates automatically when published in Contentstack

### Issue: Images not displaying
- **Check**: Are image assets uploaded to Contentstack?
- **Check**: Are image fields properly configured in content types?
- **Solution**: Ensure images are published with entries

## Next Steps

1. **Create Content**: Add content to Contentstack using the imported content types
2. **Publish**: Publish content to your environment
3. **Verify**: Check that content appears on your website
4. **Customize**: Adjust component styling if needed for your content

## Support

- **Contentstack Documentation**: https://www.contentstack.com/docs/
- **Contentstack Developer Hub**: https://www.contentstack.com/docs/developers/
- **SDK Documentation**: https://www.contentstack.com/docs/developers/content-delivery-sdks/javascript-browser/

## Notes

- All components have fallback content if Contentstack data is unavailable
- Error handling is built into all data fetching functions
- Loading states are shown while fetching data
- The integration is non-breaking - your app will work even without Contentstack configured

