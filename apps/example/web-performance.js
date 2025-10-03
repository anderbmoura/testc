// Web performance optimization to reduce gesture handler warnings
// Only run on web platform
if (typeof window !== 'undefined' && typeof EventTarget !== 'undefined') {
  // Override console.warn to filter out gesture handler warnings
  const originalWarn = console.warn;
  console.warn = function (...args) {
    const message = args.join(' ');

    // Filter out gesture handler passive event warnings
    if (
      message.includes('[Violation]Added non-passive event listener') ||
      message.includes('WheelEventManager.js') ||
      message.includes('scroll-blocking')
    ) {
      // Skip these warnings in development
      return;
    }

    // Allow other warnings to be shown
    return originalWarn.apply(console, args);
  };

  // Optimize passive event listeners for better performance
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (typeof options === 'boolean') {
      options = { capture: options };
    }

    if (!options) {
      options = {};
    }

    // Make wheel and touch events passive by default for better performance
    if (['wheel', 'touchstart', 'touchmove', 'scroll'].includes(type)) {
      options.passive = options.passive !== false;
    }

    return originalAddEventListener.call(this, type, listener, options);
  };
}

export default {};
