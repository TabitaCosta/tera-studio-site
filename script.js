// PERSONALIZE: substitua pelo número com código do país e DDD, somente números. Ex.: 5531999999999
    const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuButton.addEventListener('click', () => {
      const opened = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
      menuButton.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
      menuButton.textContent = opened ? '×' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); menuButton.textContent='☰';
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('contactForm').addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();
      if (!name || !service || !message) return;
      const text = `Olá! Meu nome é ${name}. Tenho interesse em: ${service}.\n\nSobre meu projeto: ${message}`;
      if (WHATSAPP_NUMBER === '32991021899') {
        alert('Antes de publicar, adicione seu número de WhatsApp no arquivo index.html, na variável WHATSAPP_NUMBER.');
        return;
      }
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
