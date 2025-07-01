// Language Switcher Functionality
class LanguageSwitcher {
  constructor() {
    console.log('LanguageSwitcher: Initializing...');
    this.currentLang = this.getStoredLanguage() || 'en';
    this.init();
  }

  init() {
    this.currentLang = this.getStoredLanguage() || 'en';
    this.createLanguageSwitcher();
    this.waitForContentLoad(() => {
      this.applyLanguage(this.currentLang);
      this.updateCurrentLangDisplay();
      this.bindEvents();
      console.log('LanguageSwitcher: Initialized successfully');
    });
  }

  waitForContentLoad(callback) {
    // Check if main content is loaded
    const checkContent = () => {
      const mainContent = document.querySelector('main, .main-content, .page-content');
      const i18nElements = document.querySelectorAll('[data-i18n]');
      
      console.log('Checking content load - Main content found:', !!mainContent);
      console.log('i18n elements found:', i18nElements.length);
      
      if (mainContent && i18nElements.length > 0) {
        console.log('Content is ready, executing callback');
        callback();
      } else {
        console.log('Content not ready yet, retrying in 500ms...');
        setTimeout(checkContent, 500);
      }
    };
    
    // Start checking after a short delay
    setTimeout(checkContent, 200);
  }

  createLanguageSwitcher() {
    // Check if language switcher already exists
    if (document.querySelector('.language-switcher')) {
      console.log('LanguageSwitcher: Already exists, skipping creation');
      return;
    }

    // Create language switcher HTML structure
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.innerHTML = `
      <div class="lang-dropdown">
        <button class="lang-btn" id="langBtn">
          <span class="lang-current" id="langCurrent">EN</span>
          <span class="lang-arrow">▼</span>
        </button>
        <div class="lang-menu" id="langMenu">
          <a href="#" class="lang-option" data-lang="en">
            <span class="lang-flag">🇺🇸</span>
            <span class="lang-name">English</span>
          </a>
          <a href="#" class="lang-option" data-lang="zh-TW">
            <span class="lang-flag">🇹🇼</span>
            <span class="lang-name">繁體中文</span>
          </a>
          <a href="#" class="lang-option" data-lang="zh-CN">
            <span class="lang-flag">🇨🇳</span>
            <span class="lang-name">简体中文</span>
          </a>
        </div>
      </div>
    `;

    // Try to insert into body directly for now to ensure visibility
    const body = document.querySelector('body');
    if (body) {
      body.appendChild(languageSwitcher);
      console.log('LanguageSwitcher: Added to body');
    } else {
      console.error('LanguageSwitcher: Cannot find body element');
      return;
    }
  }

  bindEvents() {
    // Use a slight delay to ensure DOM elements are ready
    setTimeout(() => {
      const langBtn = document.getElementById('langBtn');
      const langMenu = document.getElementById('langMenu');
      const langOptions = document.querySelectorAll('.lang-option');

      console.log('LanguageSwitcher: Binding events');
      console.log('Button found:', !!langBtn);
      console.log('Menu found:', !!langMenu);
      console.log('Options found:', langOptions.length);

      if (!langBtn || !langMenu) {
        console.error('LanguageSwitcher: Required elements not found');
        return;
      }

      // Toggle dropdown
      langBtn.addEventListener('click', (e) => {
        console.log('LanguageSwitcher: Button clicked');
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = langMenu.classList.contains('show');
        if (isOpen) {
          langMenu.classList.remove('show');
          console.log('LanguageSwitcher: Menu closed');
        } else {
          langMenu.classList.add('show');
          console.log('LanguageSwitcher: Menu opened');
        }
        
        // Update arrow direction
        const arrow = langBtn.querySelector('.lang-arrow');
        if (arrow) {
          arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown')) {
          langMenu.classList.remove('show');
          const arrow = document.querySelector('.lang-arrow');
          if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
          }
        }
      });

      // Language selection
      langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          console.log('LanguageSwitcher: Language option clicked');
          e.preventDefault();
          const selectedLang = option.getAttribute('data-lang');
          console.log('Selected language:', selectedLang);
          this.switchLanguage(selectedLang);
          langMenu.classList.remove('show');
          const arrow = document.querySelector('.lang-arrow');
          if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
          }
        });
      });
    }, 100);
  }

  switchLanguage(lang) {
    console.log('LanguageSwitcher: Switching to', lang);
    this.currentLang = lang;
    this.storeLanguage(lang);
    this.applyLanguage(lang);
    this.updateCurrentLangDisplay();
  }

  applyLanguage(lang) {
    if (!window.translations || !window.translations[lang]) {
      console.warn(`Language ${lang} not found`);
      console.log('Available translations:', window.translations ? Object.keys(window.translations) : 'none');
      return;
    }

    console.log('LanguageSwitcher: Applying language', lang);
    const translations = window.translations[lang];

    // Get all elements with data-i18n attributes
    const allI18nElements = document.querySelectorAll('[data-i18n]');
    console.log('Found elements with data-i18n:', allI18nElements.length);
    
    // List all found elements for debugging
    allI18nElements.forEach((element, index) => {
      const key = element.getAttribute('data-i18n');
      const tagName = element.tagName.toLowerCase();
      const textPreview = element.textContent.substring(0, 50).replace(/\s+/g, ' ').trim();
      console.log(`${index + 1}. Element: ${tagName} | Key: "${key}" | Text: "${textPreview}..."`);
    });

    // Apply translations to all elements
    let updatedCount = 0;
    allI18nElements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key && translations[key]) {
        const oldText = element.textContent;
        element.textContent = translations[key];
        updatedCount++;
        console.log(`✓ Updated "${key}": "${oldText.substring(0, 30)}..." → "${translations[key].substring(0, 30)}..."`);
      } else if (key && !translations[key]) {
        console.warn(`✗ Translation missing for key: "${key}"`);
      }
    });
    
    console.log(`Successfully updated ${updatedCount} out of ${allI18nElements.length} elements`);

    // Specifically check the paragraph elements
    const paragraphs = document.querySelectorAll('p[data-i18n]');
    console.log('Found paragraphs with data-i18n:', paragraphs.length);
    paragraphs.forEach((p, index) => {
      const key = p.getAttribute('data-i18n');
      console.log(`Paragraph ${index + 1}: key="${key}", current text="${p.textContent.substring(0, 30)}..."`);
    });

    // Update document language attribute
    document.documentElement.lang = lang;
  }

  updateCurrentLangDisplay() {
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) {
      const langNames = {
        'en': 'EN',
        'zh-TW': '繁',
        'zh-CN': '简'
      };
      langCurrent.textContent = langNames[this.currentLang] || 'EN';
      console.log('LanguageSwitcher: Updated display to', langNames[this.currentLang]);
    }
  }

  storeLanguage(lang) {
    try {
      localStorage.setItem('preferredLanguage', lang);
      console.log('LanguageSwitcher: Stored language preference', lang);
    } catch (e) {
      console.warn('Unable to store language preference');
    }
  }

  getStoredLanguage() {
    try {
      return localStorage.getItem('preferredLanguage');
    } catch (e) {
      return null;
    }
  }
}

// Initialize language switcher
let languageSwitcherInstance = null;

function initLanguageSwitcher() {
  if (languageSwitcherInstance) {
    console.log('LanguageSwitcher: Already initialized');
    return;
  }
  
  console.log('LanguageSwitcher: Creating new instance');
  languageSwitcherInstance = new LanguageSwitcher();
}

// Multiple initialization strategies to ensure it works
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - initializing language switcher');
  initLanguageSwitcher();
});

window.addEventListener('load', () => {
  console.log('Window Load - checking if language switcher exists');
  if (!languageSwitcherInstance) {
    console.log('Language switcher not found, initializing...');
    initLanguageSwitcher();
  }
});

// Fallback: Try to initialize after a delay if DOM is already ready
if (document.readyState !== 'loading') {
  console.log('Document already ready - initializing immediately');
  initLanguageSwitcher();
} 