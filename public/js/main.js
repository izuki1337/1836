document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1, // Kích hoạt sớm hơn một chút để không bị giật khựng
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Mobile Hamburger Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('is-open');
      
      // Khóa cuộn trang web khi đang mở menu
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
  }

  // Refined Header (Transparent at top, Glassmorphism on scroll)
  const header = document.querySelector('.site-header');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on load
  }

  // Custom Cursor Logic with Lerp (Linear Interpolation)
  const cursor = document.querySelector('.custom-cursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      // Thuật toán Lerp: Tạo độ trễ mượt mà (0.15 là tốc độ bám theo, càng nhỏ càng trễ)
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      // Dùng translate3d để ép trình duyệt dùng GPU render, chống giật lag
      cursor.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
      
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hiệu ứng phình to khi hover vào các phần tử tương tác được
    const interactiveElements = document.querySelectorAll('a, button, .menu-toggle, .project-card, .tag-row span, .photo-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  // Lightbox Logic cho trang Gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const photoCards = document.querySelectorAll('.photo-card img');

  if (lightbox && lightboxImg) {
    photoCards.forEach(img => {
      img.addEventListener('click', () => {
        // Thay đổi URL tải ảnh nét hơn (w=1600) nếu dùng unsplash, hoặc giữ nguyên src cũ
        lightboxImg.src = img.src.replace('&w=800', '&w=1600');
        lightbox.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Khóa cuộn trang
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  }

  // Code Modal Logic cho trang AIO / Project Dê
  const codeModal = document.getElementById('code-modal');
  const codeModalClose = document.getElementById('code-modal-close');
  const codeModalContent = document.getElementById('code-modal-content');
  const viewCodeBtns = document.querySelectorAll('.btn-view-code');

  if (codeModal && viewCodeBtns.length > 0) {
    viewCodeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const sourceCode = document.querySelector(`#${targetId} code`);
        const headerText = document.querySelector(`#${targetId} .code-header`);
        if (sourceCode) {
          codeModalContent.innerHTML = sourceCode.innerHTML;
          if(headerText && document.getElementById('modal-code-header')) {
            document.getElementById('modal-code-header').innerText = headerText.innerText;
          }
          codeModal.classList.add('is-active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeCodeModal = () => {
      codeModal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    codeModalClose.addEventListener('click', closeCodeModal);
    codeModal.addEventListener('click', (e) => {
      if (e.target === codeModal) closeCodeModal();
    });
  }

  // Biến toàn bộ thẻ Album thành khu vực có thể click (thay vì chỉ click vào chữ)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Tránh kích hoạt 2 lần nếu người dùng click thẳng vào thẻ <a>
      if (e.target.tagName.toLowerCase() !== 'a') {
        const link = card.querySelector('a.project-link');
        if (link) link.click();
      }
    });
  });

  // Smooth Back to Top
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Ngăn trình duyệt nhảy URL thêm #top
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Trượt mượt lên trên cùng
    });
  }

  // Page Transition Logic
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Chỉ kích hoạt nếu là link nội bộ, khác trang hiện tại và không mở tab mới
      if (link.hostname === window.location.hostname && link.pathname !== window.location.pathname && link.target !== '_blank') {
        e.preventDefault();
        document.body.classList.add('is-leaving'); // Kích hoạt hiệu ứng mờ nội dung
        setTimeout(() => { 
          window.location.href = link.href; 
        }, 400); // 400ms khớp với thời gian transition trong CSS
      }
    });
  });

  // Fix lỗi khi người dùng bấm nút Back/Forward (BFCache của Safari/Chrome)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) document.body.classList.remove('is-leaving');
  });
});