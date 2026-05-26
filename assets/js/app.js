/**
 * ARQUIVO PRINCIPAL DO SISTEMA FRONT-END
 * Gerencia a lógica de renderização, navegação, lightbox e animações da Landing Page.
 */

// ==========================================
// 1. SOLUÇÃO DEFINITIVA PARA FORÇAR O TOPO
// ==========================================

// Limpa a URL se o usuário atualizou com algum # no link (Ex: site.com/#plans vira site.com)
if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
}

// Desliga a memória interna do navegador que tenta lembrar onde o usuário estava
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Joga para o topo brutalmente e instantaneamente
window.scrollTo(0, 0);

// ==========================================
// 2. VARIÁVEIS GLOBAIS DO SISTEMA
// ==========================================
let periodoAtual = "";


// ==========================================
// 3. INICIALIZAÇÃO (QUANDO A PÁGINA CARREGA)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Força o topo de novo ao construir o HTML
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Aguarda meio segundo e aí sim ativa a "rolagem suave" do CSS para os botões funcionarem bonito
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        document.body.style.scrollBehavior = "smooth";
    }, 500);

    // Carrega os blocos da página

    // Navbar Scroll Listener
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    renderizarServicos();
    // initStickyWhatsApp(); // Desativado em favor do novo chat de autoatendimento
    renderizarPortfolio();
    initLightbox();
    initPortfolioSlider();
    renderizarProcesso();
    renderizarTestimonials();
    renderizarFAQ();
    initScrollAnimations();

    // As imagens de fundo do Hero e do Final CTA agora são processadas pelo PHP em index.php
    // garantindo suporte nativo a imagens responsivas para Mobile através de CSS.
});


// ==========================================
// 4. LÓGICA DE PREÇOS (MENSAL/ANUAL)
// ==========================================
// ==========================================
// 4. LÓGICA DE SERVIÇOS (REFORMULADA CRO)
// ==========================================
/**
 * Renderiza dinamicamente os cards de serviço no container HTML.
 * Lê a constante `servicosData` de data.js.
 * @returns {void}
 */
function renderizarServicos() {
    const container = document.getElementById('cards-container');
    if (!container) return;

    container.innerHTML = ""; // Limpa a tela

    servicosData.forEach(servico => {
        const card = document.createElement('div');
        card.className = `tour-card ${servico.featured ? 'featured' : ''} reveal`;

        let urgencyHTML = servico.urgency ? `<div class="urgency-trigger">${servico.urgency}</div>` : "";
        let priceHTML = servico.preco ? `<div class="price-box"><span class="price-value">${servico.preco}</span></div>` : "";

        card.innerHTML = `
            <div class="card-content">
                <h3 class="card-title">${servico.nome}</h3>
                ${priceHTML}
                ${urgencyHTML}
                <div class="social-proof">${servico.provaSocial}</div>
                <div class="beneficio-destaque">${servico.beneficio}</div>
                <ul class="benefit-list">
                    ${servico.itens.map(i => `<li><i class="fas fa-check icon-check"></i> ${i}</li>`).join('')}
                </ul>
                <button class="btn-whatsapp ${servico.featured ? 'btn-primary pulse' : 'btn-outline'}" 
                        onclick="abrirModal('${servico.nome}', '${servico.preco}', '${servico.periodo}')">${servico.btnTexto}</button>
            </div>
        `;
        container.appendChild(card);
    });

    initVagasCounter();
    renderizarNotificacoes();
    registerSW();
}

function renderizarNotificacoes() {// Lista de nomes e serviços
    const nomes = ["Ricardo", "Felipe", "Gustavo", "Mateus", "André", "Bruno", "Vinícius", "Juliana", "Mariana", "Fernanda"];
    const servicos = ["Avaliação Invisalign", "Aparelho Ortodôntico", "Limpeza Dental", "Odontopediatria", "Clareamento a Laser"];

    const showNotification = () => {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const servico = servicos[Math.floor(Math.random() * servicos.length)];

        const notifyDiv = document.createElement('div');
        notifyDiv.className = 'social-notify';
        notifyDiv.innerHTML = `
            <div class="notify-icon"><i class="fas fa-check-circle"></i></div>
            <div class="notify-content">
                <strong>${nome}</strong> acabou de agendar<br>
                <span>${servico}</span>
            </div>
        `;
        document.body.appendChild(notifyDiv);

        setTimeout(() => notifyDiv.classList.add('active'), 100);
        setTimeout(() => {
            notifyDiv.classList.remove('active');
            setTimeout(() => notifyDiv.remove(), 500);
        }, 5000);
    };

    // Primeira notificação após 5 segundos
    setTimeout(showNotification, 5000);
    // Próximas em intervalos aleatórios entre 20 e 40 segundos
    setInterval(() => {
        if (Math.random() > 0.5) showNotification();
    }, 30000);
}

function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./assets/js/sw.js').then(reg => {
                console.log('SW Registered!', reg);
            }).catch(err => {
                console.log('SW Registration failed:', err);
            });
        });
    }
}

function initVagasCounter() {
    const counterEl = document.getElementById('vagas-restantes');
    if (!counterEl) return;

    // Lógica para simular vagas diminuindo ou mantendo baixo
    let vagas = 3;
    const updateVagas = () => {
        if (vagas > 1 && Math.random() > 0.8) {
            vagas--;
            counterEl.innerText = vagas;
        }
    };

    // Atualiza ocasionalmente para criar sensação de movimento
    setInterval(updateVagas, 30000);
}





// ==========================================
// 5. LÓGICA DO PROCESSO (PASSO A PASSO)
// ==========================================
function renderizarProcesso() {
    const container = document.getElementById('process-container');
    if (!container) return;

    container.innerHTML = "";
    processoData.forEach((passo, index) => {
        const step = document.createElement('div');
        step.className = 'process-step reveal';
        step.style.animationDelay = `${index * 0.1}s`;

        step.innerHTML = `
            <div class="step-icon">
                <i class="${passo.icone}"></i>
                <span class="step-number">${index + 1}</span>
            </div>
            <h3 class="step-title">${passo.titulo}</h3>
            <p class="step-description">${passo.descricao}</p>
        `;
        container.appendChild(step);
    });
}


// ==========================================
// 6. LÓGICA DA FAQ (PERGUNTAS FREQUENTES)
// ==========================================
function renderizarFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    container.innerHTML = "";

    faqData.forEach((item) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        
        const iconHtml = item.icone ? `<i class="${item.icone} faq-icon"></i>` : '';

        faqItem.innerHTML = `
            <button class="faq-question" onclick="toggleFAQ(this)">
                <span class="faq-question-text">${iconHtml} ${item.pergunta}</span>
                <i class="fas fa-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer">
                <div style="padding: 20px 0;"> ${item.resposta}
                </div>
            </div>
        `;
        container.appendChild(faqItem);
    });
}

// ==========================================
// 6.5 LÓGICA DE DEPOIMENTOS (TESTIMONIALS)
// ==========================================
function renderizarTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = "";

    testimonialsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'testimonial-card reveal';

        let estrelas = "";
        for (let i = 0; i < 5; i++) {
            estrelas += `<i class="fas fa-star ${i < item.avaliacao ? 'active' : ''}"></i>`;
        }

        card.innerHTML = `
            <div class="testimonial-quote"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-text">${item.texto}</p>
            <div class="testimonial-author">
                <img src="${item.foto}" alt="${item.nome}" class="author-img" loading="lazy">
                <div class="author-info">
                    <h4>${item.nome}</h4>
                    <span>${item.cidade}</span>
                    <div class="stars">${estrelas}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


function toggleFAQ(botao) {
    const item = botao.parentElement;
    const resposta = item.querySelector('.faq-answer');

    // Fecha as outras abertas (Efeito Sanfona)
    document.querySelectorAll('.faq-item').forEach(outro => {
        if (outro !== item) {
            outro.classList.remove('active');
            outro.querySelector('.faq-answer').style.maxHeight = null;
        }
    });

    // Abre ou fecha a que o usuário clicou
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
        resposta.style.maxHeight = resposta.scrollHeight + "px";
    } else {
        resposta.style.maxHeight = null;
    }
}


// ==========================================
// 7. MODAL DE CHECKOUT E WHATSAPP
// ==========================================
function abrirModal(nome, preco, periodo) {
    const numeroWhats = SITE_CONFIG.DRIVER_PHONE;
    const texto = `Olá! Gostaria de agendar o serviço: *${nome}* (${preco}). Como podemos prosseguir?`;
    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`, '_blank');
}

// ==========================================
// 8. LÓGICA DO PORTFÓLIO E GALERIA
// ==========================================
let currentPortfolioItems = [];
let currentLightboxIndex = 0;

function renderizarPortfolio() {
    const filterContainer = document.getElementById('portfolio-filters');
    const gridContainer = document.getElementById('portfolio-grid');
    if (!filterContainer || !gridContainer) return;

    // Renderizar Filtros
    filterContainer.innerHTML = portfolioData.categories.map(cat => `
        <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" 
                onclick="filtrarPortfolio('${cat.id}', this)">
            ${cat.label}
        </button>
    `).join('');

    // Renderizar Imagens (Inicialmente todas)
    filtrarPortfolio('all', filterContainer.querySelector('.active'));
}

function filtrarPortfolio(categoryId, btn) {
    const gridContainer = document.getElementById('portfolio-grid');
    if (!gridContainer) return;

    // Atualizar botões
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Filtrar itens
    currentPortfolioItems = categoryId === 'all'
        ? portfolioData.items
        : portfolioData.items.filter(item => item.category === categoryId);

    // Renderizar no Grid
    gridContainer.innerHTML = currentPortfolioItems.map((item, index) => {
        let isYoutube = item.img && (item.img.includes('youtube.com') || item.img.includes('youtu.be'));
        let isMp4 = item.img && item.img.endsWith('.mp4');
        let thumbImg = item.img;

        if (isYoutube) {
            let videoId = "";
            if (item.img.includes('shorts/')) {
                videoId = item.img.split('shorts/')[1].split(/[?#\/]/)[0];
            } else if (item.img.includes('youtu.be/')) {
                videoId = item.img.split('youtu.be/')[1].split(/[?#\/]/)[0];
            } else if (item.img.includes('watch?v=')) {
                videoId = item.img.split('watch?v=')[1].split(/[&#]/)[0];
            } else {
                videoId = item.img.split('?')[0].split('/').filter(p => p !== "").pop();
            }
            thumbImg = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        } else if (isMp4) {
            thumbImg = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.LOGO_HEADER : 'assets/img/logo-tattoo.png';
        }

        const fallbackImg = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.LOGO_HEADER : 'assets/img/logo-tattoo.png';

        return `
            <div class="portfolio-item reveal" onclick="abrirLightbox(${index})">
                <img src="${thumbImg}" alt="${item.title}" loading="lazy" onerror="this.src='${fallbackImg}'" draggable="false" style="user-select: none; -webkit-user-drag: none;">
                <div class="portfolio-overlay">
                    ${(isYoutube || isMp4) ? '<i class="fas fa-play-circle" style="font-size: 3.5rem; color: #fff; margin-bottom: 10px;"></i>' : ''}
                    <span>${item.title}</span>
                </div>
            </div>
        `;
    }).join('');

    // Reiniciar animações para os novos elementos
    initScrollAnimations();
}

// Lógica de Lightbox
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!lightbox) return;

    closeBtn.onclick = () => lightbox.classList.remove('active');
    prevBtn.onclick = (e) => { e.stopPropagation(); mudarImagemLightbox(-1); };
    nextBtn.onclick = (e) => { e.stopPropagation(); mudarImagemLightbox(1); };

    lightbox.onclick = () => lightbox.classList.remove('active');

    // Fechar com ESC e navegar com setas
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === "Escape") lightbox.classList.remove('active');
            if (e.key === "ArrowLeft") mudarImagemLightbox(-1);
            if (e.key === "ArrowRight") mudarImagemLightbox(1);
        }
    });

    // Lógica de Arrastar/Swipe no Lightbox (Mobile e Mouse)
    let touchstartX = 0;
    let touchendX = 0;

    function handleGesture() {
        if (touchendX < touchstartX - 50) mudarImagemLightbox(1);
        if (touchendX > touchstartX + 50) mudarImagemLightbox(-1);
    }

    lightbox.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });

    // Suporte a Mouse Drag no Lightbox
    let isDraggingLb = false;
    lightbox.addEventListener('mousedown', e => {
        if (e.target.closest('.lightbox-prev, .lightbox-next, .lightbox-close, iframe, video')) return;
        isDraggingLb = true;
        touchstartX = e.clientX;
    });
    lightbox.addEventListener('mouseup', e => {
        if (!isDraggingLb) return;
        isDraggingLb = false;
        touchendX = e.clientX;
        handleGesture();
    });
    lightbox.addEventListener('mouseleave', () => { isDraggingLb = false; });
}

function abrirLightbox(index) {
    if (window.isDraggingSlider) return; // Evita abrir se o usuário estiver apenas arrastando

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const container = document.querySelector('.lightbox-content-container');

    currentLightboxIndex = index;
    const item = currentPortfolioItems[index];

    // Limpar elementos anteriores se existirem
    const oldIframe = container.querySelector('iframe');
    if (oldIframe) oldIframe.remove();
    const oldVideo = container.querySelector('.lb-video-wrapper');
    if (oldVideo) oldVideo.remove();
    const oldBtn = container.querySelector('.btn-view-video');
    if (oldBtn) oldBtn.remove();

    lightboxImg.style.display = 'block';

    if (item.img && (item.img.includes('youtube.com') || item.img.includes('youtu.be'))) {
        lightboxImg.style.display = 'none';

        let videoId = "";
        if (item.img.includes('shorts/')) {
            videoId = item.img.split('shorts/')[1].split(/[?#\/]/)[0];
        } else if (item.img.includes('youtu.be/')) {
            videoId = item.img.split('youtu.be/')[1].split(/[?#\/]/)[0];
        } else if (item.img.includes('watch?v=')) {
            videoId = item.img.split('watch?v=')[1].split(/[&#]/)[0];
        } else {
            videoId = item.img.split('?')[0].split('/').filter(p => p !== "").pop();
        }

        // URL de embed simplificada, forçando mute para garantir o autoplay
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`;

        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.style.borderRadius = "10px";
        iframe.className = "lb-video-wrapper";
        
        // Ajuste de tamanho dinâmico (Shorts = Vertical, Normal = Horizontal)
        if (item.img.includes('shorts/')) {
            iframe.style.width = "auto";
            iframe.style.aspectRatio = "9/16";
            iframe.style.height = "600px";
            iframe.style.maxHeight = "80vh";
            iframe.style.maxWidth = "100%";
            iframe.style.margin = "0 auto";
            iframe.style.display = "block";
        } else {
            iframe.width = "100%";
            iframe.height = "600px";
        }
        container.insertBefore(iframe, lightboxCaption);
    } else if (item.img && item.img.endsWith('.mp4')) {
        lightboxImg.style.display = 'none';

        const video = document.createElement('video');
        video.src = item.img;
        video.style.width = "100%";
        video.style.height = "600px";
        video.style.objectFit = "contain";
        video.controls = true;
        video.autoplay = true;
        video.muted = true; // Necessário para navegadores permitirem o autoplay
        video.playsInline = true;
        video.style.borderRadius = "10px";
        video.className = "lb-video-wrapper";
        container.insertBefore(video, lightboxCaption);
    } else {
        lightboxImg.src = item.img;
    }

    lightboxCaption.innerText = item.title;
    lightbox.classList.add('active');
}

function mudarImagemLightbox(direcao) {
    currentLightboxIndex += direcao;

    if (currentLightboxIndex >= currentPortfolioItems.length) currentLightboxIndex = 0;
    if (currentLightboxIndex < 0) currentLightboxIndex = currentPortfolioItems.length - 1;

    abrirLightbox(currentLightboxIndex);
}

function initPortfolioSlider() {
    const slider = document.querySelector('.portfolio-slider-container');
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');

    if (!slider || !prevBtn || !nextBtn) return;

    const scrollAmount = 350; // Largura do item + gap aprox.

    prevBtn.onclick = () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    nextBtn.onclick = () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Lógica de Drag no Slider (Desktop e Mobile)
    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
        isDown = true;
        window.isDraggingSlider = false;
        slider.style.cursor = 'grabbing';
        slider.style.scrollBehavior = 'auto'; // Remove scroll suave para arrastar na hora
        
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startX -= slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };

    const stopDrag = () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth'; // Devolve o scroll suave
        
        setTimeout(() => { window.isDraggingSlider = false; }, 50);
    };

    const moveDrag = (e) => {
        if (!isDown) return;
        
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const walk = (x - slider.offsetLeft - startX) * 2; 
        
        if (Math.abs(walk) > 10) {
            window.isDraggingSlider = true; 
        }
        
        slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('touchstart', startDrag, { passive: true });

    slider.addEventListener('mouseleave', stopDrag);
    slider.addEventListener('mouseup', stopDrag);
    slider.addEventListener('touchend', stopDrag);

    slider.addEventListener('mousemove', (e) => {
        if(isDown) e.preventDefault();
        moveDrag(e);
    });
    
    slider.addEventListener('touchmove', (e) => {
        moveDrag(e);
    }, { passive: true });
}

function scrollToPlans() {
    const plansSection = document.getElementById('plans');
    if (plansSection) plansSection.scrollIntoView({ behavior: 'smooth' });
}

