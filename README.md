# 🍽️ FoodFlix - Food Delivery App

A modern, responsive food delivery application built with Next.js 13, TypeScript, and Tailwind CSS.

![FoodFlix Banner](https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## ✨ Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- 🌙 Dark/Light mode support
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 🔄 State management using React Context
- 🎭 Beautiful animations and transitions
- 🎯 Category-based filtering
- 🚀 Fast page loads with Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **State Management:** React Context
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Animation:** CSS Transitions & Keyframes

## 📋 Pages

- **Home:** Featured items, categories, and promotional banner
- **Menu:** Complete food listing with category filters
- **Cart:** Shopping cart with quantity controls
- **Checkout:** Delivery information form and order summary

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git@github.com:milindsri28/foodflix.git
   ```

2. **Install dependencies:**
   ```bash
   
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📱 Screenshots

### Home Page
- Beautiful hero banner with animations
- Category grid with hover effects
- Featured items section

### Menu Page
- Grid layout of food items
- Category filtering
- Add to cart functionality

### Cart Page
- Item quantity management
- Price calculations
- Order summary

### Checkout Page
- Delivery information form
- Order summary
- Success confirmation

## 🎯 Key Features Explained

### Shopping Cart
- Persistent cart storage using localStorage
- Real-time price updates
- Quantity management
- Remove items functionality

### Category System
- Dynamic category filtering
- Beautiful category cards
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Theme Support
- System preference detection
- Manual theme toggle
- Consistent styling across themes

## 🔧 Configuration

The application uses various configuration files:

- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration

## 📦 Project Structure

```
foodflix/
├── app/                 # Next.js app router pages
├── components/         # React components
│   ├── ui/            # Base UI components
│   ├── home/          # Home page components
│   ├── menu/          # Menu page components
│   └── cart/          # Cart components
├── context/           # React Context providers
├── lib/               # Utility functions
├── types/             # TypeScript types
└── public/            # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Pexels](https://www.pexels.com/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
