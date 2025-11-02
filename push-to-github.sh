#!/bin/bash

# Script to push Contentstack Website Replica to GitHub
# Replace YOUR_USERNAME with your GitHub username

echo "🚀 Ready to push to GitHub!"
echo ""
echo "Before running this script:"
echo "1. Create a new repository on GitHub at https://github.com/new"
echo "2. Replace YOUR_USERNAME in the script below with your GitHub username"
echo "3. Update the repository name if different"
echo ""
read -p "Have you created the repository on GitHub? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Please create the repository on GitHub first, then run this script again."
    exit 1
fi

# Replace these with your GitHub username and repository name
GITHUB_USERNAME="YOUR_USERNAME"
REPO_NAME="contentstack-website-replica"

echo "Setting up remote and pushing..."
echo ""

# Add remote (using HTTPS - you can change to SSH if preferred)
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# Push to GitHub
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "🌐 View your repository at: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"

