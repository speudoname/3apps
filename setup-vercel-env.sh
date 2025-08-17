#!/bin/bash

# This script will be used to set Vercel environment variables
# Once you provide the Supabase credentials

SUPABASE_URL="$1"
SUPABASE_ANON_KEY="$2"

if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_ANON_KEY" ]; then
    echo "Usage: ./setup-vercel-env.sh <SUPABASE_URL> <SUPABASE_ANON_KEY>"
    exit 1
fi

echo "Setting Vercel environment variables..."

# Add environment variables to Vercel
vercel env add SUPABASE_URL production <<< "$SUPABASE_URL"
vercel env add SUPABASE_ANON_KEY production <<< "$SUPABASE_ANON_KEY"

echo "Environment variables set successfully!"
echo "Triggering new deployment..."

# Trigger a new deployment
vercel --prod

echo "Done! Your app should be updated with the new environment variables."