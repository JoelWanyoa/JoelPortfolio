document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Create modal element for certifications
    const modalHTML = `
        <div id="certification-modal" class="fixed inset-0 z-50 hidden">
            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <div class="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-auto animate-slide-up">
                        <button id="modal-close" class="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <i data-feather="x" class="w-5 h-5"></i>
                        </button>
                        <div class="p-6">
                            <div class="mb-4">
                                <h3 id="modal-title" class="text-xl font-bold text-dark mb-2"></h3>
                                <div id="modal-issuer" class="text-primary font-medium text-sm"></div>
                                <div id="modal-year" class="text-gray-500 text-xs"></div>
                            </div>
                            <div id="modal-description" class="text-gray-600 text-sm mb-4"></div>
                            <div id="modal-skills" class="mb-4"></div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">Credential ID</div>
                                    <div id="modal-credential-id" class="text-sm font-mono text-dark"></div>
                                </div>
                                <a id="modal-link" href="#" target="_blank" class="btn btn-primary text-sm px-4 py-2">
                                    <i data-feather="external-link" class="w-3 h-3 mr-1"></i> View Credential
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Initialize modal functionality
    initializeModal();
    
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links (improved version)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '#!') return;
            
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
        });
    });

    // Form validation (improved version)
    const contactForm = document.querySelector('#contact form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if(!name || !email || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            if(!/^\S+@\S+\.\S+$/.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll show a success message
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                showFormMessage('Please enter your email address', 'error');
                return;
            }
            
            if(!/^\S+@\S+\.\S+$/.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            console.log('Newsletter subscription:', email);
            showFormMessage('Thank you for subscribing to my newsletter!', 'success');
            newsletterForm.reset();
        });
    }

    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill bar animation on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const observerOptions = {
        threshold: 0.5
    };

    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-in', 'animate-slide-up');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.setAttribute('src', src);
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Update current year in footer
    const yearElement = document.querySelector('#current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Modal Functions
function initializeModal() {
    const modal = document.getElementById('certification-modal');
    const closeBtn = document.getElementById('modal-close');
    const certifications = document.querySelectorAll('.certification-item');
    
    // Certification data
    const certificationData = {
        'data-protection': {
            title: 'Data Protection Certificate',
            issuer: 'Office of the Data Protection Commissioner',
            year: '2024',
            description: 'Comprehensive training on data protection laws, regulations, and compliance requirements in Kenya. Covered GDPR principles, data subject rights, and organizational data protection frameworks.',
            skills: ['Data Privacy', 'Compliance', 'GDPR', 'Risk Assessment'],
            credentialId: 'DPC-CERT-2024-001',
            link: '#'
        },
        'cyber-security': {
            title: 'Online Cyber Security Training',
            issuer: 'Ministry of ICT',
            year: '2024',
            description: 'Advanced cybersecurity training focusing on threat detection, prevention, and response strategies. Covered network security, cryptography, ethical hacking, and incident response.',
            skills: ['Network Security', 'Threat Analysis', 'Cryptography', 'Incident Response'],
            credentialId: 'MICT-CYB-2024-042',
            link: '#'
        },
        'nadpa': {
            title: 'NADPA Conference',
            issuer: 'Windsor Hotel',
            year: '2024',
            description: 'Participated in the National Data Protection Annual Conference discussing emerging trends, legal frameworks, and best practices in data protection and privacy.',
            skills: ['Data Governance', 'Privacy Laws', 'Compliance'],
            credentialId: 'NADPA-CONF-2024',
            link: '#'
        },
        'assessment': {
            title: 'TVET CDACC Assessment and Evaluation Training',
            issuer: 'Michuki Technical Training Institute',
            year: '2023',
            description: 'Training on competency-based assessment methodologies, evaluation techniques, and quality assurance in technical and vocational education.',
            skills: ['Assessment Design', 'Evaluation Methods', 'Quality Assurance'],
            credentialId: 'CDACC-ASSESS-2023',
            link: '#'
        },
        'counseling': {
            title: 'Guidance and Counselling Training',
            issuer: 'Michuki Technical Training Institute',
            year: '2023',
            description: 'Professional development training in student counseling techniques, mentorship, and psychological support for technical education students.',
            skills: ['Student Counseling', 'Mentorship', 'Psychological Support'],
            credentialId: 'GUIDANCE-2023',
            link: '#'
        },
        'commonwealth': {
            title: 'Multiple Online Trainings',
            issuer: 'Commonwealth of Learning',
            year: '2022',
            description: 'Series of professional development courses including instructional design, e-learning methodologies, and digital literacy for educators.',
            skills: ['E-Learning', 'Instructional Design', 'Digital Literacy'],
            credentialId: 'COL-2022-MULTI',
            link: '#'
        },
        'google-developers': {
            title: 'Google Developers ToT Training',
            issuer: 'Google',
            year: '2022',
            description: 'Train-the-Trainer program focused on Google technologies, developer tools, and mobile application development best practices.',
            skills: ['Android Development', 'Google APIs', 'Mobile Apps'],
            credentialId: 'GOOGLE-TOT-2022',
            link: '#'
        },
        'emerging-markets': {
            title: 'Emerging Markets Skills Initiative',
            issuer: 'ACWICT',
            year: '2021',
            description: 'Training program focused on digital skills for emerging markets, including web development, data analysis, and digital entrepreneurship.',
            skills: ['Digital Skills', 'Web Development', 'Data Analysis'],
            credentialId: 'ACWICT-2021-EMS',
            link: '#'
        },
        'odel': {
            title: 'ODEL Training for TVET',
            issuer: 'CDACC',
            year: '2020',
            description: 'Training on Open, Distance, and E-Learning methodologies for Technical and Vocational Education and Training institutions.',
            skills: ['Online Learning', 'Course Design', 'LMS Management'],
            credentialId: 'CDACC-ODEL-2020',
            link: '#'
        }
    };

    // Add click events to certification items
    certifications.forEach(item => {
        item.addEventListener('click', function() {
            const certId = this.getAttribute('data-cert-id');
            const data = certificationData[certId];
            
            if (data) {
                // Fill modal with data
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-issuer').textContent = data.issuer;
                document.getElementById('modal-year').textContent = data.year;
                document.getElementById('modal-description').textContent = data.description;
                document.getElementById('modal-credential-id').textContent = data.credentialId;
                document.getElementById('modal-link').href = data.link;
                
                // Add skills badges
                const skillsContainer = document.getElementById('modal-skills');
                skillsContainer.innerHTML = '';
                data.skills.forEach(skill => {
                    const skillBadge = document.createElement('span');
                    skillBadge.className = 'inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs mr-2 mb-2';
                    skillBadge.textContent = skill;
                    skillsContainer.appendChild(skillBadge);
                });
                
                // Show modal
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Re-initialize Feather icons in modal
                feather.replace();
            }
        });
    });

    // Close modal when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('certification-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Form message function
function showFormMessage(message, type = 'success') {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message fixed top-24 right-4 z-50 px-4 py-3 rounded-lg shadow-lg animate-slide-up ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`;
    messageDiv.textContent = message;
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'ml-4 text-white hover:text-gray-200';
    closeButton.innerHTML = '<i data-feather="x" class="w-4 h-4"></i>';
    closeButton.addEventListener('click', () => messageDiv.remove());
    messageDiv.appendChild(closeButton);
    
    document.body.appendChild(messageDiv);
    
    // Re-initialize Feather icons
    feather.replace();
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}