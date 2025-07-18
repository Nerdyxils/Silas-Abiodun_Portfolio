// Custom scroll-triggered animations using Intersection Observer
// Replacing Framer Motion with reliable CSS animations

export const initScrollAnimations = () => {
  // Create intersection observer for scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate-visible');
          
          // Handle staggered animations for child elements
          const staggeredElements = entry.target.querySelectorAll('[data-animate-delay]');
          staggeredElements.forEach((el, index) => {
            const delay = el.getAttribute('data-animate-delay') || (index * 0.1);
            setTimeout(() => {
              el.classList.add('animate-visible');
            }, delay * 1000);
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));

  return observer;
};

// Add smooth scrolling to navigation links
export const initSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Add hover effects to buttons
export const initButtonHovers = () => {
  const buttons = document.querySelectorAll('.cta-btn, .cta-btn-main, .cta-btn-alt, .newsletter-btn');
  buttons.forEach(button => {
    button.classList.add('button-hover');
  });
};

// Add hover effects to service cards
export const initServiceCardHovers = () => {
  const serviceCards = document.querySelectorAll('.service-item');
  serviceCards.forEach(card => {
    card.classList.add('service-card-hover');
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initSmoothScrolling();
      initButtonHovers();
      initServiceCardHovers();
    });
  } else {
    initScrollAnimations();
    initSmoothScrolling();
    initButtonHovers();
    initServiceCardHovers();
  }
};

// Utility function to add animation classes with delays
export const addStaggeredAnimation = (elements, baseClass = 'animate-fade-in-up', delayIncrement = 0.1) => {
  elements.forEach((element, index) => {
    element.classList.add(baseClass);
    if (index > 0) {
      element.classList.add(`animate-delay-${Math.min(index, 6)}`);
    }
  });
}; 