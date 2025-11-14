function initMDImageLightbox() {
  // Esperar a que el contenido esté listo
  setTimeout(() => {
    const markdownImages = document.querySelectorAll(`
      .markdown img:not(.navbar__logo):not(.footer__logo):not([width*="0"]):not([width*="1"]):not([width*="2"]):not([width*="3"])
    `);
    
    markdownImages.forEach(img => {
      // Excluir imágenes muy pequeñas basado en tamaño real
      const rect = img.getBoundingClientRect();
      if (rect.width < 60 || rect.height < 60) {
        return;
      }
      
      // Agregar cursor pointer si no lo tiene
      img.style.cursor = 'zoom-in';
      
      // Remover event listener anterior si existe
      img.removeEventListener('click', handleImageClick);
      
      // Agregar event listener
      img.addEventListener('click', handleImageClick);
      
      // Mejorar accesibilidad
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Ampliar imagen: ${img.alt || 'Sin descripción'}`);
      img.setAttribute('tabindex', '0');
      
      // También permitir Enter key
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handleImageClick(e);
        }
      });
    });
  }, 100);
}

function handleImageClick(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const img = event.target;
  openLightbox(img);
}

function openLightbox(imgElement) {
  // Prevenir múltiples lightboxes
  if (document.querySelector('.md-lightbox-overlay.active')) {
    return;
  }
  
  // Crear overlay
  const overlay = document.createElement('div');
  overlay.className = 'md-lightbox-overlay';
  
  // Crear contenedor
  const container = document.createElement('div');
  container.className = 'md-lightbox-container';
  
  // Crear imagen ampliada
  const enlargedImg = new Image();
  enlargedImg.className = 'md-lightbox-image';
  enlargedImg.alt = imgElement.alt;
  
  // Mostrar estado de carga
  const loadingText = document.createElement('div');
  loadingText.className = 'md-lightbox-loading';
  loadingText.textContent = 'Cargando imagen...';
  container.appendChild(loadingText);
  
  // Cargar imagen
  enlargedImg.onload = function() {
    if (loadingText.parentNode) {
      loadingText.remove();
    }
  };
  
  enlargedImg.onerror = function() {
    loadingText.textContent = 'Error al cargar la imagen';
  };
  
  enlargedImg.src = imgElement.src;
  
  // Crear caption si existe
  if (imgElement.alt && imgElement.alt.trim() !== '') {
    const caption = document.createElement('div');
    caption.className = 'md-lightbox-caption';
    caption.textContent = imgElement.alt;
    container.appendChild(caption);
  }
  
  // Crear botón de cerrar
  const closeBtn = document.createElement('button');
  closeBtn.className = 'md-lightbox-close';
  closeBtn.innerHTML = '×';
  closeBtn.setAttribute('aria-label', 'Cerrar lightbox');
  
  // Ensamblar
  container.appendChild(enlargedImg);
  overlay.appendChild(container);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
  
  // Activar después de un frame para la animación
  requestAnimationFrame(() => {
    document.body.classList.add('lightbox-open');
    overlay.classList.add('active');
  });
  
  // Funciones para cerrar
  function closeLightbox() {
    overlay.classList.remove('active');
    overlay.classList.add('fade-out');
    
    setTimeout(() => {
      document.body.classList.remove('lightbox-open');
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    }, 300);
    
    // Remover event listeners
    document.removeEventListener('keydown', handleEscape);
    overlay.removeEventListener('click', closeOnOverlayClick);
    closeBtn.removeEventListener('click', closeLightbox);
  }
  
  function handleEscape(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  }
  
  function closeOnOverlayClick(e) {
    if (e.target === overlay) {
      closeLightbox();
    }
  }
  
  // Event listeners
  document.addEventListener('keydown', handleEscape);
  overlay.addEventListener('click', closeOnOverlayClick);
  closeBtn.addEventListener('click', closeLightbox);
  
  // Prevenir click en la imagen misma
  enlargedImg.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Inicialización mejorada
function initializeLightbox() {
  initMDImageLightbox();
  
  // También inicializar cuando cambie la página (SPA)
  if (typeof window !== 'undefined') {
    // Observer para cambios en el DOM
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === 1) {
              // Si se agrega un elemento con clase markdown o lo contiene
              if (node.classList?.contains('markdown') || 
                  node.querySelector?.('.markdown')) {
                setTimeout(initMDImageLightbox, 200);
                break;
              }
            }
          }
        }
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLightbox);
} else {
  initializeLightbox();
}