#!/bin/bash

echo "Setting up Farmhouse Booking Website..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create public directory if it doesn't exist
mkdir -p public

# Start the development server
echo "Starting development server..."
npm run dev 