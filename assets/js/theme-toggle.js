(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const DARK_CLASS = 'dark-theme';
  const STORAGE_KEY = 'prefers-dark-theme';

  function applyTheme(isDark) {
    // Apply theme class to body
    document.body.classList.toggle(DARK_CLASS, isDark);

    /*
     * Ensure FontAwesome icon updates reliably.
     * Rather than individually removing and adding classes—which can be error-prone if additional
     * style-weight classes are injected by FontAwesome—we replace the entire className except for
     * the base style prefix (`fas`).
     */
    // Inject fresh <i> element so we avoid issues with SVG replacement by FontAwesome JS.
    toggleBtn.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
  }

  // Load saved preference or system preference
  const savedPref = localStorage.getItem(STORAGE_KEY);
  const prefersDark = savedPref !== null ? savedPref === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle(DARK_CLASS);
    localStorage.setItem(STORAGE_KEY, isDark);
    applyTheme(isDark);
  });
})();

// Group theme toggle and language switcher into a single wrapper for proper alignment
(function () {
  function groupSwitchers() {
    const themeBtn = document.getElementById('theme-toggle');
    const langSwitcher = document.querySelector('.language-switcher');
    if (!themeBtn || !langSwitcher) return;

    // Check if already wrapped
    if (document.querySelector('.utility-switchers')) return;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'utility-switchers';
    wrapper.style.position = 'fixed';
    wrapper.style.top = '20px';
    wrapper.style.right = '20px';
    wrapper.style.display = 'flex';
    wrapper.style.gap = '12px';
    wrapper.style.alignItems = 'center';
    wrapper.style.zIndex = '10000';

    // Reset individual positioning so they follow the wrapper's flexbox
    themeBtn.style.position = 'static';
    langSwitcher.style.position = 'static';

    // Insert into wrapper
    wrapper.appendChild(themeBtn);
    wrapper.appendChild(langSwitcher);

    document.body.appendChild(wrapper);
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', groupSwitchers);
  } else {
    groupSwitchers();
  }
})(); 