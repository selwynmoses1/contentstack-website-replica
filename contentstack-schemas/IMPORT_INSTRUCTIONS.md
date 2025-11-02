# Contentstack Content Types Import Instructions

This document provides detailed instructions for importing the content type schemas into your Contentstack stack.

## Prerequisites

1. A Contentstack account (sign up at https://www.contentstack.com)
2. A stack created in Contentstack
3. Contentstack CLI installed (optional, for command-line import)

## Import Methods

### Method 1: Using Contentstack UI (Recommended for Beginners)

1. **Access Content Types:**
   - Log in to your Contentstack account
   - Navigate to your stack
   - Go to Settings → Stack Settings → Content Types

2. **Import Individual Content Types:**
   - Click on "Import" button
   - Select "Content Type" tab
   - Click "Upload" and select one of the JSON files:
     - `top_banner.json`
     - `hero_slide.json`
     - `company_logo.json`
     - `platform_section.json`
     - `feature.json`
     - `customer_story.json`
     - `insight.json`
     - `cta_section.json`
     - `platform_feature.json`
     - `role.json`

3. **Repeat for Each Content Type:**
   - Import each content type individually
   - Wait for confirmation before importing the next one

### Method 2: Using Contentstack Management API

You can use the Contentstack Management API to import content types programmatically.

#### Using cURL:

```bash
# Set your API credentials
API_KEY="your_api_key"
MANAGEMENT_TOKEN="your_management_token"

# Import a content type
curl -X POST \
  "https://api.contentstack.io/v3/content_types" \
  -H "api_key: ${API_KEY}" \
  -H "authorization: ${MANAGEMENT_TOKEN}" \
  -H "Content-Type: application/json" \
  -d @top_banner.json
```

#### Using Node.js:

```javascript
const axios = require('axios');
const fs = require('fs');

const API_KEY = 'your_api_key';
const MANAGEMENT_TOKEN = 'your_management_token';
const BASE_URL = 'https://api.contentstack.io/v3';

async function importContentType(filePath) {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  try {
    const response = await axios.post(
      `${BASE_URL}/content_types`,
      content.content_type,
      {
        headers: {
          'api_key': API_KEY,
          'authorization': MANAGEMENT_TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log(`Successfully imported: ${content.content_type.title}`);
    return response.data;
  } catch (error) {
    console.error(`Error importing ${content.content_type.title}:`, error.response?.data || error.message);
  }
}

// Import all content types
const files = [
  'top_banner.json',
  'hero_slide.json',
  'company_logo.json',
  'platform_section.json',
  'feature.json',
  'customer_story.json',
  'insight.json',
  'cta_section.json',
  'platform_feature.json',
  'role.json'
];

files.forEach(file => {
  importContentType(`./${file}`);
});
```

### Method 3: Using Contentstack CLI

1. **Install Contentstack CLI:**
   ```bash
   npm install -g @contentstack/cli
   ```

2. **Login to Contentstack:**
   ```bash
   csdx auth:login
   ```

3. **Import Content Types:**
   ```bash
   csdx cm:stacks:import \
     --management-token <your_management_token> \
     --file-path ./contentstack-schemas/
   ```

## Import Order

While there are no hard dependencies, we recommend importing in this order:

1. `top_banner.json`
2. `hero_slide.json`
3. `company_logo.json`
4. `platform_section.json`
5. `feature.json`
6. `customer_story.json`
7. `insight.json`
8. `cta_section.json`
9. `platform_feature.json`
10. `role.json`

## Post-Import Steps

After importing the content types:

1. **Review Field Settings:**
   - Check each content type's fields
   - Adjust field validations if needed
   - Configure field help text

2. **Set Up Workflows:**
   - Configure publishing workflows
   - Set up content review processes

3. **Configure Permissions:**
   - Set user/role permissions for each content type
   - Configure access controls

4. **Create Sample Content:**
   - Create entries for each content type
   - Test the content model
   - Verify all fields work as expected

## Field Descriptions

### Top Banner
- **Title**: Banner announcement text
- **Link URL**: URL to navigate when clicked
- **Is Active**: Toggle to show/hide banner
- **Publish/Expiry Dates**: Control banner visibility period

### Hero Slide
- **Title**: Main headline text
- **Subtitle**: Secondary headline
- **Description**: Supporting text
- **CTA Text/Link**: Call-to-action button
- **Background Gradient**: CSS gradient string
- **Display Order**: Sort order in carousel

### Company Logo
- **Company Name**: Name of the company
- **Logo**: Company logo image file
- **Company URL**: Link to company website

### Platform Section
- **Title**: Section headline
- **Badge Text**: Small badge label
- **Description**: Rich text description
- **Primary/Secondary CTAs**: Button configurations

### Feature
- **Title**: Feature name
- **Description**: Feature description
- **CTA Text/Link**: Learn more link
- **Icon**: Feature icon image
- **Is Featured**: Mark as featured feature

### Customer Story
- **Title**: Story headline
- **Company Name**: Customer company name
- **Description**: Brief summary
- **Featured Image**: Story image
- **Metric Value/Label**: Success metrics
- **Testimonial**: Customer quote and attribution

### Insight
- **Title**: Resource title
- **Resource Type**: Type (E-book, Report, etc.)
- **Description**: Summary
- **Featured Image**: Cover image
- **Content**: Full rich text content
- **Download File**: PDF or other file
- **Resource URL**: Link to resource

### CTA Section
- **Section Title**: Internal identifier
- **Title**: CTA headline
- **Description**: Supporting text
- **Primary/Secondary CTAs**: Button configurations
- **Background Style**: Visual style (gradient, solid, light)
- **Section Location**: Where to display (home, platform, both)

### Platform Feature
- **Title**: Feature name
- **Description**: Feature description
- **Feature Bullets**: Array of bullet points
- **CTA Link/Text**: Learn more link
- **Background Gradient**: CSS gradient
- **Icon**: Feature icon

### Role
- **Title**: Role name (Business users, Developers & IT, etc.)
- **Description**: Role description
- **CTA Link/Text**: Learn more link
- **Icon**: Role icon

## Troubleshooting

### Common Issues

1. **Import Fails:**
   - Verify JSON syntax is valid
   - Check API credentials
   - Ensure stack exists

2. **Fields Not Appearing:**
   - Refresh the browser
   - Check field UIDs for duplicates
   - Verify JSON structure

3. **References Not Working:**
   - Import referenced content types first
   - Verify UIDs match exactly

## Support

For issues with:
- **Contentstack Platform**: Contact Contentstack support
- **Schema Structure**: Refer to Contentstack documentation
- **Import Process**: Check Contentstack CLI documentation

## Next Steps

After successfully importing the content types:

1. Create entries for each content type
2. Populate with sample or real content
3. Configure API keys and delivery tokens
4. Connect your React application to fetch content via Contentstack Delivery API

## Integration Example

Once content types are imported and entries are created, you can fetch content in your React app:

```javascript
import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
  api_key: 'your_api_key',
  delivery_token: 'your_delivery_token',
  environment: 'your_environment'
});

// Fetch hero slides
const heroSlides = await Stack.ContentType('hero_slide')
  .Query()
  .where('is_active', true)
  .toJSON()
  .find();

// Fetch features
const features = await Stack.ContentType('feature')
  .Query()
  .toJSON()
  .find();
```

