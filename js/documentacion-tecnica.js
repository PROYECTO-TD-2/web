// === TOGGLE ACORDEÓN DOCUMENTACIÓN TÉCNICA ===
function toggleDocAccordion(element) {
    const accordion = element.parentElement;
    
    // Toggle el acordeón clickeado
    accordion.classList.toggle('active');
  }

  // === COPIAR CÓDIGO ===
function copyCode(button) {
    // Encontrar el bloque de código
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    // Copiar al clipboard
    navigator.clipboard.writeText(code).then(() => {
      // Cambiar el botón temporalmente
      const originalText = button.querySelector('.copy-text').textContent;
      button.querySelector('.copy-text').textContent = '¡Copiado!';
      button.querySelector('.copy-icon').textContent = '✓';
      button.classList.add('copied');
      
      // Volver al estado original después de 2 segundos
      setTimeout(() => {
        button.querySelector('.copy-text').textContent = originalText;
        button.querySelector('.copy-icon').textContent = '📋';
        button.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
      alert('No se pudo copiar el código');
    });
  }