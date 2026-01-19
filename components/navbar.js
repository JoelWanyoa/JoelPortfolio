class CustomNavbar extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
          <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
              <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="flex justify-between items-center h-16 sm:h-20">
                      <!-- Logo -->
                      <a href="#home" class="flex items-center space-x-2 group">
                          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                              </svg>
                          </div>
                          <span class="text-xl sm:text-2xl font-bold text-dark group-hover:text-primary transition-colors">JoelKamala<span class="text-primary">.</span></span>
                      </a>

                      <!-- Desktop Navigation -->
                      <div class="hidden md:flex items-center space-x-1">
                          <a href="#home" class="nav-link" data-text="Home">Home</a>
                          <a href="#about" class="nav-link" data-text="About">About</a>
                          <a href="#projects" class="nav-link" data-text="Projects">Projects</a>
                          <a href="#skills" class="nav-link" data-text="Skills">Skills</a>
                          <a href="#contact" class="nav-link" data-text="Contact">Contact</a>
                          <button id="theme-toggle" class="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle theme">
                              <svg class="w-5 h-5 text-gray-600 hidden" id="sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                              <svg class="w-5 h-5 text-gray-600" id="moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                              </svg>
                          </button>
                      </div>

                      <!-- Mobile menu button -->
                      <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
                          <svg class="w-6 h-6 text-gray-700" id="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                          <svg class="w-6 h-6 text-gray-700 hidden" id="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </button>
                  </div>
              </div>

              <!-- Mobile Menu -->
              <div id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200/50 shadow-lg transform -translate-y-2 opacity-0 transition-all duration-300 pointer-events-none">
                  <div class="px-4 py-4 space-y-1">
                      <a href="#home" class="mobile-nav-link" data-text="Home">Home</a>
                      <a href="#about" class="mobile-nav-link" data-text="About">About</a>
                      <a href="#projects" class="mobile-nav-link" data-text="Projects">Projects</a>
                      <a href="#skills" class="mobile-nav-link" data-text="Skills">Skills</a>
                      <a href="#contact" class="mobile-nav-link" data-text="Contact">Contact</a>
                      <div class="pt-4 border-t border-gray-100">
                          <div class="flex items-center justify-between">
                              <span class="text-sm text-gray-500">Theme</span>
                              <button id="mobile-theme-toggle" class="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle theme">
                                  <svg class="w-5 h-5 text-gray-600 hidden" id="mobile-sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                  </svg>
                                  <svg class="w-5 h-5 text-gray-600" id="mobile-moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      `;

      // Initialize mobile menu
      this.initializeMobileMenu();
      // Initialize theme toggle
      this.initializeThemeToggle();
      // Initialize scroll behavior
      this.initializeScrollBehavior();
      // Initialize navbar links
      this.initializeNavbarLinks();
  }

  initializeMobileMenu() {
      const mobileMenuButton = this.querySelector('#mobile-menu-button');
      const mobileMenu = this.querySelector('#mobile-menu');
      const menuIcon = this.querySelector('#menu-icon');
      const closeIcon = this.querySelector('#close-icon');

      mobileMenuButton.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('opacity-100');
          
          if (isOpen) {
              // Close menu
              mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
              mobileMenu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
          } else {
              // Open menu
              mobileMenu.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
              mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
              menuIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
          }
      });

      // Close menu when clicking links
      const mobileLinks = this.querySelectorAll('.mobile-nav-link');
      mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
              mobileMenu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
          });
      });
  }

  initializeThemeToggle() {
      const themeToggle = this.querySelector('#theme-toggle');
      const mobileThemeToggle = this.querySelector('#mobile-theme-toggle');
      const sunIcon = this.querySelector('#sun-icon');
      const moonIcon = this.querySelector('#moon-icon');
      const mobileSunIcon = this.querySelector('#mobile-sun-icon');
      const mobileMoonIcon = this.querySelector('#mobile-moon-icon');

      // Check for saved theme or default to light
      const savedTheme = localStorage.getItem('theme') || 'light';
      if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
          mobileSunIcon.classList.remove('hidden');
          mobileMoonIcon.classList.add('hidden');
      }

      const toggleTheme = () => {
          const isDark = document.documentElement.classList.contains('dark');
          
          if (isDark) {
              // Switch to light
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
              sunIcon.classList.add('hidden');
              moonIcon.classList.remove('hidden');
              mobileSunIcon.classList.add('hidden');
              mobileMoonIcon.classList.remove('hidden');
          } else {
              // Switch to dark
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
              sunIcon.classList.remove('hidden');
              moonIcon.classList.add('hidden');
              mobileSunIcon.classList.remove('hidden');
              mobileMoonIcon.classList.add('hidden');
          }
      };

      if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
      if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
  }

  initializeScrollBehavior() {
      // Update active nav link on scroll
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

      const observerOptions = {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const id = entry.target.getAttribute('id');
                  navLinks.forEach(link => {
                      link.classList.remove('active');
                      if (link.getAttribute('href') === `#${id}`) {
                          link.classList.add('active');
                      }
                  });
              }
          });
      }, observerOptions);

      sections.forEach(section => observer.observe(section));
  }

  initializeNavbarLinks() {
    const navLinks = this.querySelectorAll('.nav-link, .mobile-nav-link, a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}
}

customElements.define('custom-navbar', CustomNavbar);