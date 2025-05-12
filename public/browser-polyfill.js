/**
 * Enhanced Browser API Polyfill for Extension Compatibility
 *
 * This script creates a comprehensive polyfill for the 'browser' API used by browser extensions
 * to prevent errors like "browser is not defined" from occurring when extensions
 * try to access the browser API that isn't available in all contexts.
 */
(function() {
  // Create a proxy handler that returns a proxy for any property access
  const createDeepProxy = function(prefix = "") {
    return new Proxy(function() {}, {
      get: function(target, prop) {
        // If prop is a symbol, just return a function to avoid TypeError
        if (typeof prop === 'symbol') {
          return function() { return Promise.resolve(); };
        }

        // Don't log for common properties that are frequently accessed
        const commonProps = ['then', 'catch', 'finally', 'toString', 'valueOf'];
        const isCommonProp = commonProps.includes(prop);

        // Create a new proxy for deeper nesting
        return createDeepProxy(`${prefix}.${String(prop)}`);
      },
      apply: function(target, thisArg, args) {
        // When called as a function, return a promise
        return Promise.resolve();
      },
      construct: function(target, args) {
        // When used with 'new', return an empty object
        return createDeepProxy();
      }
    });
  };

  // Only add the polyfill if browser isn't defined
  if (typeof window.browser === 'undefined') {
    // Create a comprehensive browser API object with all commonly used methods
    window.browser = {
      // Extension API methods
      runtime: {
        sendMessage: function() { return Promise.resolve(); },
        onMessage: { addListener: function() {}, removeListener: function() {} },
        getManifest: function() { return {}; },
        getURL: function(path) { return path; },
        connect: function() { return { postMessage: function() {}, onDisconnect: { addListener: function() {} } }; },
        onConnect: { addListener: function() {} },
        connectNative: function() { return { postMessage: function() {}, onDisconnect: { addListener: function() {} } }; }
      },
      storage: {
        local: { get: function() { return Promise.resolve({}); }, set: function() { return Promise.resolve(); } },
        sync: { get: function() { return Promise.resolve({}); }, set: function() { return Promise.resolve(); } },
        onChanged: { addListener: function() {}, removeListener: function() {} }
      },
      tabs: {
        query: function() { return Promise.resolve([]); },
        create: function() { return Promise.resolve({}); },
        update: function() { return Promise.resolve({}); },
        onUpdated: { addListener: function() {}, removeListener: function() {} },
        get: function() { return Promise.resolve({}); },
        sendMessage: function() { return Promise.resolve(); },
        onActivated: { addListener: function() {} },
        onRemoved: { addListener: function() {} }
      },
      webRequest: {
        onBeforeRequest: { addListener: function() {} },
        onCompleted: { addListener: function() {} },
        onErrorOccurred: { addListener: function() {} }
      },
      webNavigation: {
        onCommitted: { addListener: function() {} },
        onCompleted: { addListener: function() {} },
        onDOMContentLoaded: { addListener: function() {} }
      },
      contextMenus: {
        create: function() { return 1; },
        update: function() { return Promise.resolve(); },
        removeAll: function() { return Promise.resolve(); },
        onClicked: { addListener: function() {} }
      }
    };

    // Make any property access on browser safe with deep proxies
    window.browser = new Proxy(window.browser, {
      get: function(target, prop) {
        if (prop in target) {
          // Return existing property, but make it a proxy if it's an object
          const value = target[prop];
          if (typeof value === 'object' && value !== null) {
            return new Proxy(value, {
              get: function(obj, key) {
                return key in obj ? obj[key] : createDeepProxy(`${prop}.${String(key)}`);
              }
            });
          }
          return value;
        }
        // For anything else, return a deep proxy
        return createDeepProxy(String(prop));
      }
    });

    // Provide similar polyfill for chrome extensions API if not available
    if (typeof window.chrome === 'undefined') {
      window.chrome = { ...window.browser };
    } else if (typeof window.chrome.runtime === 'undefined') {
      // Add missing API sections to chrome
      Object.keys(window.browser).forEach(key => {
        if (!(key in window.chrome)) {
          window.chrome[key] = window.browser[key];
        }
      });
    }

    console.log('Browser API polyfill loaded');
  }
})();