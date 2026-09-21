/*
========================================
RAAH-E-HUDA - MAIN APPLICATION
Core Initialization & Global Features
========================================

FEATURES:
- Smooth scroll initialization
- Lazy loading for images/videos
- Intersection Observer animations
- Mobile menu toggle
- Skip to content functionality
- Dark mode toggle (future)
- Error boundary
- Performance monitoring

DEPENDENCIES:
- i18n.js (must load first)
========================================
*/

// ========================================
// GLOBAL STATE
// ========================================
const AppState = {
    isMobileMenuOpen: false,
    hasScrolled: false,
    lazyLoadObserver: null,
    animationObserver: null
};

// ========================================
// DOM ELEMENTS CACHE
// ========================================
const Elements = {
    header: null,
    mobileMenuToggle: null,
    mobileMenu: null,
    skipLink: null,
    lazyImages: null,
    lazyVideos: null,
    animatedElements: null
};

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize application when DOM is ready
 */
function initializeApp() {
    console.log('🚀 Initializing RAAH-E-HUDA...');
    
    try {
        // Cache DOM elements
        cacheElements();
        
        // Initialize features
        initSmoothScroll();
        initMobileMenu();
        initSkipToContent();
        initLazyLoading();
        initScrollAnimations();
        initStickyHeader();
        initScrollToTop();
        
        // Mark app as ready
        document.body.classList.add('app-ready');
        
        console.log('✅ App initialized successfully');
    } catch (error) {
        console.error('❌ App initialization failed:', error);
        handleInitializationError(error);
    }
}

/**
 * Cache frequently used DOM elements
 */
function cacheElements() {
    Elements.header = document.querySelector('.site-header');
    Elements.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    Elements.mobileMenu = document.querySelector('.mobile-menu');
    Elements.skipLink = document.querySelector('.skip-to-content');
    Elements.lazyImages = document.querySelectorAll('img[loading="lazy"]');
    Elements.lazyVideos = document.querySelectorAll('iframe[data-src]');
    Elements.animatedElements = document.querySelectorAll('.animate-on-scroll');
}

// ========================================
// SMOOTH SCROLL
// ========================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (AppState.isMobileMenuOpen) {
                    closeMobileMenu();
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
                
                // Set focus for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });
    
    console.log('✅ Smooth scroll initialized');
}

// ========================================
// MOBILE MENU
// ========================================

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    if (!Elements.mobileMenuToggle || !Elements.mobileMenu) {
        console.warn('⚠️ Mobile menu elements not found');
        return;
    }
    
    Elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (AppState.isMobileMenuOpen && 
            !Elements.mobileMenu.contains(e.target) && 
            !Elements.mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && AppState.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
    
    console.log('✅ Mobile menu initialized');
}

/**
 * Toggle mobile menu open/close
 */
function toggleMobileMenu() {
    AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;
    
    if (AppState.isMobileMenuOpen) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
    Elements.mobileMenu.classList.add('active');
    Elements.mobileMenuToggle.classList.add('active');
    Elements.mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    
    // Focus first menu item
    const firstLink = Elements.mobileMenu.querySelector('a');
    if (firstLink) firstLink.focus();
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    Elements.mobileMenu.classList.remove('active');
    Elements.mobileMenuToggle.classList.remove('active');
    Elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restore scroll
    AppState.isMobileMenuOpen = false;
}

// ========================================
// SKIP TO CONTENT
// ========================================

/**
 * Initialize skip to content functionality
 */
function initSkipToContent() {
    if (!Elements.skipLink) return;
    
    Elements.skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');
        
        if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    console.log('✅ Skip to content initialized');
}

// ========================================
// LAZY LOADING
// ========================================

/**
 * Initialize lazy loading for images and iframes
 */
function initLazyLoading() {
    // Modern browsers support native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        console.log('✅ Native lazy loading supported');
        loadIframes(); // Still need to handle iframes manually
        return;
    }
    
    // Fallback: Use Intersection Observer
    if ('IntersectionObserver' in window) {
        AppState.lazyLoadObserver = new IntersectionObserver(
            lazyLoadCallback,
            {
                root: null,
                rootMargin: '50px',
                threshold: 0.01
            }
        );
        
        // Observe images
        Elements.lazyImages.forEach(img => {
            AppState.lazyLoadObserver.observe(img);
        });
        
        // Observe iframes
        Elements.lazyVideos.forEach(iframe => {
            AppState.lazyLoadObserver.observe(iframe);
        });
        
        console.log('✅ Lazy loading initialized (IntersectionObserver)');
    } else {
        // Final fallback: Load everything immediately
        loadAllMedia();
        console.log('⚠️ IntersectionObserver not supported, loaded all media');
    }
}

/**
 * Intersection Observer callback for lazy loading
 */
function lazyLoadCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.tagName === 'IMG') {
                element.src = element.dataset.src || element.src;
            } else if (element.tagName === 'IFRAME') {
                element.src = element.dataset.src;
            }
            
            element.classList.add('loaded');
            observer.unobserve(element);
        }
    });
}

/**
 * Load iframes with data-src attribute
 */
function loadIframes() {
    Elements.lazyVideos.forEach(iframe => {
        if (iframe.dataset.src) {
            iframe.src = iframe.dataset.src;
        }
    });
}

/**
 * Load all media immediately (fallback)
 */
function loadAllMedia() {
    Elements.lazyImages.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
    loadIframes();
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        // Fallback: Show all elements immediately
        Elements.animatedElements.forEach(el => {
            el.classList.add('visible');
        });
        return;
    }
    
    AppState.animationObserver = new IntersectionObserver(
        animationCallback,
        {
            root: null,
            rootMargin: '-50px',
            threshold: 0.1
        }
    );
    
    Elements.animatedElements.forEach(el => {
        AppState.animationObserver.observe(el);
    });
    
    console.log('✅ Scroll animations initialized');
}

/**
 * Intersection Observer callback for animations
 */
function animationCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve after animation
            // AppState.animationObserver.unobserve(entry.target);
        }
    });
}

// ========================================
// STICKY HEADER
// ========================================

/**
 * Initialize sticky header behavior
 */
function initStickyHeader() {
    if (!Elements.header) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class after 50px
        if (scrollTop > 50) {
            Elements.header.classList.add('scrolled');
            AppState.hasScrolled = true;
        } else {
            Elements.header.classList.remove('scrolled');
            AppState.hasScrolled = false;
        }
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            Elements.header.classList.add('header-hidden');
        } else {
            Elements.header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
    
    console.log('✅ Sticky header initialized');
}

// ========================================
// SCROLL TO TOP
// ========================================

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    
    if (!scrollTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, { passive: true });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Scroll to top initialized');
}

// ========================================
// ERROR HANDLING
// ========================================

/**
 * Handle initialization errors gracefully
 */
function handleInitializationError(error) {
    // Log to console
    console.error('Initialization Error:', error);
    
    // Show user-friendly message (optional)
    const errorDiv = document.createElement('div');
    errorDiv.className = 'app-error';
    errorDiv.innerHTML = `
        <p>⚠️ An error occurred while loading the page. Please refresh.</p>
        <button onclick="location.reload()">Refresh Page</button>
    `;
    document.body.insertBefore(errorDiv, document.body.firstChild);
    
    // Send error to analytics (if implemented)
    if (window.gtag) {
        window.gtag('event', 'exception', {
            description: error.message,
            fatal: false
        });
    }
}

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('Global Error:', event.error);
    // Handle gracefully - don't break the app
});

/**
 * Unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// ========================================
// PERFORMANCE MONITORING (Optional)
// ========================================

/**
 * Log performance metrics
 */
function logPerformance() {
    if ('performance' in window && 'timing' in performance) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;
                
                console.log('📊 Performance Metrics:');
                console.log(`  Page Load Time: ${pageLoadTime}ms`);
                console.log(`  Connect Time: ${connectTime}ms`);
                console.log(`  Render Time: ${renderTime}ms`);
                
                // Send to analytics if needed
                if (window.gtag) {
                    window.gtag('event', 'timing_complete', {
                        name: 'page_load',
                        value: pageLoadTime,
                        event_category: 'Performance'
                    });
                }
            }, 0);
        });
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for performance
 */
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for performance
 */
function throttle(func, limit = 250) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// AUTO-INITIALIZE
// ========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Optional: Monitor performance
logPerformance();

// ========================================
// EXPORT FOR DEBUGGING
// ========================================
window.AppDebug = {
    state: AppState,
    elements: Elements,
    reinitialize: initializeApp
};
