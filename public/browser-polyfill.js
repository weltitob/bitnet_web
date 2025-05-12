/**
 * Browser API Polyfill for Extension Compatibility
 * 
 * This script creates a minimal polyfill for the 'browser' API used by browser extensions
 * to prevent errors like "browser is not defined" from occurring when extensions
 * try to access the browser API that isn't available in all contexts.
 */
(function() {
  // Only add the polyfill if browser isn't defined
  if (typeof window.browser === 'undefined') {
    // Create a minimal browser API object
    window.browser = {
      // Common extension API methods
      runtime: {
        sendMessage: function() { return Promise.resolve(); },
        onMessage: { 
          addListener: function() {},
          removeListener: function() {}
        },
        getManifest: function() { return {}; },
        getURL: function(path) { return path; }
      },
      storage: {
        local: {
          get: function() { return Promise.resolve({}); },
          set: function() { return Promise.resolve(); }
        },
        sync: {
          get: function() { return Promise.resolve({}); },
          set: function() { return Promise.resolve(); }
        },
        onChanged: {
          addListener: function() {},
          removeListener: function() {}
        }
      },
      tabs: {
        query: function() { return Promise.resolve([]); },
        create: function() { return Promise.resolve({}); },
        update: function() { return Promise.resolve({}); },
        onUpdated: {
          addListener: function() {},
          removeListener: function() {}
        }
      }
    };

    // Create error handler for missing browser API methods
    const handler = {
      get: function(target, prop) {
        // Return the property if it exists
        if (prop in target) {
          return target[prop];
        }
        
        // For all other properties, return a dummy function that does nothing
        if (typeof prop === 'string') {
          return function() { 
            return Promise.resolve();
          };
        }
        
        return undefined;
      }
    };

    // Apply the proxy to the browser API and its sub-objects
    window.browser = new Proxy(window.browser, handler);
    window.browser.runtime = new Proxy(window.browser.runtime, handler);
    window.browser.storage = new Proxy(window.browser.storage, handler);
    window.browser.tabs = new Proxy(window.browser.tabs, handler);
    
    console.log('Browser API polyfill loaded');
  }
})();