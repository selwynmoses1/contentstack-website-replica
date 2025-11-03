# Environment Variables Setup

To connect your React application to Contentstack, you need to create a `.env` file in the root directory with the following variables:

## Required Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# Contentstack Configuration

# Your Contentstack API Key
# Find this in: Settings > Stack Settings > API Key
REACT_APP_CONTENTSTACK_API_KEY=your_api_key_here

# Your Content Delivery Token
# Find this in: Settings > Tokens > Delivery Tokens
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here

# Your Publishing Environment
# Common values: 'production', 'development', 'staging'
# Find this in: Settings > Environments
REACT_APP_CONTENTSTACK_ENVIRONMENT=production

# Contentstack Region
# Options: 'us', 'eu', 'azure-na', 'azure-eu'
# Default: 'us'
REACT_APP_CONTENTSTACK_REGION=us

# Live Preview Configuration (Optional)
# To enable Live Preview, uncomment and fill in these values:

# Preview Token (required for Live Preview)
# Generate this in: Settings > Tokens > Delivery Tokens > Create Preview Token
# REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here

# Management Token (optional, for enhanced Live Preview features)
# REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=your_management_token_here

# Preview Host (optional, defaults to 'rest-preview.contentstack.com')
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.com
```

## How to Get Your Contentstack Credentials

1. **API Key**: 
   - Log in to your Contentstack account
   - Go to Settings > Stack Settings
   - Copy the API Key

2. **Delivery Token**:
   - Go to Settings > Tokens > Delivery Tokens
   - Create a new token or copy an existing one
   - This token provides read-only access to published content

3. **Environment**:
   - Go to Settings > Environments
   - Use the environment name where your content is published (e.g., 'production', 'development')

4. **Region**:
   - Check your stack settings for the region
   - Common values: 'us', 'eu', 'azure-na', 'azure-eu'

5. **Preview Token** (Optional - for Live Preview):
   - Go to Settings > Tokens > Delivery Tokens
   - Click on your delivery token or create a new one
   - Click "Create Preview Token" to generate a preview token
   - Copy the preview token
   - This enables Live Preview functionality for real-time content updates

6. **Management Token** (Optional - for enhanced Live Preview):
   - Go to Settings > Tokens > Management Tokens
   - Create a new management token or use an existing one
   - This provides additional permissions for Live Preview features

## Important Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Restart your development server after creating or modifying the `.env` file
- All environment variables must start with `REACT_APP_` to be accessible in React

