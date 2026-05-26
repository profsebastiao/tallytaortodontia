<?php
/**
 * ============================================================================
 * HEADER PHP - INICIALIZAÇÃO DE VARIÁVEIS GLOBAIS
 * ============================================================================
 * Este bloco carrega o arquivo `assets/js/config.js` e usa expressões regulares 
 * (regex) para extrair as variáveis de configuração. 
 * Isso permite que o PHP acesse as mesmas configurações que o JavaScript,
 * mantendo uma única fonte de verdade (Single Source of Truth) para o projeto.
 * 
 * As variáveis extraídas são usadas principalmente nas meta tags de SEO e 
 * na pré-carga (preload) de imagens críticas.
 */
$config_js = file_get_contents('assets/js/config.js');
preg_match('/DRIVER_NAME:\s*["\']([^"\']*)["\']/', $config_js, $name_matches);
preg_match('/DRIVER_PHONE:\s*["\']([^"\']*)["\']/', $config_js, $phone_matches);
preg_match('/FAVICON:\s*["\']([^"\']*)["\']/', $config_js, $favicon_matches);
preg_match('/LOGO_HEADER:\s*["\']([^"\']*)["\']/', $config_js, $logo_header_matches);
preg_match('/LOGO_FOOTER:\s*["\']([^"\']*)["\']/', $config_js, $logo_footer_matches);
preg_match('/HERO_BACKGROUND:\s*["\']([^"\']*)["\']/', $config_js, $hero_bg_matches);
preg_match('/HERO_BACKGROUND_MOBILE:\s*["\']([^"\']*)["\']/', $config_js, $hero_bg_m_matches);
preg_match('/CTA_BACKGROUND:\s*["\']([^"\']*)["\']/', $config_js, $cta_bg_matches);
preg_match('/CTA_BACKGROUND_MOBILE:\s*["\']([^"\']*)["\']/', $config_js, $cta_bg_m_matches);

$driver_name = $name_matches[1] ?? '';
$driver_phone = $phone_matches[1] ?? '';
$favicon = $favicon_matches[1] ?? 'assets/img/favicon.ico';
$logo_header = $logo_header_matches[1] ?? 'assets/img/logo.webp';
$logo_footer = $logo_footer_matches[1] ?? 'assets/img/logo.webp';
$hero_bg = $hero_bg_matches[1] ?? 'assets/img/capa.webp';
$hero_bg_mobile = $hero_bg_m_matches[1] ?? $hero_bg;
$cta_bg = $cta_bg_matches[1] ?? 'assets/img/capa1.webp';
$cta_bg_mobile = $cta_bg_m_matches[1] ?? $cta_bg;
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ✅ Otimização LCP: Preload da Imagem Principal -->
    <link rel="preload" as="image" href="<?php echo $hero_bg; ?>" media="(min-width: 769px)">
    <link rel="preload" as="image" href="<?php echo $hero_bg_mobile; ?>" media="(max-width: 768px)">

    <!-- ✅ CORREÇÃO 1: Canonical + Robots -->
    <link rel="canonical" href="https://isaacarttetattoo.com.br/">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

    <!-- ✅ Security: Content Security Policy -->
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https://images.unsplash.com https://isaacarttetattoo.com.br https://i.ytimg.com; frame-src 'self' https://www.youtube.com; connect-src 'self' https://www.google-analytics.com;">

    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#0a0a0a">

    <title>Dra. Tallyta Alves | Invisalign e Ortodontia em João Pessoa</title>

    <meta name="description"
        content="Dra. Tallyta Alves: Ortodontia digital e Invisalign em João Pessoa com atendimento exclusivo, ambiente privado e resultado impecável no seu sorriso. Agende sua avaliação.">
    <meta name="keywords"
        content="Invisalign João Pessoa, Ortodontia JP, Aparelho Invisível, Dra Tallyta Alves, Consultório Odontológico Privado, Dentista em João Pessoa">

    <!-- Open Graph for Facebook / WhatsApp -->
    <meta property="og:title" content="Ortodontia Digital Dra. Tallyta | Sorriso Perfeito em João Pessoa">
    <meta property="og:description"
        content="Transforme seu sorriso com Invisalign. Atendimento individual e resultado de alto nível em João Pessoa.">
    <meta property="og:image" content="https://isaacarttetattoo.com.br/<?php echo $logo_header; ?>">
    <meta property="og:url" content="https://isaacarttetattoo.com.br/">
    <meta property="og:type" content="website">

    <!-- ✅LocalBusiness -->
    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dra. Tallyta Alves",
  "image": "https://isaacarttetattoo.com.br/<?php echo $logo_header; ?>",
  "@id": "https://isaacarttetattoo.com.br/",
  "url": "https://isaacarttetattoo.com.br/",
  "telephone": "+<?php echo $driver_phone; ?>",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "300"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "João Pessoa",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-7.1195",
    "longitude": "-34.8450"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "$$",
  "description": "Consultório odontológico especializado em Invisalign e ortodontia em João Pessoa. Atendimento privativo e exclusivo.",
  "sameAs": [
    "https://wa.me/<?php echo $driver_phone; ?>"
  ]
}
</script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    </script>

    <link rel="icon" type="img/ico" href="<?php echo $favicon; ?>?v=2">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <link rel="stylesheet" href="assets/css/style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="assets/css/chat-widget.css?v=<?php echo time(); ?>">

    <style>
        /* FALLBACK PARA O PORTFÓLIO E SLIDER */
        .portfolio-section {
            padding: 80px 0 !important;
            background: #050505 !important;
            color: #fff !important;
            overflow: hidden !important;
        }
        .portfolio-section .section-title { color: #fff !important; }
        .portfolio-section .section-subtitle { color: rgba(255,255,255,0.6) !important; }

        .portfolio-nav-wrapper {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 20px !important;
            margin-bottom: 40px !important;
        }

        .portfolio-filters {
            display: flex !important;
            gap: 15px !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
        }
        .portfolio-filters::-webkit-scrollbar { display: none !important; }

        .filter-btn {
            background: transparent !important;
            color: #888 !important;
            border: none !important;
            font-weight: 700 !important;
            font-size: 1.1rem !important;
            cursor: pointer !important;
            white-space: nowrap !important;
            position: relative !important;
        }
        .filter-btn.active { color: #8B5A2B !important; }
        .filter-btn.active::after {
            content: '' !important;
            position: absolute !important;
            bottom: -5px !important;
            left: 0 !important;
            width: 100% !important;
            height: 3px !important;
            background: #8B5A2B !important;
        }

        .portfolio-slider-container {
            width: 100% !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            scroll-behavior: smooth !important;
        }
        .portfolio-slider-container::-webkit-scrollbar { display: none !important; }

        .portfolio-grid {
            display: flex !important;
            gap: 20px !important;
            padding: 0 5% !important;
        }

        .portfolio-item {
            flex: 0 0 300px !important;
            aspect-ratio: 1/1 !important;
            border-radius: 15px !important;
            overflow: hidden !important;
            position: relative !important;
            background: #111 !important;
        }
        .portfolio-item img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
        }
        .portfolio-overlay {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            padding: 20px !important;
            background: linear-gradient(transparent, rgba(0,0,0,0.8)) !important;
            color: #fff !important;
            font-weight: 700 !important;
        }

        .portfolio-scroll-btn {
            background: #fff !important;
            border: none !important;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3) !important;
        }

        /* Lightbox Fix */
        .lightbox {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.95);
            z-index: 10000;
            align-items: center;
            justify-content: center;
        }
        .lightbox.active { display: flex !important; }
        
        .lightbox-content-container {
            position: relative;
            display: inline-block;
            width: auto;
            max-width: 90%;
            text-align: center;
        }
        
        .lightbox-content { max-width: 100%; max-height: 80vh; border-radius: 10px; }
        .lightbox-close { position: absolute; top: -40px; right: -40px; color: #fff; font-size: 40px; cursor: pointer; z-index: 10002; }

        .lightbox-prev, .lightbox-next {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            background: rgba(255, 255, 255, 0.2) !important;
            color: #fff !important;
            border: 2px solid #fff !important;
            width: 60px !important;
            height: 60px !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 10001 !important;
            font-size: 30px !important;
            transition: 0.3s !important;
        }
        .lightbox-prev:hover, .lightbox-next:hover {
            background: #8B5A2B !important;
            border-color: #8B5A2B !important;
        }
        .lightbox-prev { left: -80px !important; }
        .lightbox-next { right: -80px !important; }

        @media (max-width: 768px) {
            .lightbox-prev { left: -10px !important; width: 40px !important; height: 40px !important; font-size: 20px !important; }
            .lightbox-next { right: -10px !important; width: 40px !important; height: 40px !important; font-size: 20px !important; }
            .lightbox-close { top: -40px; right: 0px; }
        }

        /* Garantir que o CTA Final use a imagem do config.js */
        .final-cta::before {
            background-image: var(--cta-bg) !important;
            background-position: center !important;
            background-size: cover !important;
            opacity: 0.9 !important; /* 90% nítida */
        }
    </style>

    <script>
        if (window.location.hash) {
            window.history.replaceState(null, null, window.location.pathname);
        }
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    </script>
    <style>
        .nav-seo-text {
            color: #fff;
            font-size: 0.65rem;
            font-weight: 600;
            line-height: 1.1;
            max-width: 140px;
            margin-left: 8px;
            display: block;
        }

        @media (min-width: 768px) {
            .nav-seo-text {
                font-size: 0.85rem;
                max-width: 250px;
                margin-left: 15px;
            }
        }

        .navbar.scrolled .nav-seo-text {
            color: #333;
        }

        .hero {
            background: url('<?php echo $hero_bg; ?>') center/cover no-repeat !important;
        }
        .final-cta::before {
            background: url('<?php echo $cta_bg; ?>') center/cover no-repeat !important;
        }

        /* Imagens Específicas para Mobile */
        @media (max-width: 768px) {
            .hero {
                background: url('<?php echo $hero_bg_mobile; ?>') center/cover no-repeat !important;
            }
            .final-cta::before {
                background: url('<?php echo $cta_bg_mobile; ?>') center/cover no-repeat !important;
            }
        }
    </style>
</head>

<body>

    <nav class="navbar" id="navbar">
        <a href="index.php" class="logo" style="display: flex; align-items: center; text-decoration: none;">
            <img src="<?php echo $logo_header; ?>" alt="Logo Dra. Tallyta Alves" class="logo-img" id="logo-img" loading="lazy">
            <span class="nav-seo-text">Ortodontia Digital Avançada</span>
        </a>
        <button class="btn-trial" id="nav-btn" onclick="scrollToPlans()">Ver Serviços</button>
    </nav>

    <section class="hero" id="home">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-badge reveal">🔥 Agenda limitada para esta semana</div>
            <h1 class="hero-title">Ortodontia e Invisalign em João Pessoa com atendimento exclusivo e resultado impecável no seu sorriso.</h1>
            <p class="hero-subtitle">Transforme seu sorriso com previsibilidade. Atendimento com hora marcada, ambiente privado e foco total em cada detalhe do seu tratamento.</p>

            <div class="hero-triggers reveal">
                <span><i class="fas fa-user-check"></i> Atendimento individual</span>
                <span><i class="fas fa-clock"></i> Sem pressa, sem fila</span>
                <span><i class="fas fa-star"></i> Resultado de alto nível</span>
            </div>

            <div class="hero-buttons">
                <a href="#plans" class="cta-main pulse">
                    👉 QUERO AGENDAR MINHA AVALIAÇÃO
                </a>
            </div>
        </div>
    </section>

    <!-- ✅ SEÇÃO DE PROVA SOCIAL -->
    <section class="social-stats reveal">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">5.0</span>
                    <span class="stat-stars">⭐⭐⭐⭐⭐</span>
                    <p class="stat-text">Avaliação média</p>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <span class="stat-number">+300</span>
                    <p class="stat-text">Sorrisos transformados</p>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <p class="stat-text">Clientes satisfeitos</p>
                </div>
            </div>
        </div>
    </section>

    <section class="tours-pricing-section" id="plans">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Tratamentos Exclusivos</h2>
                <p class="section-subtitle">Cada sorriso é único. Trabalhamos com tecnologia, precisão e atendimento personalizado para criar resultados naturais e duradouros.</p>
            </div>

            <div class="pricing-grid" id="cards-container"></div>
        </div>
    </section>

    <!-- ✅ SEÇÃO PORTFÓLIO -->
    <section class="portfolio-section" id="portfolio">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title">Portfólio</h2>
                <p class="section-subtitle">Conheça alguns dos meus trabalhos mais recentes e exclusivos.</p>
            </div>

            <!-- Filtros e Navegação do Portfólio -->
            <div class="portfolio-nav-wrapper">
                <button class="portfolio-scroll-btn prev" id="portfolio-prev"><i class="fas fa-chevron-left"></i></button>
                <div class="portfolio-filters" id="portfolio-filters">
                    <!-- Renderizado via JS -->
                </div>
                <button class="portfolio-scroll-btn next" id="portfolio-next"><i class="fas fa-chevron-right"></i></button>
            </div>

            <!-- Galeria de Imagens (Slider) -->
            <div class="portfolio-slider-container">
                <div class="portfolio-grid" id="portfolio-grid">
                    <!-- Renderizado via JS -->
                </div>
            </div>
        </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox">
        <div class="lightbox-content-container">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-prev" id="lb-prev"><span>&#10094;</span></button>
            <img class="lightbox-content" id="lightbox-img">
            <div id="lightbox-caption" class="lightbox-caption"></div>
            <button class="lightbox-next" id="lb-next"><span>&#10095;</span></button>
        </div>
    </div>

    <section class="catalog" id="como-funciona">
        <p class="catalog-overline">Como Funciona</p>
        <h2 class="catalog-subtitle" style="font-size:1.3rem;">Simples, rápido e sem complicação</h2>

        <div class="process-container" id="process-container">
            <!-- Renderizado via JS -->
        </div>

        <div class="catalog-footer text-center" style="margin-top: 50px; display: flex; justify-content: center;">
            <a href="#plans" class="cta-main">
                👉 QUERO COMEÇAR AGORA
            </a>
        </div>
    </section>

    <section class="testimonials reveal" id="testimonials">
        <h2 class="section-title">Quem aprova, recomenda</h2>
        <p class="section-subtitle">Confira o que nossos clientes dizem sobre a experiência exclusiva.</p>

        <div class="testimonials-container" id="testimonials-container">
            <!-- Renderizado via JS -->
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section" id="faq">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Sabemos que você pode ter algumas dúvidas e preocupações sobre o tratamento com Invisalign. Mas não se preocupe, estamos aqui para esclarecer tudo!</p>
        <div class="faq-container" id="faq-container"></div>
        
        <div style="text-align: center; margin-top: 50px;">
            <a href="https://wa.me/<?php echo $driver_phone; ?>?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Invisalign" target="_blank" class="cta-main" style="font-size: 1rem; padding: 15px 30px;">
                <i class="fa-brands fa-whatsapp"></i> Minha dúvida não está aqui
            </a>
        </div>
    </section>

    <!-- CTA FINAL -->
    <section class="final-cta reveal">
        <div class="container text-center">
            <h2 class="final-cta-title">🔥 Agenda limitada para essa semana</h2>
            <p class="final-cta-text">Garanta seu horário antes que as vagas acabem.</p>
            <a href="https://wa.me/<?php echo $driver_phone; ?>?text=Olá! Quero agendar minha avaliação ortodôntica agora!"
                class="cta-main btn-large pulse">
                👉 QUERO AGENDAR MINHA AVALIAÇÃO AGORA
            </a>
            <div class="vagas-counter">Últimos horários disponíveis</div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-container">
            <div class="logo">
                <img src="<?php echo $logo_footer; ?>" alt="Dra. Tallyta Alves Logo" style="max-height: 50px;" loading="lazy">
            </div>
            <p>&copy; 2026 Dra. Tallyta Alves - João Pessoa. Todos os direitos reservados.</p>
            <p style="margin-top: 10px; font-size: 0.85rem; color: #888;">Desenvolvido por <a href="https://sebastiao.dev.br" target="_blank" style="color: var(--brand-gold); text-decoration: none;">sebastiao.dev.br</a></p>
        </div>
    </footer>

    <!-- ✅ Centralized Config -->
    <script src="assets/js/config.js?v=<?php echo time(); ?>"></script>
    <script defer src="assets/js/data.js?v=<?php echo time(); ?>"></script>
    <script defer src="assets/js/app.js?v=<?php echo time(); ?>"></script>
    <script defer src="assets/js/chat-widget.js?v=<?php echo time(); ?>"></script>
    <script async src="//www.instagram.com/embed.js"></script>

    <!-- Redes Sociais Flutuantes -->
    <div class="floating-social">
        <a href="https://www.instagram.com/isaacartte_tattoo/" target="_blank" class="fs-btn fs-instagram" title="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.google.com/search?q=Isaacartte+Tattoo" target="_blank" class="fs-btn fs-google" title="Google Meu Negócio">
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.youtube.com/@Isaacartte" target="_blank" class="fs-btn fs-youtube" title="YouTube">
            <i class="fab fa-youtube"></i>
        </a>
    </div>
</body>
</html>
