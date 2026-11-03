(function () {
  function editable(t) {
    return !!(t && t.closest && t.closest('input, textarea, select, [contenteditable="true"], .ql-editor, pre, code, [data-allow-copy]'));
  }

  document.addEventListener('contextmenu', function (e) {
    if (!editable(e.target)) e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c')) ||
      (e.ctrlKey && (k === 'u' || k === 's'))
    ) {
      e.preventDefault();
    }
  });

  var h = window.location.hostname;
  if (h !== 'localhost' && h !== '127.0.0.1') {
    ['log', 'warn', 'error', 'info', 'debug'].forEach(function (m) { console[m] = function () { }; });
  }
})();
