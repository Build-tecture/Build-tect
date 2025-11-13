# Buildtecture Website

A professional React website for Buildtecture, a construction & architecture firm. This project combines agency-style visual polish with product catalog functionality, featuring responsive design, accessibility compliance, and SEO optimization.

## 🚀 Features

- **Modern React Architecture**: Built with Vite, React Router, and modern hooks
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for professional micro-interactions
- **Accessibility**: WCAG AA compliant with proper ARIA attributes
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Code splitting, lazy loading, and optimized images
- **Interactive Components**: 
  - Filterable materials catalog with masonry layout
  - Project portfolio with case studies
  - Quote management system
  - Contact form with file upload
  - Blog with rich content

## 🛠 Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd buildtecture-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗 Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm test             # Run tests
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment Options

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder contents to your web server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── home/           # Home page specific components
│   └── layout/         # Layout components (Header, Footer)
├── contexts/           # React Context providers
├── pages/              # Page components
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles

public/                 # Static assets
├── favicon.svg
└── ...

config files:
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: `#1363DF` (Brand Blue)
- **Dark**: `#0F172A` (Brand Navy)
- **Accent**: `#D9B08C` (Warm Stone)
- **Muted**: `#6B7280` (Gray)

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular/Medium)

### Components
- Buttons: Primary and Secondary variants
- Cards: Consistent shadow and border radius
- Forms: Accessible with proper validation
- Navigation: Responsive with mobile hamburger menu

## 🔧 Customization

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Header.jsx`

### Modifying Content
- **Services**: Update `src/pages/Services.jsx` and `src/pages/ServiceDetail.jsx`
- **Projects**: Modify `src/pages/Projects.jsx` and `src/pages/ProjectDetail.jsx`
- **Materials**: Edit `src/pages/Materials.jsx` and `src/pages/MaterialDetail.jsx`
- **Blog**: Update `src/pages/Blog.jsx` and `src/pages/BlogPost.jsx`

### Styling Changes
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific: Use Tailwind classes

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

## 📈 Performance

- **Lighthouse Score Target**: 85+ Performance, 90+ Accessibility
- **Bundle Analysis**: Run `npm run build` to see chunk sizes
- **Image Optimization**: Use responsive images with proper srcset
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- Form validation with React Hook Form
- XSS protection through React's built-in escaping
- No sensitive data in client-side code
- HTTPS recommended for production

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Buildtecture. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: dev@buildtecture.com
- Documentation: See inline code comments
- Issues: Use GitHub issues for bug reports

---

Built with ❤️ by the Buildtecture development team
