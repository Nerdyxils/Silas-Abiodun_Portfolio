// Hybrid Animation System - Framer Motion 6.5.1 with CSS fallbacks
import { motion } from 'framer-motion';

// Feature detection for animation support
const supportsFramerMotion = () => {
  try {
    return typeof motion !== 'undefined' && motion.div;
  } catch (error) {
    console.warn('Framer Motion not available, falling back to CSS animations');
    return false;
  }
};

// Enhanced animation variants for Framer Motion 6.5.1
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    y: -8,
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const buttonHover = {
  scale: 1.05,
  y: -2,
  transition: {
    duration: 0.2,
    ease: "easeInOut",
  },
};

export const buttonTap = {
  scale: 0.98,
};

// Hybrid wrapper component that uses Framer Motion or falls back to CSS
export const HybridMotionDiv = ({ children, variants, className = "", ...props }) => {
  const useFramerMotion = supportsFramerMotion();
  
  if (useFramerMotion) {
    return (
      <motion.div
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  } else {
    // Fallback to CSS animations
    const fallbackClass = variants === fadeInUp ? 'animate-fade-in-up' :
                         variants === fadeInLeft ? 'animate-fade-in-left' :
                         variants === fadeInRight ? 'animate-fade-in-right' :
                         variants === scaleIn ? 'animate-scale-in' :
                         'animate-on-scroll';
    
    return (
      <div className={`${className} ${fallbackClass}`} {...props}>
        {children}
      </div>
    );
  }
};

// Hybrid section wrapper
export const HybridMotionSection = ({ children, variants, className = "", ...props }) => {
  const useFramerMotion = supportsFramerMotion();
  
  if (useFramerMotion) {
    return (
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={className}
        {...props}
      >
        {children}
      </motion.section>
    );
  } else {
    return (
      <section className={`${className} animate-on-scroll`} {...props}>
        {children}
      </section>
    );
  }
};

// Enhanced button component with hybrid animations
export const HybridMotionButton = ({ children, className = "", href, ...props }) => {
  const useFramerMotion = supportsFramerMotion();
  
  if (useFramerMotion) {
    const Component = href ? motion.a : motion.button;
    return (
      <Component
        whileHover={buttonHover}
        whileTap={buttonTap}
        className={className}
        href={href}
        {...props}
      >
        {children}
      </Component>
    );
  } else {
    const Component = href ? 'a' : 'button';
    return (
      <Component className={`${className} button-hover`} href={href} {...props}>
        {children}
      </Component>
    );
  }
};

// Utility to check if we should use Framer Motion
export const shouldUseFramerMotion = supportsFramerMotion;

// Initialize hybrid animation system
export const initHybridAnimations = () => {
  const useFramerMotion = supportsFramerMotion();
  
  if (!useFramerMotion) {
    // Initialize CSS fallback animations
    import('./scrollAnimations').then(({ initAllAnimations }) => {
      initAllAnimations();
    });
  }
  
  console.log(`Animation system initialized: ${useFramerMotion ? 'Framer Motion' : 'CSS Fallback'}`);
  return useFramerMotion;
}; 