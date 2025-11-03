# Contentstack Launch Deployment Guide

This guide explains how to deploy your React application to Contentstack Launch for hosting.

## What is Contentstack Launch?

Contentstack Launch is a hosting and deployment platform that automatically builds and deploys your GitHub repository. It provides:
- Automated builds from your GitHub repository
- Static site hosting with CDN
- Multiple environments (staging, production)
- Automatic deployments on git push
- Custom domains support

## Prerequisites

Before deploying to Contentstack Launch, ensure you have:

### 1. Required Accounts and Access

✅ **Contentstack Account with Launch Access**
   - Active Contentstack account
   - Launch feature enabled for your organization/stack
   - Admin or Launch permissions

✅ **GitHub Account**
   - GitHub account with the repository
   - Repository is already pushed to GitHub (you've done this ✅)

✅ **Contentstack Stack Setup**
   - Stack created in Contentstack
   - Content types imported (optional but recommended)
   - Content entries created (optional)
   - Delivery token created
   - Environment created (e.g., `production`, `development`)

### 2. Project Requirements

✅ **GitHub Repository**
   - Repository is public or Contentstack has access to it
   - Repository URL: `https://github.com/selwynmoses1/contentstack-website-replica.git`
   - Main branch: `main`

✅ **Project Build Configuration**
   - `package.json` with `build` script: `npm run build`
   - Build output directory: `build/` (standard for React apps)
   - Node.js version compatibility (v14+)

✅ **Environment Variables Ready**
   - API Key
   - Delivery Token
   - Environment name
   - Region
   - Preview Token (optional, for Live Preview)

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Repository

Ensure your repository is ready:

1. **Verify Build Configuration:**
   ```bash
   # Your package.json already has:
   "build": "react-scripts build"
   ```

2. **Test Local Build** (Optional but recommended):
   ```bash
   npm run build
   ```
   This should create a `build/` folder with your compiled React app.

3. **Ensure .env is NOT committed:**
   - ✅ `.env` is already in `.gitignore`
   - Never commit `.env` files to GitHub

### Step 2: Access Contentstack Launch

1. **Log in to Contentstack:**
   - Go to https://app.contentstack.com
   - Log in with your account

2. **Navigate to Launch:**
   - Click on **"Launch"** in the left navigation panel
   - If you don't see Launch, contact your organization admin to enable it

### Step 3: Connect GitHub Repository

1. **Create New Project:**
   - Click **"+ New Project"** button
   - Select **"Import from a Git Repository"**

2. **Authorize GitHub:**
   - Choose **"GitHub"** as your Git provider
   - Click **"Authorize"** or **"Connect GitHub"**
   - Authorize Contentstack to access your GitHub repositories
   - Select the repositories you want to give access to (or select all)

3. **Select Repository:**
   - Choose your repository: `selwynmoses1/contentstack-website-replica`
   - Select branch: `main` (or your preferred branch)

### Step 4: Configure Project Settings

1. **Basic Project Information:**
   - **Project Name**: `Contentstack Website Replica` (or your preferred name)
   - **Description**: Optional description
   - **Framework**: Should auto-detect as "React" or "Create React App"

2. **Build Configuration:**
   
   **Build Command:**
   ```bash
   npm run build
   ```
   
   **Output Directory:**
   ```
   build
   ```
   
   **Node Version:**
   - Select Node.js version: `18.x` or `20.x` (recommended)
   - Launch will handle Node.js installation

   **Install Command** (if needed):
   ```bash
   npm install
   ```
   (This is usually auto-detected)

3. **Root Directory:**
   - Leave empty (unless your React app is in a subfolder)

### Step 5: Set Up Environment Variables

This is **CRITICAL** - Add all required environment variables:

1. **Click on "Environment Variables" section**

2. **Add the following variables:**

   **Required Variables:**
   ```
   REACT_APP_CONTENTSTACK_API_KEY=your_api_key_here
   REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
   REACT_APP_CONTENTSTACK_ENVIRONMENT=production
   REACT_APP_CONTENTSTACK_REGION=us
   ```

   **Optional Variables (for Live Preview):**
   ```
   REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here
   REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=your_management_token_here
   REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.com
   ```

3. **Important Notes:**
   - ⚠️ **Never commit these values to GitHub** - they're already in `.gitignore`
   - ✅ Use the same values from your local `.env` file
   - ✅ Values are encrypted and secure in Launch
   - ✅ You can set different values for different environments

### Step 6: Configure Environment

1. **Environment Name:**
   - Name: `production` (or `staging`, `development`)
   - This should match your `REACT_APP_CONTENTSTACK_ENVIRONMENT` variable

2. **Build Settings:**
   - Verify build command: `npm run build`
   - Verify output directory: `build`
   - Node version: Select appropriate version

3. **Deployment Settings:**
   - **Auto-deploy**: Enable to deploy automatically on git push
   - **Deploy on pull request**: Optional (recommended for staging)

### Step 7: Deploy Your Project

1. **Review Configuration:**
   - Double-check all settings
   - Verify environment variables are set correctly
   - Ensure build configuration is correct

2. **Initial Deployment:**
   - Click **"Deploy"** or **"Save and Deploy"** button
   - Launch will:
     - Clone your repository
     - Install dependencies (`npm install`)
     - Run build command (`npm run build`)
     - Deploy the `build/` folder to hosting

3. **Monitor Deployment:**
   - Watch the build logs in real-time
   - Build should complete in 2-5 minutes
   - Check for any build errors

4. **Get Deployment URL:**
   - After successful deployment, Launch provides a unique URL
   - Format: `https://your-project-name.launch.contentstack.com`
   - Or custom domain if configured

### Step 8: Verify Deployment

1. **Check Your Live Site:**
   - Visit the deployment URL provided by Launch
   - Verify the site loads correctly
   - Test all pages and functionality

2. **Verify Content Loading:**
   - Check browser console for any errors
   - Verify content from Contentstack loads correctly
   - Test all components that fetch from Contentstack

3. **Check Environment Variables:**
   - Content should load from your specified environment
   - API calls should work correctly

## Multiple Environments Setup

You can set up multiple environments (staging, production):

### Create Staging Environment:

1. **Add New Environment:**
   - In Launch project, click **"+ Add Environment"**
   - Name: `staging`

2. **Configure Staging:**
   - Set different environment variables:
     ```
     REACT_APP_CONTENTSTACK_ENVIRONMENT=staging
     ```
   - Use staging Contentstack environment
   - Different deployment URL

3. **Benefits:**
   - Test changes before production
   - Separate staging and production deployments
   - Different environment variables per environment

## Continuous Deployment (Auto-Deploy)

### Enable Auto-Deploy:

1. **In Launch Settings:**
   - Enable **"Auto-deploy on push"**
   - Select branch: `main` (or your branch)

2. **How It Works:**
   - Every git push to `main` triggers automatic deployment
   - Launch rebuilds and redeploys automatically
   - Deployments are versioned and can be rolled back

### Manual Deploy:

- You can also trigger manual deployments
- Useful for specific commits or branches
- Full control over when to deploy

## Build Configuration Reference

Your React app configuration:

```json
{
  "scripts": {
    "build": "react-scripts build",
    "start": "react-scripts start"
  }
}
```

**Launch Configuration:**
- **Framework**: React (Create React App)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18.x or 20.x
- **Install Command**: `npm install` (auto-detected)

## Environment Variables Reference

### Required Variables:
```env
REACT_APP_CONTENTSTACK_API_KEY=your_api_key
REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
REACT_APP_CONTENTSTACK_ENVIRONMENT=production
REACT_APP_CONTENTSTACK_REGION=us
```

### Optional Variables (Live Preview):
```env
REACT_APP_CONTENTSTACK_PREVIEW_TOKEN=your_preview_token
REACT_APP_CONTENTSTACK_MANAGEMENT_TOKEN=your_management_token
REACT_APP_CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.com
```

⚠️ **Important**: All React environment variables must start with `REACT_APP_` to be accessible in the build.

## Troubleshooting

### Issue: Build Fails

**Common Causes:**
1. Missing environment variables
2. Build command incorrect
3. Output directory incorrect
4. Dependencies not installing

**Solutions:**
- Check build logs for specific errors
- Verify all environment variables are set
- Test build locally first: `npm run build`
- Ensure `package.json` has correct build script
- Check Node.js version compatibility

### Issue: Site Works But No Content Loading

**Causes:**
- Environment variables not set correctly
- Wrong API key or delivery token
- Environment name mismatch

**Solutions:**
- Verify environment variables in Launch settings
- Check browser console for API errors
- Ensure Contentstack credentials are correct
- Verify content is published in the specified environment

### Issue: 404 Errors on Routes

**Cause:** React Router client-side routing needs configuration

**Solution:** Configure Launch to handle client-side routing:
- Most hosting platforms need special configuration for SPA routes
- Check Launch documentation for SPA routing configuration
- May need to add a `_redirects` or rewrite rules file

### Issue: Environment Variables Not Working

**Causes:**
- Variables don't start with `REACT_APP_`
- Variables not set in Launch environment settings
- Build needs to be restarted after adding variables

**Solutions:**
- Ensure all variables start with `REACT_APP_`
- Add variables in Launch environment settings
- Redeploy after adding/updating variables

### Issue: Deployment URL Not Accessible

**Solutions:**
- Check deployment status in Launch dashboard
- Verify build completed successfully
- Check if custom domain needs DNS configuration
- Contact Contentstack support if issues persist

## Best Practices

### 1. Environment Management
- ✅ Use different environments for staging and production
- ✅ Set appropriate environment variables per environment
- ✅ Test in staging before deploying to production

### 2. Security
- ✅ Never commit `.env` files to GitHub
- ✅ Use secure environment variables in Launch
- ✅ Rotate tokens periodically
- ✅ Use different tokens for different environments

### 3. Deployment
- ✅ Test builds locally before deploying
- ✅ Enable auto-deploy for continuous delivery
- ✅ Review build logs for warnings
- ✅ Keep deployments organized with clear commit messages

### 4. Monitoring
- ✅ Monitor deployment success/failure
- ✅ Check application logs in Launch dashboard
- ✅ Monitor application performance
- ✅ Set up error tracking if needed

## Custom Domain Setup

### To Use Your Own Domain:

1. **In Launch Settings:**
   - Navigate to "Custom Domains"
   - Click "Add Custom Domain"

2. **Configure DNS:**
   - Add CNAME record pointing to Launch domain
   - Wait for DNS propagation (can take up to 48 hours)

3. **SSL Certificate:**
   - Launch automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## Additional Resources

- **Contentstack Launch Documentation**: https://www.contentstack.com/docs/developers/launch/
- **Launch Setup Guide**: https://www.contentstack.com/docs/developers/launch/getting-started
- **Environment Management**: https://www.contentstack.com/docs/developers/launch/environments
- **CLI for Launch**: https://www.contentstack.com/docs/developers/cli/cli-for-launch

## Support

If you encounter issues:
1. Check Launch documentation
2. Review build logs for errors
3. Verify environment variables
4. Test build locally
5. Contact Contentstack support if needed

---

## Quick Checklist

Before deploying, ensure:

- [ ] GitHub repository is pushed and accessible
- [ ] Contentstack account has Launch access
- [ ] Stack is created and configured
- [ ] Content types are imported (optional)
- [ ] Environment variables are ready (API key, delivery token, etc.)
- [ ] Build works locally (`npm run build`)
- [ ] `.env` file is not committed to GitHub
- [ ] All dependencies are in `package.json`

After deployment:

- [ ] Site loads correctly
- [ ] Content from Contentstack loads
- [ ] All pages/routes work
- [ ] Environment variables are set correctly
- [ ] Auto-deploy is configured (if desired)
- [ ] Custom domain is configured (if desired)

---

**Ready to deploy?** Follow the steps above and your React application will be live on Contentstack Launch! 🚀

