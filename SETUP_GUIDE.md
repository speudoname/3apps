# 3Apps Setup Guide

## 🚀 Quick Setup

### 1. Supabase Setup

1. Go to [Supabase](https://supabase.com) and create a new project called `3apps` in the DRM organization
2. Once created, go to **Settings → API** and copy:
   - `Project URL` (looks like: https://xxxxx.supabase.co)
   - `anon public` key

3. **IMPORTANT**: Disable email confirmation:
   - Go to **Authentication → Providers → Email**
   - Turn OFF "Confirm email"
   - Save changes

4. Run the SQL schema:
   - Go to **SQL Editor**
   - Copy contents from `supabase-schema.sql`
   - Run the query

5. Configure Authentication URLs:
   - Go to **Authentication → URL Configuration**
   - Set these URLs:

   **Site URL**: 
   ```
   https://3apps.vercel.app
   ```

   **Redirect URLs** (add all of these):
   ```
   https://3apps-demo.vercel.app
   https://3apps-demo.vercel.app/*
   https://3apps-demo.vercel.app/auth.html
   https://3apps-demo.vercel.app/index.html
   https://3apps-demo.vercel.app/calorie-counter.html
   https://3apps-demo.vercel.app/task-manager.html
   https://3apps-demo.vercel.app/inventory.html
   ```

### 2. Update .env File

Replace the values in `.env` with your actual Supabase credentials:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Deploy to Vercel

1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel --prod
   ```
   - Choose "3apps" as the project name
   - Link to existing GitHub repository

3. Add environment variables in Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your `3apps` project
   - Go to **Settings → Environment Variables**
   - Add these variables:
     - `SUPABASE_URL`: Your Supabase project URL
     - `SUPABASE_ANON_KEY`: Your Supabase anon key

### 4. Update HTML Files

Update the Supabase credentials in `auth.html`:
1. Replace `YOUR_SUPABASE_URL` with your actual Supabase URL
2. Replace `YOUR_SUPABASE_ANON_KEY` with your actual anon key

### 5. GitHub Repository

Your code is already pushed to: https://github.com/speudoname/3apps

### 6. Access Your App

Once deployed, your app will be available at:
- Production: https://3apps.vercel.app
- GitHub: https://github.com/speudoname/3apps

## 📝 Important Notes

- Email confirmation is disabled for easier testing
- All user data is stored securely in Supabase
- Row Level Security (RLS) ensures users can only see their own data
- The app works without authentication, but data won't be saved

## 🔧 Local Development

To run locally:
```bash
cd ~/Desktop/georgian-website
python3 -m http.server 8000
```
Then open http://localhost:8000

## 🎯 Features

### With Authentication:
- ✅ Save calorie tracking history
- ✅ Sync tasks across devices
- ✅ Store inventory data permanently
- ✅ Custom foods database per user
- ✅ Secure data storage

### Without Authentication:
- ✅ All features work locally
- ⚠️ Data is only stored in browser (localStorage)
- ⚠️ Data lost when clearing browser data

## 🆘 Troubleshooting

If authentication doesn't work:
1. Check Supabase URL and key are correct
2. Verify email confirmation is disabled
3. Check redirect URLs are properly configured
4. Make sure RLS policies are enabled

## 📧 Support

For issues, contact the AI Academia team or check the documentation.