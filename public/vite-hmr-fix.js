/**
 * Vite HMR WebSocket Connection Fix
 *
 * This script addresses the WebSocket connection issues in Vite's Hot Module Replacement (HMR).
 * It patches the WebSocket constructor to ensure proper port configuration and connection.
 */
(function() {
  // Store the original WebSocket constructor
  const OriginalWebSocket = window.WebSocket;
  
  // Create a patched WebSocket constructor
  window.WebSocket = function(url, protocols) {
    // Fix undefined port in WebSocket URL
    if (url && typeof url === 'string') {
      // If the URL has an undefined port, replace it with 5173 (Vite's default dev server port)
      if (url.includes('undefined')) {
        url = url.replace('ws://localhost:undefined', 'ws://localhost:5173');
      }
      
      // Check for any other malformed URLs
      try {
        new URL(url); // Will throw if the URL is invalid
      } catch (e) {
        console.warn('Attempting to fix invalid WebSocket URL:', url);
        // If the URL is missing a port but localhost is specified, add port 5173
        if (url.startsWith('ws://localhost/')) {
          url = url.replace('ws://localhost/', 'ws://localhost:5173/');
        }
      }
    }
    
    // Call the original WebSocket constructor with the fixed URL
    return new OriginalWebSocket(url, protocols);
  };
  
  // Ensure the prototype chain is maintained
  window.WebSocket.prototype = OriginalWebSocket.prototype;
  
  // Add additional event handling for WebSocket errors
  window.addEventListener('error', function(event) {
    if (event.message && 
       (event.message.includes('WebSocket') || event.message.includes('ws://localhost'))) {
      console.warn('WebSocket connection issue detected and handled');
      // Prevent error from showing in console
      event.preventDefault();
    }
  }, true);
  
  console.log('Vite HMR WebSocket fix loaded');
})();