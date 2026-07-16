// ==========================================
// 1. DADOS DOS SERVIÇOS (PODOLOGIA)
// ==========================================
const servicosData = [
    {
        nome: "Avaliação Podológica Completa",
        preco: "", 
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-corte", 
        provaSocial: "⭐⭐⭐⭐⭐ <span>Diagnóstico completo</span>",
        urgency: "O primeiro passo para pés mais saudáveis.",
        beneficio: "Diagnóstico completo",
        vagas: 5,
        itens: [
            "Análise da pisada",
            "Histórico de saúde",
            "Plano de tratamento personalizado"
        ]
    },
    {
        nome: "Tratamento de Unha Encravada",
        preco: "",
        periodo: "",
        featured: true,
        btnTexto: "Agendar Tratamento",
        imagemRef: "bg-combo",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Alívio imediato</span>",
        urgency: "Tratamento especializado sem sofrimento.",
        beneficio: "MAIS PROCURADO 🔥",
        vagas: 2,
        itens: [
            "Técnica indolor",
            "Prevenção de recidiva",
            "Orientação de cuidados"
        ]
    },
    {
        nome: "Cuidados com Pé Diabético",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-barba",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Atenção redobrada</span>",
        urgency: "Prevenção e segurança para o seu dia a dia.",
        beneficio: "Especialidade avançada",
        vagas: 3,
        itens: [
            "Avaliação de sensibilidade",
            "Prevenção de feridas",
            "Acompanhamento contínuo"
        ]
    },
    {
        nome: "Remoção de Calosidades",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Tratamento",
        imagemRef: "bg-lentes",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Conforto ao pisar</span>",
        urgency: "Pés macios e livres de dores.",
        beneficio: "Alívio imediato",
        vagas: 2,
        itens: [
            "Alívio imediato da dor",
            "Tratamento da causa",
            "Hidratação especializada"
        ]
    },
    {
        nome: "Tratamento de Micose de Unha",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Avaliação",
        imagemRef: "bg-barba",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Unha renovada</span>",
        urgency: "Recupere a saúde e a estética das suas unhas.",
        beneficio: "Cuidado completo",
        vagas: 4,
        itens: [
            "Diagnóstico preciso",
            "Tratamento tópico",
            "Acompanhamento de evolução"
        ]
    },
    {
        nome: "Limpeza e Prevenção Podológica",
        preco: "",
        periodo: "",
        featured: false,
        btnTexto: "Agendar Limpeza",
        imagemRef: "bg-corte",
        provaSocial: "⭐⭐⭐⭐⭐ <span>Pés higienizados</span>",
        urgency: "Manutenção essencial para a saúde.",
        beneficio: "Cuidado Preventivo",
        vagas: 3,
        itens: [
            "Higienização profissional",
            "Prevenção de fungos",
            "Orientação de autocuidado"
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
        descricao: "Tire suas dúvidas e agende o melhor horário."
    },
    {
        titulo: "Avaliação Completa",
        icone: "fa-solid fa-magnifying-glass",
        descricao: "Analisamos seu caso com atenção aos detalhes."
    },
    {
        titulo: "Plano de Tratamento",
        icone: "fa-solid fa-file-medical",
        descricao: "Definimos juntos o cuidado ideal para você."
    },
    {
        titulo: "Início do Cuidado",
        icone: "fa-solid fa-face-smile",
        descricao: "Você começa a sentir a diferença já nas primeiras sessões."
    }
];

// ==========================================
// 3. DADOS DAS PERGUNTAS FREQUENTES (FAQ)
// ==========================================
const faqData = [
    {
        pergunta: "O tratamento de unha encravada dói?",
        icone: "fa-solid fa-check-circle",
        resposta: "Nós utilizamos técnicas atualizadas e foco total no conforto do paciente. Na grande maioria das vezes, o alívio imediato da dor após o procedimento é muito maior do que qualquer desconforto durante."
    },
    {
        pergunta: "Pé diabético precisa de acompanhamento frequente?",
        icone: "fa-regular fa-clock",
        resposta: "Sim. A prevenção é a chave. Devido à perda de sensibilidade, é necessário acompanhamento constante para evitar o aparecimento de feridas graves."
    },
    {
        pergunta: "Quanto tempo dura uma consulta?",
        icone: "fa-regular fa-clock",
        resposta: "O atendimento é individualizado e sem pressa. Geralmente uma sessão de avaliação ou procedimento base leva em média de 45 a 60 minutos."
    },
    {
        pergunta: "Vocês atendem casos de unha encravada infeccionada?",
        icone: "fa-solid fa-notes-medical",
        resposta: "Sim, realizamos o tratamento podológico adequado para aliviar a inflamação e remover a espícula que está causando a infecção, mas sempre respeitando os limites da nossa atuação clínica."
    },
    {
        pergunta: "Preciso de retorno após o tratamento?",
        icone: "fa-solid fa-calendar-check",
        resposta: "Dependendo do procedimento (como unha encravada mais severa ou tratamentos de micose), recomendamos retornos periódicos para garantir a eficácia total."
    },
    {
        pergunta: "Atendem crianças/idosos?",
        icone: "fa-solid fa-users",
        resposta: "Com certeza! Temos o cuidado e a paciência necessários para atender desde os pequenos até o público da terceira idade com total segurança."
    }
];

// ==========================================
// 4. DADOS DOS DEPOIMENTOS (PROVA SOCIAL)
// ==========================================
const testimonialsData = [
    {
        nome: "Maria S.",
        cidade: "João Pessoa - PB",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "Sofria muito com unha encravada e tinha pavor de mexer. A Adriana é um anjo, resolveu tudo com muita paciência e quase nenhuma dor. Recomendo de olhos fechados!"
    },
    {
        nome: "João M.",
        cidade: "João Pessoa - PB",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "Tenho diabetes e sempre me preocupo. O ambiente é super limpo e a avaliação dela foi muito cuidadosa. Me sinto seguro fazendo os pés lá."
    },
    {
        nome: "Ana L.",
        cidade: "Cabedelo - PB",
        foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        avaliacao: 5,
        texto: "Excelente profissional! Cheguei com uma calosidade terrível e saí pisando nas nuvens. Atendimento perfeito."
    }
];

// ==========================================
// 5. DADOS DO PORTFÓLIO (GALERIA)
// ==========================================
const portfolioData = {
    categories: [
        { id: "all", label: "Todos" },
        { id: "resultado", label: "Antes e Depois" },
        { id: "clinica", label: "A Clínica" },
        { id: "pediabetico", label: "Casos de Pé Diabético" }
    ],
    items: [
        { category: "clinica", title: "A Clínica", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop" },
        { category: "clinica", title: "A Clínica", img: "https://images.unsplash.com/photo-1551076805-e166946c9eb9?w=500&auto=format&fit=crop" },
        { category: "resultado", title: "Resultado", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop" },
        { category: "resultado", title: "Resultado", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop" },
        { category: "pediabetico", title: "Cuidados Pé Diabético", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop" }
    ]
};