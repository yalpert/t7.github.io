// START: Closure.
(function(window) {
  'use strict';

  // Exit, if we can't read style.
  if (typeof window.getComputedStyle !== 'function') {
    return;
  }

  // Reference to document.
  var document = window.document;

  // Reference to <body>.
  var head =
    document.head ||
    document.getElementsByTagName('head')[0];

  // Reference to <html>.
  var root = document.documentElement;

  // What `@media` query "mode" are we in?
  var mode = window.getComputedStyle(root, ':before');

  // Trim quotes, if they exist.
  mode = mode.content || '';
  mode = mode.replace(/\W/g, '');

  // Get all font CSS references.
  var fonts = head.querySelectorAll('[data-font]');

  // Loop through font `<link>` tags.
  Array.prototype.forEach.call(fonts, function(font) {
    var media = font.getAttribute('data-media');

    if (media.match(mode)) {
      font.href = font.getAttribute('data-font');
    }

    // Clean up attributes.
    font.removeAttribute('data-media');
    font.removeAttribute('data-font');
  });

// END: Closure.
})(this);