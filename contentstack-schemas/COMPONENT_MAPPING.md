# Content Type to Component Mapping

This document maps Contentstack content types to their corresponding React components in the project.

## Mapping Overview

| Content Type | React Component | Location | Description |
|--------------|----------------|----------|-------------|
| `top_banner` | `TopBanner` | `src/components/TopBanner.js` | Announcement banner at top of page |
| `hero_slide` | `Hero` | `src/components/Hero.js` | Hero carousel slides |
| `company_logo` | `CompanyLogos` | `src/components/CompanyLogos.js` | Company logo carousel |
| `platform_section` | `PlatformSection` | `src/components/PlatformSection.js` | Platform overview section |
| `feature` | `Features` | `src/components/Features.js` | Feature cards grid |
| `customer_story` | `CustomerStories` | `src/components/CustomerStories.js` | Customer stories carousel |
| `insight` | `Insights` | `src/components/Insights.js` | Resources and insights grid |
| `cta_section` | `CTA` | `src/components/CTA.js` | Call-to-action sections |
| `platform_feature` | `Platform` | `src/pages/Platform.js` | Platform page features |
| `role` | `Platform` | `src/pages/Platform.js` | User roles section |

## Detailed Mappings

### 1. Top Banner

**Content Type:** `top_banner`  
**Component:** `TopBanner.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> Banner text
link_url -> href="/fall-product-update"
is_active -> Controls visibility
publish_date/expiry_date -> Date range visibility
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const topBanner = await Stack.ContentType('top_banner')
  .Query()
  .where('is_active', true)
  .toJSON()
  .find();

// Render
<TopBanner 
  title={topBanner[0].title}
  linkUrl={topBanner[0].link_url}
/>
```

### 2. Hero Slides

**Content Type:** `hero_slide`  
**Component:** `Hero.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> slides[].title
subtitle -> slides[].subtitle
description -> slides[].description
cta_text -> slides[].cta
cta_link -> slides[].link
background_gradient -> slides[].gradient
display_order -> Sorting order
is_active -> Filter
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const heroSlides = await Stack.ContentType('hero_slide')
  .Query()
  .where('is_active', true)
  .ascending('display_order')
  .toJSON()
  .find();

// Transform to component format
const slides = heroSlides.map(slide => ({
  title: slide.title,
  subtitle: slide.subtitle,
  description: slide.description,
  cta: slide.cta_text,
  link: slide.cta_link.href,
  gradient: slide.background_gradient
}));
```

### 3. Company Logos

**Content Type:** `company_logo`  
**Component:** `CompanyLogos.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
company_name -> Logo label
logo -> Logo image
company_url -> Optional link
display_order -> Sorting order
is_active -> Filter
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const companyLogos = await Stack.ContentType('company_logo')
  .Query()
  .where('is_active', true)
  .ascending('display_order')
  .toJSON()
  .find();
```

### 4. Platform Section

**Content Type:** `platform_section`  
**Component:** `PlatformSection.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> Platform title/description
badge_text -> Badge text
description -> Rich text description
primary_cta_text/link -> Primary button
secondary_cta_text/link -> Secondary button
```

**Usage in Component:**
```javascript
// Fetch from Contentstack (singleton)
const platformSection = await Stack.ContentType('platform_section')
  .Query()
  .toJSON()
  .find();

// Render
<PlatformSection 
  title={platformSection[0].title}
  badgeText={platformSection[0].badge_text}
  description={platformSection[0].description}
  primaryCta={{ text: platformSection[0].primary_cta_text, link: platformSection[0].primary_cta_link }}
  secondaryCta={{ text: platformSection[0].secondary_cta_text, link: platformSection[0].secondary_cta_link }}
/>
```

### 5. Features

**Content Type:** `feature`  
**Component:** `Features.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> features[].title
description -> features[].description
cta_text -> features[].cta
cta_link -> features[].link
icon -> Optional icon
is_featured -> Featured feature
display_order -> Sorting order
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const features = await Stack.ContentType('feature')
  .Query()
  .ascending('display_order')
  .toJSON()
  .find();

// Separate featured and regular features
const featuredFeature = features.find(f => f.is_featured);
const regularFeatures = features.filter(f => !f.is_featured);
```

### 6. Customer Stories

**Content Type:** `customer_story`  
**Component:** `CustomerStories.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> stories[].title
company_name -> Story identifier
description -> stories[].description
featured_image -> stories[].image
metric_value -> Optional metric
metric_label -> Optional metric label
case_study_url -> stories[].link
is_featured -> Featured stories
display_order -> Sorting order
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const customerStories = await Stack.ContentType('customer_story')
  .Query()
  .where('is_featured', true)
  .ascending('display_order')
  .toJSON()
  .find();
```

### 7. Insights

**Content Type:** `insight`  
**Component:** `Insights.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> insights[].title
resource_type -> insights[].tag
description -> Optional description
featured_image -> insights[].image
content -> Full rich text content
resource_url -> insights[].link
download_file -> Optional file download
publish_date -> Sorting by date
is_featured -> Featured insights
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const insights = await Stack.ContentType('insight')
  .Query()
  .where('is_featured', true)
  .descending('publish_date')
  .toJSON()
  .find();
```

### 8. CTA Sections

**Content Type:** `cta_section`  
**Component:** `CTA.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
section_title -> Internal identifier
title -> CTA headline
description -> CTA description
primary_cta_text/link -> Primary button
secondary_cta_text/link -> Secondary button
background_style -> Visual style
section_location -> Where to display (home/platform/both)
```

**Usage in Component:**
```javascript
// Fetch from Contentstack for home page
const ctaSections = await Stack.ContentType('cta_section')
  .Query()
  .in('section_location', ['home', 'both'])
  .toJSON()
  .find();
```

### 9. Platform Features

**Content Type:** `platform_feature`  
**Component:** `Platform.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> features[].title
description -> features[].description
feature_bullets -> features[].bullets[]
cta_text/link -> features[].cta/link
background_gradient -> features[].gradient
icon -> Optional icon
display_order -> Sorting order
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const platformFeatures = await Stack.ContentType('platform_feature')
  .Query()
  .ascending('display_order')
  .toJSON()
  .find();
```

### 10. Roles

**Content Type:** `role`  
**Component:** `Platform.js`

**Field Mappings:**
```javascript
// Contentstack Field -> Component Prop
title -> roles[].title
description -> roles[].description
cta_text/link -> roles[].cta/link
icon -> Optional icon
display_order -> Sorting order
```

**Usage in Component:**
```javascript
// Fetch from Contentstack
const roles = await Stack.ContentType('role')
  .Query()
  .ascending('display_order')
  .toJSON()
  .find();
```

## Integration Example

Here's a complete example of integrating Contentstack with the React app:

```javascript
// src/services/contentstack.js
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT || 'production'
});

export const getTopBanner = async () => {
  try {
    const banner = await Stack.ContentType('top_banner')
      .Query()
      .where('is_active', true)
      .toJSON()
      .find();
    return banner[0];
  } catch (error) {
    console.error('Error fetching top banner:', error);
    return null;
  }
};

export const getHeroSlides = async () => {
  try {
    const slides = await Stack.ContentType('hero_slide')
      .Query()
      .where('is_active', true)
      .ascending('display_order')
      .toJSON()
      .find();
    return slides;
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
};

export const getFeatures = async () => {
  try {
    const features = await Stack.ContentType('feature')
      .Query()
      .ascending('display_order')
      .toJSON()
      .find();
    return features;
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
};

// Add similar functions for other content types...
```

## Environment Variables

Add these to your `.env` file:

```env
REACT_APP_CONTENTSTACK_API_KEY=your_api_key
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
REACT_APP_CONTENTSTACK_ENVIRONMENT=production
REACT_APP_CONTENTSTACK_REGION=us
```

## Next Steps

1. Install Contentstack SDK:
   ```bash
   npm install contentstack
   ```

2. Create a service file for Contentstack API calls
3. Update components to fetch data from Contentstack
4. Add loading states and error handling
5. Implement caching for better performance

