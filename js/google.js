function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

let currentLanguage = 'es';

function translateTo(lang) {
  currentLanguage = lang;
  
  // Actualizar flags activos
  document.querySelectorAll('.lang-flag').forEach(flag => {
    flag.classList.remove('active');
  });
  document.getElementById('flag-' + lang).classList.add('active');
  document.getElementById('mobile-flag-' + lang).classList.add('active');
  
  // Usar Google Translate
  if (lang === 'en') {
    setTimeout(() => {
      const googleTranslateSelect = document.querySelector('.goog-te-combo');
      if (googleTranslateSelect) {
        googleTranslateSelect.value = 'en';
        googleTranslateSelect.dispatchEvent(new Event('change'));
      }
    }, 100);
  } else {
    setTimeout(() => {
      const googleTranslateSelect = document.querySelector('.goog-te-combo');
      if (googleTranslateSelect) {
        googleTranslateSelect.value = 'es';
        googleTranslateSelect.dispatchEvent(new Event('change'));
      }
    }, 100);
  }
}