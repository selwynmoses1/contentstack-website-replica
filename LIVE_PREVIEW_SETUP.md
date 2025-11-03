# Contentstack Live Preview Setup Guide

This guide explains how to set up and use Contentstack Live Preview with your React application.

## What is Live Preview?

Live Preview allows content editors to see real-time updates of their content changes before publishing. As you edit content in Contentstack, the changes automatically appear on your website without needing to refresh the page.

## Prerequisites

1. Contentstack account with a stack created
2. Content types imported and entries created
3. React application running (development server)

## Setup Instructions

### Step 1: Generate a Preview Token

1. **Log in to Contentstack**
2. **Navigate to Tokens:**
   - Go to **Settings** > **Tokens** > **Delivery Tokens**
3. **Create or Select a Delivery Token:**
   - Create a new delivery token or select an existing one
4. **Generate Preview Token:**
   - Click on your delivery token
   - Click **"Create Preview Token"** button
   - Copy the generated preview token (keep this secure!)

### Step 2: Enable Live Preview in Contentstack

1. **Go to Live Preview Settings:**
   - Navigate to **Settings** > **Live Preview**
2. **Enable Live Preview:**
   - Toggle **"Enable Live Preview"** to ON
3. **Set Default Preview Environment:**
   - Select your development/preview environment
   - This is typically `development` or `staging`
4. **Save Settings**

### Step 3: Configure Base URLs for Environments

1. **Go to Environment Settings:**
   - Navigate to **Settings** > **Environments**
2. **Set Base URLs:**
   - For each environment (development, staging, production), set the **Base URL**
   - **Development/Preview**: `http://localhost:3000` (or your dev server URL)
   - **Staging**: Your staging environment URL
   - **Production**: Your production environment URL
3. **Save Changes**

### Step 4: Update Environment Variables

Add the preview token to your `.env` file:

```env
# Existing Contentstack configuration...
REACT_APP_CONTENTSTACK_API_KEY=your_api_key
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
REACT_APP_CONTENTSTACK_ENVIRONMENT=production
REACT_APP_CONTENTSTACK_REGION=us

# Live Preview Configuration
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here

# Optional: Management Token for enhanced features
# REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=your_management_token_here

# Optional: Preview Host (defaults to rest-preview.contentstack.com)
# REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.com
```

### Step 5: Restart Development Server

After updating the `.env` file:

1. **Stop the development server** (Ctrl+C)
2. **Restart it:**
   ```bash
   npm start
   ```

3. **Check Console:**
   - You should see: `"Contentstack Live Preview initialized"` in the browser console

## How It Works

### Integration Details

The Live Preview integration works as follows:

1. **Service Layer** (`src/services/contentstack.js`):
   - Initializes Live Preview SDK when preview token is provided
   - Exports `onEntryChange` function for components to use

2. **Components**:
   - All components subscribe to Live Preview updates using `onEntryChange(fetchFunction)`
   - When content changes in Contentstack, the callback function is triggered
   - Components automatically refetch and update their content

3. **Real-time Updates**:
   - Changes in Contentstack trigger WebSocket/SSE updates
   - Components re-render with new content automatically
   - No page refresh needed!

## Testing Live Preview

### Method 1: Using Contentstack Live Preview UI

1. **Open Content Manager:**
   - In Contentstack, go to **Content Manager**
2. **Open an Entry:**
   - Select any content entry (e.g., a hero slide, feature, etc.)
3. **Enable Live Preview:**
   - Click the **"Live Preview"** button in the entry editor
4. **Edit Content:**
   - Make changes to any field
5. **See Updates:**
   - Changes appear immediately on your website!

### Method 2: Test in Browser

1. **Open your website** in a browser (e.g., `http://localhost:3000`)
2. **Open Contentstack** in another tab/window
3. **Edit content** in Contentstack
4. **Watch your website** - it updates automatically!

## Components with Live Preview

All the following components support Live Preview:

- ✅ **TopBanner** - Real-time banner updates
- ✅ **Hero** - Live slide updates
- ✅ **CompanyLogos** - Logo changes reflect immediately
- ✅ **PlatformSection** - Platform content updates live
- ✅ **Features** - Feature updates appear instantly
- ✅ **CustomerStories** - Story updates in real-time
- ✅ **Insights** - Insight/resource updates live
- ✅ **CTA** - CTA section updates instantly
- ✅ **Platform Page** - All platform page sections update live

## Troubleshooting

### Issue: Live Preview not working

**Check:**
1. ✅ Is the preview token set in `.env`?
2. ✅ Did you restart the development server after adding the token?
3. ✅ Is Live Preview enabled in Contentstack settings?
4. ✅ Are the Base URLs configured correctly?
5. ✅ Check browser console for errors

**Solutions:**
- Verify preview token is correct (no extra spaces)
- Ensure `.env` file is in the root directory
- Check that all environment variables start with `REACT_APP_`
- Verify the preview token is associated with the correct delivery token

### Issue: "Live Preview initialized" not appearing

- **Cause**: Preview token might not be set or invalid
- **Solution**: Double-check the token in `.env` and restart the server

### Issue: Updates not appearing

- **Cause**: WebSocket connection might be blocked
- **Solution**: 
  - Check firewall/network settings
  - Ensure your development server URL matches the Base URL in Contentstack
  - Try refreshing the page

### Issue: Multiple updates trigger

- **Cause**: This is normal - Live Preview triggers updates on any content change
- **Solution**: No action needed, but you can add debouncing if desired

## Advanced Configuration

### Custom Preview Host

If you need to use a custom preview host:

```env
REACT_APP_CONTENTSTACK_PREVIEW_HOST=custom-preview-host.com
```

### Region-Specific Hosts

- **US**: `rest-preview.contentstack.com` (default)
- **EU**: Check Contentstack documentation for EU preview host
- **Azure**: Use appropriate Azure preview endpoint

## Best Practices

1. **Development Environment:**
   - Use Live Preview primarily in development/staging environments
   - Keep production environment separate

2. **Security:**
   - Never commit `.env` file with tokens
   - Use different tokens for different environments
   - Rotate tokens periodically

3. **Performance:**
   - Live Preview adds minimal overhead
   - Updates are efficient and only trigger when content changes

4. **Testing:**
   - Test Live Preview with various content types
   - Verify all components update correctly
   - Test with multiple users editing simultaneously

## Additional Resources

- **Contentstack Live Preview Docs**: https://www.contentstack.com/docs/developers/set-up-live-preview/
- **Live Preview Utils SDK**: https://www.contentstack.com/docs/developers/set-up-live-preview/live-preview-implementation-for-reactjs-csr-website
- **Troubleshooting Guide**: https://www.contentstack.com/docs/developers/set-up-live-preview/troubleshooting-live-preview

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all configuration steps
3. Review Contentstack documentation
4. Check network connectivity

---

**Note**: Live Preview is optional. Your application works perfectly fine without it, but Live Preview greatly enhances the content editing experience!

