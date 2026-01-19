# Joel Wanyoa Khamala - Portfolio Website

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![Last Updated](https://img.shields.io/badge/Last%20Updated-January%202026-blue?style=for-the-badge)

A modern, responsive portfolio website showcasing the professional journey, skills, and projects of Joel Wanyoa Khamala - Software Developer & ICT Trainer.

## 🌟 Live Demo

[**View Live Portfolio**](https://joelwanyoa.github.io/JoelPortfolio/) *(Replace with your deployment link)*

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Sections](#-sections)
- [Performance](#-performance)
- [License](#-license)

## ✨ Features

### 🎨 Modern Design
- **Clean & Professional UI** with gradient accents
- **Dark/Light Mode Ready** color scheme
- **Responsive Design** for all devices
- **Smooth Animations** and transitions
- **Interactive Elements** with hover effects

### 📱 Responsive Layout
- Mobile-first approach
- Breakpoints for tablets and desktops
- Optimized images and assets
- Touch-friendly navigation

### ⚡ Performance Optimized
- Minimal dependencies
- Optimized CSS and JavaScript
- Fast loading times
- SEO-friendly structure

### 🛠️ Developer Friendly
- Well-structured code
- Easy to customize
- Component-based structure
- Detailed documentation

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling with modern features |
| **JavaScript (ES6+)** | Interactive functionality |
| **Tailwind CSS** | Utility-first CSS framework |
| **Feather Icons** | Beautiful, customizable icons |
| **Google Fonts** | Inter font family for typography |

## 📁 Project Structure

```
joel-portfolio/
│
├── index.html                 # Main HTML file
├── README.md                  # This documentation file
├── components/                # Reusable components
│   ├── navbar.js             # Navigation bar component
│   └── footer.js             # Footer component
│
├── assets/                    # Static assets
│   ├── images/               # Images and photos
│   ├── pdfs/                 # PDF documents (CV)
│   └── icons/                # Custom icons
│
├── style.css                  # Custom styles
├── script.js                  # Main JavaScript file
└── .gitignore                 # Git ignore file
```

## 🚀 Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/JoelWanyoa/JoelPortfolio.git
   cd JoelPortfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **View locally**
   - Navigate to `http://localhost:8000` in your browser

## 🎨 Customization

### 1. Update Personal Information
Edit the following sections in `index.html`:

```html
<!-- Update in Hero Section -->
<h1 class="...">Your Name</h1>
<p class="...">Your Title & Description</p>

<!-- Update contact info in Contact Section -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1234567890">+123 456 7890</a>
```

### 2. Change Colors
Modify the Tailwind config in the `<script>` tag:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_PRIMARY_COLOR',   // Main brand color
                secondary: '#YOUR_SECONDARY_COLOR', // Accent color
                dark: '#YOUR_DARK_COLOR',         // Dark text color
                light: '#YOUR_LIGHT_COLOR'        // Light background
            }
        }
    }
}
```

### 3. Add Your Projects
Update the GitHub repositories in the JavaScript section:

```javascript
const githubRepos = [
    {
        name: "Project Name",
        repo: "username/repository",
        description: "Project description",
        tech: ["HTML", "CSS", "JavaScript"],
        techClass: "html",
        category: "html",
        icon: "code",
        commits: 5
    },
    // Add more projects...
];
```

### 4. Update Work Experience
Modify the timeline items in the Work Experience section:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3 class="...">Your Position</h3>
        <p class="...">Company Name</p>
        <!-- Add your responsibilities -->
    </div>
</div>
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Repository Settings → Pages
3. Select branch (main) and folder (root)
4. Your site will be available at: `https://username.github.io/repository`

### Option 2: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed instantly

### Option 3: Netlify
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployments on push

## 📄 Sections

The portfolio includes the following sections:

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Section** - Professional summary and education
3. **GitHub Projects** - Interactive repository showcase with filtering
4. **Work Experience** - Chronological timeline of professional roles
5. **Skills Section** - Animated skill bars and capabilities
6. **Projects Section** - Featured projects with details
7. **Certifications** - Training and certification badges
8. **Contact Form** - Functional contact form with email integration

## ⚡ Performance Tips

1. **Image Optimization**
   - Use WebP format where possible
   - Compress images before uploading
   - Use lazy loading for images

2. **Code Optimization**
   - Minify CSS and JavaScript for production
   - Use CDN for libraries when possible
   - Remove unused CSS

3. **SEO Optimization**
   - Add meta descriptions
   - Use semantic HTML
   - Include alt text for images

## 🔧 Troubleshooting

### Common Issues

1. **Icons not showing**
   - Check Feather Icons CDN link
   - Ensure `feather.replace()` is called after DOM loads

2. **Contact form not working**
   - Check email address in `sendMail` function
   - Verify form validation is working

3. **Responsive issues**
   - Check Tailwind classes
   - Test on different screen sizes
   - Use browser developer tools

### Browser Support
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## 📞 Support

For issues, questions, or suggestions:

1. **Create an Issue** on GitHub
2. **Email**: joelkhamala007@gmail.com
3. **LinkedIn**: [khamala-wanyoa-8283a0119](https://www.linkedin.com/in/khamala-wanyoa-8283a0119/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Feather Icons](https://feathericons.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for Inter font
- All contributors and supporters

---

## 📊 Repository Stats

![GitHub stars](https://img.shields.io/github/stars/JoelWanyoa/JoelPortfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/JoelWanyoa/JoelPortfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/JoelWanyoa/JoelPortfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/JoelWanyoa/JoelPortfolio)

---

**Made with ❤️ by Joel Wanyoa Khamala**

If you find this project helpful, please consider giving it a ⭐ on GitHub!

---

*Last Updated: January 2026*  
*Version: 2.0.0*