# PondyBazaar Fashions 👗

> A modern, luxury fashion e-commerce platform crafted with premium technologies and boutique-curated experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Running the Project](#running-the-project)
- [Database Schema](#database-schema)
- [Color Theme](#color-theme)
- [Key Components](#key-components)
- [API Routes](#api-routes)
- [Performance](#performance)
- [Security](#security)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

## 🎯 Overview

**PondyBazaar Fashions** is a full-stack, premium e-commerce platform specializing in boutique fashion and festive wear. Built with cutting-edge web technologies, it delivers a seamless shopping experience with advanced features like real-time inventory management, secure checkout, user authentication, and comprehensive admin controls.

The platform is optimized for **performance**, **security**, and **scalability**, making it ideal for fashion retailers looking to establish a professional online presence.

## ✨ Features

### Core Shopping Features

- 🛍️ **Product Catalog** - Browse featured and all available products with advanced filtering by category and search
- 🛒 **Shopping Cart** - Add/remove items with persistent state using React Context API
- 💳 **Checkout System** - Streamlined, secure checkout process with order confirmation
- 📦 **Order Management** - Users can view order history; admins manage all orders and inventory
- 👤 **User Profiles** - Personalized user accounts with order tracking and preferences

### Admin & Backend Features

- 🎨 **Admin Dashboard** - Comprehensive panel for product, order, and inventory management
- 📊 **Analytics** - Track sales, inventory levels, and customer trends
- 🔐 **Security** - Row Level Security (RLS) policies for secure database access
- 👥 **User Management** - Role-based access control (Admin/Customer)

### Technical Features

- ⚡ **Performance** - Next.js 16 with Turbopack for blazing-fast builds and hot reload
- 📱 **Responsive Design** - Mobile-first, fully responsive interface for all devices
- 🎨 **Modern UI** - Tailwind CSS with custom components and Lucide React icons
- 🎬 **Animations** - Smooth transitions with Framer Motion
- 🔔 **Toast Notifications** - Real-time user feedback with Sonner
- ♿ **Accessibility** - Semantic HTML and WCAG compliance
- 🌍 **SEO Optimized** - Meta tags, structured data, and next/link optimization

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16.2.4 with App Router
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion 12.38.0
- **Carousel**: Swiper 12.1.4
- **Notifications**: Sonner 2.0.7
- **Utilities**: clsx, tailwind-merge

### Backend & Database

- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with JWT
- **Database**: PostgreSQL with Row Level Security (RLS) policies
- **API**: REST (Supabase Auto-API)
- **Real-time**: Supabase Realtime subscriptions

### Development Tools

- **Linting**: ESLint 9 + ESLint Config Next
- **Package Manager**: npm (or Yarn/Bun)
- **Runtime**: Node.js 18+ or Bun
- **Version Control**: Git

## 📁 Project Structure

```
pondybazaarfashions/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Homepage with hero & featured products
│   ├── products/
│   │   ├── page.tsx               # All products listing
│   │   ├── products-client.tsx    # Client-side product filtering & sorting
│   │   └── [id]/
│   │       └── page.tsx           # Individual product detail page
│   └── (auth)/                    # Auth routes (if present)
│
├── components/                    # Reusable React components
│   ├── Navbar.tsx                 # Navigation header with cart icon
│   ├── Footer.tsx                 # Footer component
│   ├── ProductCard.tsx            # Product card component
│   ├── Loader.tsx                 # Loading spinner
│   └── ...                        # Other components
│
├── data/                          # Static data & mock data
│   └── products.ts                # Product catalog data
│
├── types/                         # TypeScript type definitions
│   └── product.ts                 # Product interface & types
│
├── styles/                        # Global styles
│   └── globals.css                # Tailwind CSS + custom CSS variables
│
├── public/                        # Static assets
│   ├── products/                  # Product images
│   └── ...
│
├── app/
│   └── (config files)
│
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── eslint.config.mjs              # ESLint configuration
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, Yarn, or Bun package manager
- Supabase account (free tier available at [supabase.com](https://supabase.com))
- Basic knowledge of Next.js, React, and TypeScript

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/pondybazaarfashions.git
   cd pondybazaarfashions
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure environment variables** (see [Environment Setup](#environment-setup) below)

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key

# Optional: API endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

**Note:** The `NEXT_PUBLIC_` prefix indicates these variables are exposed to the browser. Never expose sensitive keys or secrets.

### Getting Supabase Credentials

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** to find your project URL and anon key
3. Copy these values to your `.env.local` file

## ▶️ Running the Project

### Development Mode

```bash
npm run dev
```

Starts the development server with hot module reloading. Access at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

Builds the project for production and starts the server.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and style.

## 📊 Database Schema

### Products Table

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100),
  stock INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Product Type (TypeScript)**

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  is_featured: boolean;
  created_at: string;
}
```

### Orders Table

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  full_name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  phone VARCHAR(20),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Order Items Table

```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Profiles Table

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  avatar_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 Color Theme

PondyBazaar Fashions uses a vibrant **pink-based color palette** optimized for premium fashion retail:

| Color Name          | Hex Code  | RGB Value          | Usage                              |
| ------------------- | --------- | ------------------ | ---------------------------------- |
| **Primary Pink**    | `#ec4899` | rgb(236, 72, 153)  | Main brand color, buttons, accents |
| **Light Pink**      | `#fbcfe8` | rgb(251, 207, 232) | Secondary elements, hover states   |
| **Soft Background** | `#fff1f5` | rgb(255, 241, 245) | Page background, subtle overlays   |
| **Dark Text**       | `#1f2937` | rgb(31, 41, 55)    | Primary text, headings             |
| **Gray Text**       | `#6b7280` | rgb(107, 114, 128) | Secondary text, descriptions       |
| **White**           | `#ffffff` | rgb(255, 255, 255) | Cards, containers                  |
| **Light Gray**      | `#f3f4f6` | rgb(243, 244, 246) | Borders, dividers                  |

These colors are defined as CSS custom properties in [styles/globals.css](styles/globals.css) and integrated with Tailwind CSS for consistent styling across all components.

## 🧩 Key Components

### Navbar.tsx

Navigation header with:

- Brand logo and site navigation
- Search functionality (optional)
- Shopping cart icon with item count
- User authentication menu
- Mobile hamburger menu

### ProductCard.tsx

Reusable product display component featuring:

- Product image with hover effects
- Product name, description, and price
- Stock status indicator
- Add to cart button
- Wishlist toggle (optional)
- Category badge

### Footer.tsx

Footer section with:

- Brand information
- Quick links
- Social media connections
- Newsletter subscription
- Contact information

### Loader.tsx

Loading spinner component for:

- Page transitions
- Data fetching states
- Form submissions

## 🔌 API Routes & Backend Features

### Authentication

- `POST /auth/signup` - Create new user account
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/user` - Get current user profile

### Products

- `GET /products` - Fetch all products with filtering
- `GET /products/:id` - Get single product details
- `GET /products/category/:category` - Filter by category
- `GET /products/search?q=query` - Search products

### Orders

- `POST /orders` - Create new order
- `GET /orders` - Get user's orders
- `GET /orders/:id` - Get order details
- `PUT /orders/:id` - Update order status (admin only)

### Cart Management

- Implemented with **React Context API** (client-side)
- Persistent storage using localStorage
- Real-time cart updates and notifications

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component for responsive, optimized images
- **Code Splitting**: Automatic route-based and component-based code splitting
- **Turbopack**: Blazing-fast builds with incremental compilation
- **Caching**: Static generation (SSG) for product pages
- **Lazy Loading**: Dynamic imports for heavy components
- **Bundle Analysis**: ESLint for code quality

## 🔐 Security Features

### Authentication & Authorization

- Supabase Auth with secure JWT tokens
- Role-based access control (RBAC)
- Protected routes and API endpoints
- Password hashing and validation

### Database Security

- Row Level Security (RLS) policies
- SQL injection prevention via parameterized queries
- Data encryption in transit (HTTPS/SSL)
- Secure environment variable handling

### Frontend Security

- XSS protection via React's built-in escaping
- CSRF tokens for state-changing operations
- Secure cookie handling
- Content Security Policy (CSP) headers

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy with one click

```bash
# Environment variables needed in Vercel:
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

- **Netlify**: Supports Next.js with serverless functions
- **AWS Amplify**: Full-stack deployment with CI/CD
- **Self-hosted**: Deploy to any Node.js server (VPS, dedicated host, etc.)

## 📖 Usage Examples

### Adding a New Product

Update [data/products.ts](data/products.ts):

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  description: "Product description",
  price: 2999,
  image_url: "/products/image.jpg",
  category: "Category Name",
  stock: 10,
  is_featured: true,
  created_at: "2026-01-01",
}
```

### Creating a New Component

```typescript
// components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  // ... other props
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className="p-4">
      {title}
    </div>
  );
}
```

## 🔄 Development Workflow

1. **Create a branch**: `git checkout -b feature/feature-name`
2. **Make your changes** and test locally
3. **Commit with clear messages**: `git commit -m "Add feature description"`
4. **Push to remote**: `git push origin feature/feature-name`
5. **Create a Pull Request** for code review
6. **Merge to main** after approval

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Use descriptive variable and function names
- Add comments for complex logic
- Write unit tests for new features
- Ensure ESLint passes without warnings

## 📋 Project Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint checks        |

## 📁 File Structure Details

- **app/** - Next.js App Router pages and layouts
- **components/** - Reusable React components
- **data/** - Static data, configurations, and mock data
- **types/** - TypeScript interfaces and type definitions
- **styles/** - Global CSS and theme configurations
- **public/** - Static assets (images, icons, fonts)

## 🐛 Troubleshooting

### Common Issues

**Port 3000 is already in use**

```bash
# On macOS/Linux
lsof -i :3000
kill -9 <PID>

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Supabase connection issues**

- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`
- Check Supabase project status in dashboard
- Ensure RLS policies are correctly configured

**Build errors**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Contact & Support

- **Email**: support@pondybazaarfashions.com
- **WhatsApp**: +91 8608553151
- **Website**: www.pondybazaarfashions.com
- **GitHub Issues**: [Report bugs here](https://github.com/yourusername/pondybazaarfashions/issues)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [React Hook Form](https://react-hook-form.com/) - Efficient form management

---

**Last Updated**: May 6, 2026

Made with ❤️ by PondyBazaar Fashions Team
