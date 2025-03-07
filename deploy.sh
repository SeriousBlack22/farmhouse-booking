#!/bin/bash

echo "Preparing for deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Deploy to Vercel (if Vercel CLI is installed)
if command -v vercel &> /dev/null
then
    echo "Deploying to Vercel..."
    vercel --prod
else
    echo "Vercel CLI not found. Please install it with 'npm i -g vercel' and run 'vercel --prod' to deploy."
fi

echo "Deployment preparation complete!" 