# 3Apps - AI Academia Demo Applications

🚀 **Live Demo**: https://3apps-demo.vercel.app

## 📱 Applications

### 1. 🍎 კალორიების კალკულატორი
- 100+ Georgian food database
- Custom food addition
- Daily tracking with macros
- AI recommendations

### 2. 📅 Task მენეჯერი
- Beautiful calendar view
- Priority management
- Task categories
- Progress tracking

### 3. 📦 მარაგების აღრიცხვა
- Inventory management
- AI predictions
- Low stock alerts
- Category organization

## 🔐 Authentication
Optional registration to save data in the cloud. Works without login (data saved locally).

## 🛠️ Tech Stack
- Pure HTML/CSS/JavaScript
- Supabase (Backend)
- Vercel (Hosting)

## 📝 Setup Instructions

### For Users:
Just visit https://3apps-demo.vercel.app

### For Developers:

1. **Clone the repository**
   ```bash
   git clone https://github.com/speudoname/3apps.git
   cd 3apps
   ```

2. **Create Supabase Project**
   - Go to [Supabase](https://supabase.com)
   - Create new project named `3apps`
   - Copy your project URL and anon key

3. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

4. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 📊 Database Schema

The app uses Supabase with the following tables:
- `profiles` - User profiles
- `calories_entries` - Food tracking data
- `custom_foods` - User's custom foods
- `tasks` - Task management
- `inventory_items` - Inventory tracking

All tables have Row Level Security (RLS) enabled for data privacy.

## 🌟 Features

✅ Works offline (localStorage)  
✅ Optional cloud sync  
✅ Georgian language UI  
✅ Responsive design  
✅ No build process needed  
✅ Privacy-focused (RLS)  

## 📄 License

MIT License - Feel free to use for educational purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions about the AI Academia course, visit our main website.

---

Made with ❤️ for AI Academia students