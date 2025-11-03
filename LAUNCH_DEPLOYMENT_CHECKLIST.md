# Contentstack Launch Deployment Checklist

Use this checklist to ensure you're ready to deploy and that everything is configured correctly.

## Pre-Deployment Checklist

### ✅ Account & Access
- [ ] Contentstack account created and active
- [ ] Launch access enabled for your organization/stack
- [ ] GitHub account has the repository pushed
- [ ] GitHub repository is accessible

### ✅ Contentstack Stack Setup
- [ ] Stack created in Contentstack
- [ ] API Key obtained (Settings > Stack Settings)
- [ ] Delivery Token created (Settings > Tokens > Delivery Tokens)
- [ ] Environment created (Settings > Environments)
- [ ] Preview Token created (optional, for Live Preview)

### ✅ Project Configuration
- [ ] Repository is on GitHub: `selwynmoses1/contentstack-website-replica`
- [ ] Branch: `main` (or your preferred branch)
- [ ] `.env` file is NOT committed to GitHub
- [ ] `.gitignore` includes `.env` files
- [ ] `package.json` has correct build script: `npm run build`
- [ ] Local build works: `npm run build` succeeds

### ✅ Environment Variables Prepared
- [ ] `REACT_APP_CONTENTSTACK_API_KEY` - Value ready
- [ ] `REACT_APP_CONTENTSTACK_DELIVERY_TOKEN` - Value ready
- [ ] `REACT_APP_CONTENTSTACK_ENVIRONMENT` - Value ready (e.g., `production`)
- [ ] `REACT_APP_CONTENTSTACK_REGION` - Value ready (e.g., `us`)
- [ ] `REACT_APP_CONTENTSTACK_PREVIEW_TOKEN` - Optional, value ready if using Live Preview

## Deployment Steps Checklist

### Step 1: Access Launch
- [ ] Logged in to Contentstack
- [ ] Clicked "Launch" in left navigation
- [ ] Launch is accessible and working

### Step 2: Create Project
- [ ] Clicked "+ New Project"
- [ ] Selected "Import from a Git Repository"
- [ ] Authorized GitHub connection
- [ ] Selected repository: `selwynmoses1/contentstack-website-replica`
- [ ] Selected branch: `main`

### Step 3: Configure Build Settings
- [ ] Project name set
- [ ] Framework auto-detected as React/Create React App
- [ ] Build command: `npm run build`
- [ ] Output directory: `build`
- [ ] Node version selected (18.x or 20.x)
- [ ] Install command: `npm install` (auto-detected)

### Step 4: Set Environment Variables
- [ ] Added `REACT_APP_CONTENTSTACK_API_KEY`
- [ ] Added `REACT_APP_CONTENTSTACK_DELIVERY_TOKEN`
- [ ] Added `REACT_APP_CONTENTSTACK_ENVIRONMENT`
- [ ] Added `REACT_APP_CONTENTSTACK_REGION`
- [ ] Added `REACT_APP_CONTENTSTACK_PREVIEW_TOKEN` (if using Live Preview)
- [ ] Verified all variable values are correct
- [ ] No typos or extra spaces in values

### Step 5: Configure Environment
- [ ] Environment name set (e.g., `production`)
- [ ] Environment name matches `REACT_APP_CONTENTSTACK_ENVIRONMENT`
- [ ] Auto-deploy enabled (optional but recommended)
- [ ] Deployment settings reviewed

### Step 6: Initial Deployment
- [ ] Clicked "Deploy" or "Save and Deploy"
- [ ] Deployment started
- [ ] Build logs monitored
- [ ] Build completed successfully
- [ ] No build errors

### Step 7: Verify Deployment
- [ ] Deployment URL received
- [ ] Site loads in browser
- [ ] No console errors
- [ ] Content from Contentstack loads correctly
- [ ] All pages/routes work (Home, Platform, etc.)
- [ ] Components display correctly
- [ ] Images and assets load
- [ ] Navigation works

## Post-Deployment Checklist

### ✅ Functionality Verification
- [ ] Home page loads correctly
- [ ] Platform page loads correctly
- [ ] TopBanner component works
- [ ] Hero carousel works
- [ ] Company logos display
- [ ] Features section displays
- [ ] Customer stories display
- [ ] Insights section displays
- [ ] CTA sections display
- [ ] Footer loads correctly
- [ ] All links work
- [ ] Mobile responsive design works

### ✅ Contentstack Integration
- [ ] Content loads from Contentstack (if configured)
- [ ] API calls succeed (check browser console)
- [ ] No Contentstack API errors
- [ ] Environment variables working correctly
- [ ] Content updates reflect on site

### ✅ Configuration
- [ ] Auto-deploy configured (if desired)
- [ ] Branch for auto-deploy selected
- [ ] Custom domain configured (if desired)
- [ ] SSL certificate active (automatic)

### ✅ Multiple Environments (Optional)
- [ ] Staging environment created (if needed)
- [ ] Staging environment variables set
- [ ] Staging URL working
- [ ] Production environment separate from staging

## Troubleshooting Checklist

If deployment fails or site doesn't work:

- [ ] Checked build logs for errors
- [ ] Verified environment variables are set correctly
- [ ] Tested build locally (`npm run build`)
- [ ] Checked browser console for errors
- [ ] Verified Contentstack credentials are correct
- [ ] Ensured content is published in Contentstack environment
- [ ] Checked Launch documentation
- [ ] Contacted Contentstack support (if needed)

## Security Checklist

- [ ] `.env` file is NOT in GitHub
- [ ] Environment variables are set in Launch (not in code)
- [ ] API keys and tokens are secure
- [ ] Different tokens used for staging/production
- [ ] Access to Launch is restricted appropriately

## Final Checklist

Before marking deployment as complete:

- [ ] Site is live and accessible
- [ ] All functionality works
- [ ] Content loads correctly
- [ ] No errors in console
- [ ] Auto-deploy configured (if desired)
- [ ] Documentation updated
- [ ] Team notified of deployment URL

---

## Quick Reference

**Repository:** `https://github.com/selwynmoses1/contentstack-website-replica.git`

**Branch:** `main`

**Build Command:** `npm run build`

**Output Directory:** `build`

**Required Environment Variables:**
- `REACT_APP_CONTENTSTACK_API_KEY`
- `REACT_APP_CONTENTSTACK_DELIVERY_TOKEN`
- `REACT_APP_CONTENTSTACK_ENVIRONMENT`
- `REACT_APP_CONTENTSTACK_REGION`

**Deployment Guide:** See `CONTENTSTACK_LAUNCH_DEPLOYMENT.md`

---

✅ **Ready when all checkboxes are checked!**

