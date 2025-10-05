// traductor.js - Solo para Google Translate

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'es',
        includedLanguages: 'en,es,pt'
      },
      'google_translate_element'
    );
  }
  
  function changeLanguage(lang) {
    let attempts = 0;
    const maxAttempts = 50;
    
    const checkGoogleTranslate = setInterval(function() {
      attempts++;
      const googleCombo = document.querySelector('.goog-te-combo');
      
      if (googleCombo) {
        clearInterval(checkGoogleTranslate);
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change'));
        console.log('✅ Idioma cambiado a:', lang);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkGoogleTranslate);
        console.error('❌ Google Translate no cargó');
      }
    }, 100);
  }