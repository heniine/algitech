# Kasper - Modern Portfolio Website

A sleek, responsive portfolio website built with modern web technologies, featuring smooth animations, interactive elements, and a professional design.

## 🌐 Live Demo

**[View Live Demo →](https://abdelrahman-samy-dev.github.io/kasper/)**

[![Website Preview](https://img.shields.io/badge/Website-Live-brightgreen)](https://abdelrahman-samy-dev.github.io/kasper/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://pages.github.com/)

## 🌟 Features

### Design & User Experience
- **Modern Gradient Design**: Eye-catching gradient backgrounds and color schemes
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions throughout the site
- **Loading Screen**: Professional loading animation on page load
- **Parallax Effects**: Subtle parallax scrolling for visual depth

### Navigation & Interactions
- **Sticky Header**: Fixed navigation header with scroll effects
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated scrolling between sections
- **Active Section Highlighting**: Navigation links highlight based on current section
- **Scroll to Top Button**: Floating button to return to top of page

### Interactive Components
- **Portfolio Filter**: Filter portfolio items by category
- **Counter Animations**: Animated number counters in statistics section
- **Testimonials Slider**: Auto-advancing testimonial carousel
- **Typing Effect**: Animated typing effect for hero title
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Button Ripple Effects**: Material Design-inspired button animations

### Technical Features
- **Intersection Observer**: Efficient scroll-based animations
- **CSS Custom Properties**: Maintainable CSS with CSS variables
- **Modern CSS**: Flexbox and Grid layouts
- **Performance Optimized**: Smooth 60fps animations
- **Cross-browser Compatible**: Works across modern browsers

## 🚀 Quick Start

### Option 1: View Online
Visit the live demo: **[kasper.abdelrahman-samy-dev.github.io](https://abdelrahman-samy-dev.github.io/kasper/)**

### Option 2: Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/abdelrahman-samy-dev/kasper.git
   ```
2. **Navigate to project folder**
   ```bash
   cd kasper
   ```
3. **Open in browser**
   ```bash
   # Open index.html in your preferred browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

## 📁 Project Structure

```
kasper/
├── index.html          # Main HTML file
├── kasper.css         # Main stylesheet
├── main.js            # JavaScript functionality
└── README.md          # Project documentation
```

## 🔗 Repository Links

- **GitHub Repository**: [https://github.com/abdelrahman-samy-dev/kasper](https://github.com/abdelrahman-samy-dev/kasper)
- **Live Website**: [https://abdelrahman-samy-dev.github.io/kasper/](https://abdelrahman-samy-dev.github.io/kasper/)
- **Developer**: [@abdelrahman-samy-dev](https://github.com/abdelrahman-samy-dev)

## 🎨 Customization

### Colors & Theming
The website uses CSS custom properties for easy theming. Modify these variables in `kasper.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    --text-dark: #1e293b;
    --text-light: #64748b;
    /* ... more variables */
}
```

### Sections
The website includes these main sections:
- **Hero Section**: Landing area with call-to-action
- **Services**: Services or skills showcase
- **Portfolio**: Project gallery with filtering
- **Statistics**: Animated counters for achievements
- **Testimonials**: Client testimonials carousel
- **Contact**: Contact form and information

### Fonts
The project uses Google Fonts:
- **Inter**: Main body font
- **Playfair Display**: Headings and titles

Add this to your HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

## 🚀 Deployment

This project is automatically deployed using **GitHub Pages**. Any changes pushed to the `main` branch will be automatically reflected on the live website.

### Deploy Your Own Version
1. **Fork this repository**
2. **Go to Settings** → **Pages**
3. **Select Source**: Deploy from a branch
4. **Choose Branch**: main
5. **Click Save**
6. **Your site will be available at**: `https://YOUR_USERNAME.github.io/kasper/`

## 🔧 Configuration

### Portfolio Filtering
To add portfolio items, use this structure:
```html
<div class="portfolio-item" data-category="web">
    <!-- Portfolio item content -->
</div>
```

### Statistics Counter
For animated counters, use:
```html
<span class="stat-number" data-target="150">0</span>
```

### Testimonials
Add testimonials with this format:
```html
<div class="testimonial">
    <p class="testimonial-text">"Your testimonial text here"</p>
    <div class="testimonial-author">
        <!-- Author info -->
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Features Checklist

- ✅ Responsive design
- ✅ Loading screen
- ✅ Sticky navigation
- ✅ Mobile menu
- ✅ Smooth scrolling
- ✅ Portfolio filtering
- ✅ Animated counters
- ✅ Testimonials slider
- ✅ Contact form
- ✅ Scroll animations
- ✅ Parallax effects
- ✅ Typing animation
- ✅ Button effects
- ✅ Scroll to top

## 🎯 Performance Features

- **Intersection Observer**: Efficient scroll-based animations
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Scroll Events**: Optimized scroll handling
- **Minimal JavaScript**: Lightweight and fast loading

## 🔄 Updates & Maintenance

To update content:
1. Modify text content in `index.html`
2. Update colors in CSS custom properties
3. Add/remove portfolio items as needed
4. Customize animations timing in JavaScript

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Issues
Found a bug or have a suggestion? [Open an issue](https://github.com/abdelrahman-samy-dev/kasper/issues)

## ⭐ Show Your Support

If you like this project, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with others
- Following [@abdelrahman-samy-dev](https://github.com/abdelrahman-samy-dev) for more projects

## 📞 Contact & Support

- **GitHub**: [@abdelrahman-samy-dev](https://github.com/abdelrahman-samy-dev)
- **Issues**: [Report a bug or request feature](https://github.com/abdelrahman-samy-dev/kasper/issues)
- **Website**: [Live Demo](https://abdelrahman-samy-dev.github.io/kasper/)

---

**⚡ Built with modern web technologies | 🚀 Deployed on GitHub Pages | ❤️ Made with passion**

[![GitHub followers](https://img.shields.io/github/followers/abdelrahman-samy-dev?style=social)](https://github.com/abdelrahman-samy-dev)
[![GitHub stars](https://img.shields.io/github/stars/abdelrahman-samy-dev/kasper?style=social)](https://github.com/abdelrahman-samy-dev/kasper)