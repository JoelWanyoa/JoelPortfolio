class CustomFooter extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
          <footer class="bg-dark text-white py-8 sm:py-12">
              <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="grid md:grid-cols-3 gap-8 sm:gap-12">
                      <!-- Brand Column -->
                      <div class="space-y-4">
                          <a href="#home" class="inline-flex items-center space-x-2 group">
                              <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                  </svg>
                              </div>
                              <span class="text-xl font-bold group-hover:text-primary transition-colors">Joel<span class="text-secondary">Khamala</span></span>
                          </a>
                          <p class="text-gray-400 text-sm sm:text-base">
                              Crafting exceptional digital experiences with modern web technologies and design principles.
                          </p>
                          <div class="flex space-x-3 pt-2">
                              <a href="#" class="footer-social-link" aria-label="GitHub">
                                  <i data-feather="github"></i>
                              </a>
                              <a href="#" class="footer-social-link" aria-label="LinkedIn">
                                  <i data-feather="linkedin"></i>
                              </a>
                              <a href="#" class="footer-social-link" aria-label="Twitter">
                                  <i data-feather="twitter"></i>
                              </a>
                              <a href="#" class="footer-social-link" aria-label="Dribbble">
                                  <i data-feather="dribbble"></i>
                              </a>
                          </div>
                      </div>

                      <!-- Quick Links -->
                      <div>
                          <h3 class="text-lg font-bold mb-4 sm:mb-6">Quick Links</h3>
                          <ul class="space-y-3">
                              <li><a href="#home" class="footer-link">Home</a></li>
                              <li><a href="#about" class="footer-link">About</a></li>
                              <li><a href="#projects" class="footer-link">Projects</a></li>
                              <li><a href="#skills" class="footer-link">Skills</a></li>
                              <li><a href="#contact" class="footer-link">Contact</a></li>
                          </ul>
                      </div>

                      <!-- Newsletter -->
                      <div>
                          <h3 class="text-lg font-bold mb-4 sm:mb-6">Stay Updated</h3>
                          <p class="text-gray-400 mb-4 text-sm sm:text-base">
                              Subscribe to my newsletter for the latest projects and insights.
                          </p>
                          <form class="space-y-3">
                              <input 
                                  type="email" 
                                  placeholder="Your email address" 
                                  class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm sm:text-base"
                                  required
                              >
                              <button 
                                  type="submit" 
                                  class="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                              >
                                  Subscribe
                              </button>
                          </form>
                      </div>
                  </div>

                  <!-- Divider -->
                  <div class="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
                      <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                          <p class="text-gray-500 text-sm sm:text-base">
                              &copy; ${new Date().getFullYear()} JoelKhamala. All rights reserved.
                          </p>
                          <div class="flex items-center space-x-4 text-sm sm:text-base">
                              <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                              <span class="text-gray-600">•</span>
                              <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                          </div>
                      </div>
                  </div>
                  <div id="back-to-top" class="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 translate-y-10 flex items-center justify-center">
                      <i data-feather="arrow-up"></i>
                  </div>
              </div>
          </footer>
      `;

      // Initialize back to top button
      this.initializeBackToTop();
      // Initialize footer links
      this.initializeFooterLinks();
      // Initialize social icons
      this.initializeSocialIcons();
  }

  initializeBackToTop() {
      const backToTopBtn = this.querySelector('#back-to-top');
      
      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
              backToTopBtn.classList.add('opacity-100', 'translate-y-0');
          } else {
              backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
              backToTopBtn.classList.add('opacity-0', 'translate-y-10');
          }
      });

      backToTopBtn.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }

  initializeSocialIcons() {
      // Initialize Feather icons if available
      if (typeof feather !== 'undefined') {
          feather.replace();
      }
  }

  initializeFooterLinks() {
      const footerLinks = this.querySelectorAll('.footer-link');
      footerLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
          });
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
  }
}

customElements.define('custom-footer', CustomFooter);