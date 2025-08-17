# Supabase Configuration Instructions

## ✅ Already Completed:
1. ✅ Project created: `3apps` in DRM organization
2. ✅ Database schema applied
3. ✅ Credentials added to code
4. ✅ Environment variables set in Vercel

## ⚠️ Manual Steps Required:

### 1. Disable Email Confirmation
Go to: https://supabase.com/dashboard/project/alurbrjkglkmufckenxo/auth/providers

1. Click on **Email** provider
2. **TURN OFF** "Confirm email" toggle
3. Click **Save**

### 2. Configure Redirect URLs
Go to: https://supabase.com/dashboard/project/alurbrjkglkmufckenxo/auth/url-configuration

Set these values:

**Site URL:**
```
https://3apps-demo.vercel.app
```

**Redirect URLs (add all):**
```
https://3apps-demo.vercel.app
https://3apps-demo.vercel.app/*
https://3apps-demo.vercel.app/auth.html
https://3apps-demo.vercel.app/index.html
https://3apps-demo.vercel.app/calorie-counter.html
https://3apps-demo.vercel.app/task-manager.html
https://3apps-demo.vercel.app/inventory.html
```

Click **Save** after adding all URLs.

## 📝 Project Details:
- **Project URL**: https://alurbrjkglkmufckenxo.supabase.co
- **Dashboard**: https://supabase.com/dashboard/project/alurbrjkglkmufckenxo
- **Live App**: https://3apps-demo.vercel.app
- **GitHub**: https://github.com/speudoname/3apps

## 🔐 Database Password:
The database password has been securely stored in Supabase and should not be committed to version control.
Only use it for direct database connections when absolutely necessary.