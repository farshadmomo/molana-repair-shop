// Performance optimization utilities

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately on first call
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit the rate of function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy load images with intersection observer
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 * @param {Object} options - Intersection observer options
 * @returns {Object} Image element with lazy loading
 */
export const createLazyImage = (src, alt, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  const img = new Image();
  img.alt = alt;
  img.loading = "lazy";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        observer.unobserve(img);
      }
    });
  }, defaultOptions);

  observer.observe(img);
  return img;
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource URLs to preload
 * @param {string} type - Resource type (image, script, style, etc.)
 */
export const preloadResources = (resources, type = "image") => {
  resources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;
    link.as = type;
    if (type === "image") {
      link.crossOrigin = "anonymous";
    }
    document.head.appendChild(link);
  });
};

/**
 * Measure performance metrics
 * @param {string} name - Performance mark name
 * @returns {Function} Function to end the measurement
 */
export const measurePerformance = (name) => {
  const startTime = performance.now();
  performance.mark(`${name}-start`);

  return () => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (process.env.NODE_ENV === "development") {
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  };
};

/**
 * Optimize scroll events with throttling
 * @param {Function} callback - Scroll callback function
 * @param {number} delay - Throttle delay in milliseconds
 * @returns {Function} Throttled scroll handler
 */
export const optimizedScrollHandler = (callback, delay = 16) => {
  return throttle(callback, delay);
};

/**
 * Optimize resize events with debouncing
 * @param {Function} callback - Resize callback function
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Function} Debounced resize handler
 */
export const optimizedResizeHandler = (callback, delay = 250) => {
  return debounce(callback, delay);
};

/**
 * Create a virtualized list for large datasets
 * @param {Array} items - Array of items to virtualize
 * @param {number} itemHeight - Height of each item
 * @param {number} containerHeight - Height of the container
 * @param {number} scrollTop - Current scroll position
 * @returns {Object} Virtualized list data
 */
export const createVirtualizedList = (
  items,
  itemHeight,
  containerHeight,
  scrollTop
) => {
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + 1, items.length);

  return {
    startIndex,
    endIndex,
    visibleItems: items.slice(startIndex, endIndex),
    totalHeight: items.length * itemHeight,
    offsetY: startIndex * itemHeight,
  };
};

/**
 * Optimize API calls with caching
 * @param {Function} apiCall - API function to cache
 * @param {number} cacheTime - Cache time in milliseconds
 * @returns {Function} Cached API function
 */
export const createCachedApiCall = (apiCall, cacheTime = 300000) => {
  // 5 minutes default
  const cache = new Map();

  return async (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached && Date.now() - cached.timestamp < cacheTime) {
      return cached.data;
    }

    try {
      const data = await apiCall(...args);
      cache.set(key, {
        data,
        timestamp: Date.now(),
      });
      return data;
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  };
};

/**
 * Optimize bundle size by lazy loading components
 * @param {Function} importFunc - Dynamic import function
 * @param {Object} options - Loading options
 * @returns {Object} Lazy component with loading state
 */
export const createLazyComponent = (importFunc, options = {}) => {
  const {
    loading: LoadingComponent,
    fallback: FallbackComponent,
    delay = 200,
  } = options;

  return React.lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        importFunc().then(resolve);
      }, delay);
    });
  });
};

/**
 * Performance monitoring for React components
 * @param {string} componentName - Name of the component
 * @returns {Object} Performance monitoring hooks
 */
export const usePerformanceMonitor = (componentName) => {
  const [renderCount, setRenderCount] = React.useState(0);
  const [renderTime, setRenderTime] = React.useState(0);

  React.useEffect(() => {
    setRenderCount((prev) => prev + 1);
    const endMeasure = measurePerformance(`${componentName}-render`);

    return () => {
      const duration = endMeasure();
      setRenderTime(duration);
    };
  }, [componentName]);

  return { renderCount, renderTime };
};

/**
 * Memory usage monitoring
 * @returns {Object} Memory usage information
 */
export const getMemoryUsage = () => {
  if (typeof performance !== "undefined" && performance.memory) {
    return {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576), // MB
    };
  }
  return null;
};

/**
 * Network performance monitoring
 * @returns {Object} Network performance information
 */
export const getNetworkInfo = () => {
  if (typeof navigator !== "undefined" && "connection" in navigator) {
    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    };
  }
  return null;
};
