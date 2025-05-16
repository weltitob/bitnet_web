// MetaMask compatibility handler
(function() {
  // Prevent console spam from MetaMask's SES lockdown
  const originalConsoleLog = console.log;
  console.log = function(...args) {
    // Filter out the "Removing unpermitted intrinsics" message
    if (args.length > 0 && 
        typeof args[0] === 'string' && 
        args[0].includes('Removing unpermitted intrinsics')) {
      // Suppress this message
      return;
    }
    return originalConsoleLog.apply(this, args);
  };
  
  // Handle WebSocket errors more gracefully
  window.addEventListener('error', function(event) {
    if (event.message && 
        (event.message.includes('WebSocket') || 
         event.message.includes('ws://localhost'))) {
      // Prevent error from showing in console
      event.preventDefault();
      console.warn('WebSocket connection issue suppressed');
    }
  }, true);

  // Override WebSocket to handle undefined ports
  const OriginalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    // Fix undefined port in WebSocket URL
    if (url && url.includes('undefined')) {
      url = url.replace('ws://localhost:undefined', 'ws://localhost:5173');
    }
    return new OriginalWebSocket(url, protocols);
  };
  window.WebSocket.prototype = OriginalWebSocket.prototype;
})();