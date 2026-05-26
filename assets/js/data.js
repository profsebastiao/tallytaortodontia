// ==========================================
// 1. DADOS DOS SERVIÇOS (INVISALIGN E ORTODONTIA)
// ==========================================
const servicosData = [
    {
        nome: "Avaliação Digital Invisalign®",
        preco: "", 
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-corte", 
        provaSocial: "⭐⭐⭐⭐⭐ <span>Diagnóstico 100% digital</span>",
        urgency: "Primeiro passo para transformar seu sorriso.",
        beneficio: "Escaneamento 3D sem moldes",
        vagas: 5,
        itens: [
            "Escaneamento intraoral 3D",
            "Simulação digital do sorriso",
            "Planejamento personalizado",
            "Tempo estimado de tratamento",
            "Orientação completa sobre Invisalign"
        ]
    },
    {
        nome: "Invisalign®",
        preco: "",
        periodo: "",
        featured: true,
        btnTexto: "Quero Alinhar Meu Sorriso",
        imagemRef: "bg-combo",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Conforto e discrição</span>",
        urgency: "Alinhe seus dentes com tecnologia de ponta.",
        beneficio: "MAIS PROCURADO 🔥",
        vagas: 2,
        itens: [
            "Alinhadores praticamente invisíveis",
            "Mais conforto que aparelhos convencionais",
            "Liberdade para comer normalmente",
            "Menos consultas presenciais",
            "Higiene bucal facilitada",
            "Planejamento digital completo"
        ]
    },
    {
        nome: "Clareamento Dental",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Consulta",
        imagemRef: "bg-barba",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Sorriso iluminado</span>",
        urgency: "Mais brilho e confiança para o seu sorriso.",
        beneficio: "Estética avançada",
        vagas: 3,
        itens: [
            "Resultados rápidos",
            "Procedimento seguro",
            "Acompanhamento profissional",
            "Opções personalizadas",
            "Aparência mais jovem e saudável"
        ]
    },
    {
        nome: "Lentes de Contato Dental",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-lentes",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Harmonia perfeita</span>",
        urgency: "O sorriso das estrelas, feito sob medida.",
        beneficio: "Estética de Alta Performance",
        vagas: 2,
        itens: [
            "Lentes ultrafinas em porcelana",
            "Preservação da estrutura natural",
            "Planejamento digital do formato e cor",
            "Resultados imediatos e duradouros",
            "Alta resistência a manchas"
        ]
    },
    {
        nome: "Limpeza Premium",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Limpeza",
        imagemRef: "bg-barba",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Cuidado completo</span>",
        urgency: "Sua saúde bucal em primeiro lugar.",
        beneficio: "Prevenção Avançada",
        vagas: 4,
        itens: [
            "Profilaxia completa",
            "Remoção de tártaro e placa",
            "Aplicação de flúor",
            "Polimento coronário",
            "Instruções personalizadas de higiene"
        ]
    },
    {
        nome: "Ortodontia Preventiva",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-corte",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Prevenção infantil</span>",
        urgency: "Sorriso perfeito começa cedo.",
        beneficio: "Cuidado Odontopediátrico",
        vagas: 3,
        itens: [
            "Acompanhamento do crescimento facial",
            "Correção de hábitos nocivos",
            "Intervenção precoce em crianças",
            "Prevenção de problemas severos",
            "Consultas lúdicas e sem trauma"
        ]
    }
];

// ==========================================
// 2. DADOS DO PROCESSO (COMO FUNCIONA)
// ==========================================
const processoData = [
    {
        titulo: "Fale no WhatsApp",
        icone: "fa-brands fa-whatsapp",
        descricao: "Tire suas dúvidas e agende o melhor horário para sua visita."
    },
    {
        titulo: "Avaliação e Escaneamento",
        icone: "fa-solid fa-tooth",
        descricao: "Fazemos um escaneamento 3D do seu sorriso sem o uso de moldes desconfortáveis."
    },
    {
        titulo: "Planejamento Digital",
        icone: "fa-solid fa-laptop-medical",
        descricao: "A Dra. Tallyta planeja virtualmente cada movimento dos seus dentes."
    },
    {
        titulo: "Início do Tratamento",
        icone: "fa-solid fa-face-smile",
        descricao: "Você recebe seus primeiros alinhadores e já começa a ver a mágica acontecer."
    }
];

// ==========================================
// 3. DADOS DAS PERGUNTAS FREQUENTES (FAQ)
// ==========================================
const faqData = [
    {
        pergunta: "O tratamento com Invisalign é muito caro?",
        icone: "fa-solid fa-money-bill-wave",
        resposta: "Você pode estar pensando que o Invisalign é muito caro. Mas pense no investimento a longo prazo, tanto em termos de saúde bucal quanto de autoestima. Além disso, o custo é comparável aos aparelhos tradicionais e os benefícios exclusivos do Invisalign valem cada centavo."
    },
    {
        pergunta: "Vou terminar o tratamento mais rápido?",
        icone: "fa-regular fa-clock",
        resposta: "Nós entendemos que você quer ter o sorriso perfeito o mais rápido possível. E com o Invisalign, isso é possível! Em muitos casos, o tratamento é mais rápido e eficiente do que os métodos tradicionais."
    },
    {
        pergunta: "O Invisalign realmente funciona para o meu caso?",
        icone: "fa-solid fa-check-circle",
        resposta: "Você pode estar se perguntando se o Invisalign vai funcionar para você. Mas fique tranquilo, cada alinhador é customizado para atender às suas necessidades específicas. Além disso, temos diversos estudos de caso e depoimentos de pacientes satisfeitos para comprovar a eficácia do tratamento."
    },
    {
        pergunta: "Vou sentir dor ou desconforto?",
        icone: "fa-regular fa-face-smile",
        resposta: "Se você tem medo de que o tratamento com Invisalign seja doloroso, pode ficar tranquilo. O material utilizado é confortável e em geral, causa menos dor e desconforto do que os aparelhos de metal."
    },
    {
        pergunta: "É difícil de limpar e manter?",
        icone: "fa-solid fa-tooth",
        resposta: "O Invisalign é muito prático e fácil de cuidar. Você pode remover os alinhadores para comer e realizar a higiene bucal, tornando o tratamento muito mais simples do que os aparelhos fixos."
    },
    {
        pergunta: "Vou ter dificuldade para falar?",
        icone: "fa-regular fa-comments",
        resposta: "Muitas pessoas têm receio de que o Invisalign altere a forma como falam. Mas fique tranquilo, qualquer impacto na fala é temporário e geralmente se ajusta dentro de poucos dias. Além disso, o Invisalign é mais discreto do que os aparelhos tradicionais, minimizando qualquer mudança na fala."
    }
];

// ==========================================
// 4. DADOS DOS DEPOIMENTOS (PROVA SOCIAL)
// ==========================================
const testimonialsData = [
    {
        nome: "Ricardo Santos",
        cidade: "João Pessoa - PB",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "Tratamento impecável! Usar Invisalign mudou minha vida, não senti dores e as pessoas quase não notam que estou de aparelho."
    },
    {
        nome: "Juliana Lima",
        cidade: "João Pessoa - PB",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "A Dra. Tallyta é maravilhosa. O escaneamento 3D me deixou fascinada, consegui ver como meu sorriso ficaria no final antes mesmo de começar."
    },
    {
        nome: "Marcos Oliveira",
        cidade: "Cabedelo - PB",
        foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "Profissionalismo de verdade. Sempre tive vergonha de colocar aparelho metálico, o Invisalign foi a solução perfeita para mim."
    }
];

// ==========================================
// 5. DADOS DO PORTFÓLIO (GALERIA)
// ==========================================
const portfolioData = {
    categories: [
        { id: "all", label: "Todos" },
        { id: "invisalign", label: "Resultados Invisalign" },
        { id: "clinica", label: "A Clínica" },
        { id: "tecnologia", label: "Tecnologia 3D" }
    ],
    items: [
        { category: "clinica", title: "A Clínica", img: "assets/img/Passeios/A Clínica/Captura de tela 2026-05-25 181710.png" },
        { category: "clinica", title: "A Clínica", img: "assets/img/Passeios/A Clínica/Captura de tela 2026-05-25 181718.png" },
        { category: "clinica", title: "A Clínica", img: "assets/img/Passeios/A Clínica/Captura de tela 2026-05-25 181725.png" },
        { category: "clinica", title: "A Clínica", img: "assets/img/Passeios/A Clínica/Captura de tela 2026-05-25 181731.png" },
        
        { category: "invisalign", title: "Resultado Invisalign", img: "assets/img/Passeios/Resultados Invisalign/Captura de tela 2026-05-25 181710.png" },
        { category: "invisalign", title: "Resultado Invisalign", img: "assets/img/Passeios/Resultados Invisalign/Captura de tela 2026-05-25 181718.png" },
        { category: "invisalign", title: "Resultado Invisalign", img: "assets/img/Passeios/Resultados Invisalign/Captura de tela 2026-05-25 181725.png" },
        { category: "invisalign", title: "Resultado Invisalign", img: "assets/img/Passeios/Resultados Invisalign/Captura de tela 2026-05-25 181731.png" },

        { category: "tecnologia", title: "Tecnologia 3D", img: "assets/img/Passeios/Tecnologia 3D/Captura de tela 2026-05-25 181710.png" },
        { category: "tecnologia", title: "Tecnologia 3D", img: "assets/img/Passeios/Tecnologia 3D/Captura de tela 2026-05-25 181718.png" },
        { category: "tecnologia", title: "Tecnologia 3D", img: "assets/img/Passeios/Tecnologia 3D/Captura de tela 2026-05-25 181725.png" },
        { category: "tecnologia", title: "Tecnologia 3D", img: "assets/img/Passeios/Tecnologia 3D/Captura de tela 2026-05-25 181731.png" }
    ]
};