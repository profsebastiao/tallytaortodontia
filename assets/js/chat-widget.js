/**
 * CHAT DE AUTOATENDIMENTO - ISAACARTTE TATTOO / AGORA ADRIANA PODOLOGIA
 * Script 100% JavaScript (Sem Backend) que simula um chat humanizado
 * para captar leads e encaminhá-los prontos para o WhatsApp.
 */

const DRIVER_NAME = SITE_CONFIG.DRIVER_NAME;
const DRIVER_PHONE = SITE_CONFIG.DRIVER_PHONE;
const DRIVER_PHOTO = SITE_CONFIG.DRIVER_PHOTO; // General fallback or logo
const DRIVER_AVATAR = SITE_CONFIG.DRIVER_AVATAR; // Specific chat avatar

const STEPS = {
    nome: 1,
    menu: 2,
    finalizando: 3
};

/**
 * Objeto de estado que armazena os dados preenchidos pelo usuário.
 * Mantém os dados no localStorage para não perder o progresso caso a página recarregue.
 * @type {Object}
 */
const usuario = {
    nome: localStorage.getItem('wa_user_name') || "",
    servico: localStorage.getItem('wa_user_servico') || "",
    origem: localStorage.getItem('wa_user_origem') || "",
    destino: localStorage.getItem('wa_user_destino') || "",
    data: localStorage.getItem('wa_user_data') || "",
    voo: localStorage.getItem('wa_user_voo') || "",
    horas: localStorage.getItem('wa_user_horas') || "",
    desejo: localStorage.getItem('wa_user_desejo') || ""
};

let currentProgress = 1;
let currentState = "saudacao";

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    injectHTML();
    initEventListeners();

    // Mostra balão de pré-engajamento após 3 segundos
    setTimeout(() => {
        const tooltip = document.getElementById('wa-tooltip');
        if (tooltip && !document.getElementById('wa-chat-box').classList.contains('active')) {
            tooltip.style.display = 'block';
        }
    }, 3000);
});

/**
 * Injeta o HTML estrutural do chat na página dinamicamente.
 * @returns {void}
 */
function injectHTML() {
    const widgetHTML = `
        <div class="wa-tooltip" id="wa-tooltip">Estou online, posso ajudar! 👋</div>

        <div class="wa-widget-button" id="wa-open-btn">
            <img src="${DRIVER_AVATAR}" alt="${DRIVER_NAME}">
            <div class="wa-online-indicator"></div>
        </div>

        <div class="wa-chat-container" id="wa-chat-box">
            <div class="wa-chat-header">
                <div class="avatar" style="background-image: url('${DRIVER_AVATAR}')"></div>
                <div class="info">
                    <h4>${DRIVER_NAME}</h4>
                    <span>on line agora</span>
                </div>
                <div class="wa-chat-close" id="wa-close-btn">&times;</div>
            </div>
            <div class="wa-chat-body" id="wa-chat-body">
                <div class="wa-progress" id="wa-progress">ETAPA 1 de 3</div>
                <div class="wa-typing" id="wa-typing">digitando...</div>
            </div>
            <div class="wa-chat-footer">
                <input type="text" class="wa-chat-input" id="wa-input" placeholder="Digite sua mensagem...">
                <button class="wa-send-btn" id="wa-send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
    const container = document.createElement('div');
    container.innerHTML = widgetHTML;
    document.body.appendChild(container);
}

function initEventListeners() {
    const openBtn = document.getElementById('wa-open-btn');
    const closeBtn = document.getElementById('wa-close-btn');
    const chatBox = document.getElementById('wa-chat-box');
    const sendBtn = document.getElementById('wa-send-btn');
    const input = document.getElementById('wa-input');
    const tooltip = document.getElementById('wa-tooltip');

    openBtn.addEventListener('click', () => {
        chatBox.classList.add('active');
        tooltip.style.display = 'none';
        if (currentState === "saudacao") {
            startConversation();
        }
    });

    tooltip.addEventListener('click', () => {
        chatBox.classList.add('active');
        tooltip.style.display = 'none';
        if (currentState === "saudacao") {
            startConversation();
        }
    });

    closeBtn.addEventListener('click', () => {
        chatBox.classList.remove('active');
    });

    sendBtn.addEventListener('click', handleUserInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
    });
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
}

async function startConversation() {
    const greeting = getGreeting();
    updateProgress(1);
    await addBotMessage(`${greeting}! Seja bem-vindo(a) à clínica de Podologia da ${DRIVER_NAME}. ✨`);
    await addBotMessage("Antes de continuarmos, você já é nosso paciente?");
    addOptions([
        { text: "✅ Sim, já sou paciente", value: "cliente_sim" },
        { text: "❌ Não, primeira vez", value: "cliente_nao" }
    ]);
    currentState = "ja_cliente";
}

function handleUserInput() {
    const input = document.getElementById('wa-input');
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = "";
    processState(text);
}

async function handleOptionSelection(value) {
    if (value === "cliente_sim" || value === "cliente_nao" || value === "sim_agendar" || value === "duvida_tratamento") {
        let userText = value;
        if (value === "cliente_sim") userText = "Sim, já sou paciente";
        if (value === "cliente_nao") userText = "Não, seria a primeira vez";
        if (value === "sim_agendar") userText = "Sim, quero agendar!";
        if (value === "duvida_tratamento") userText = "Ainda tenho dúvidas";
        
        addUserMessage(userText);
        processState(value);
        return;
    }

    usuario.servico = value.toUpperCase();
    localStorage.setItem('wa_user_servico', usuario.servico);
    addUserMessage(value);

    switch (value) {
        case "unha_encravada":
        case "pe_diabetico":
        case "limpeza":
            await addBotMessage(`Excelente escolha! Cuidar da saúde dos seus pés é um ótimo passo.`);
            await addBotMessage("Qual é o seu principal objetivo com o tratamento hoje?");
            currentState = "lead_local";
            break;
        case "agendamento":
            await addBotMessage("Entendido! Vou te encaminhar para verificarmos os horários disponíveis na agenda.");
            finalizarFlowCliente("Agendamento");
            break;
        case "orcamento":
            await addBotMessage("Certo! Para te passar valores e condições, precisamos realizar uma avaliação.");
            finalizarFlowCliente("Avaliação e Orçamento");
            break;
        case "outro_assunto":
            await addBotMessage("Sem problemas. Como posso te ajudar hoje?");
            currentState = "outro_desejo";
            break;
    }
}

/**
 * Máquina de estados principal do bot. Processa o input e avança o fluxo.
 * @param {string} input - O texto digitado ou valor do botão clicado pelo usuário.
 * @returns {Promise<void>}
 */
async function processState(input) {
    switch (currentState) {
        case "ja_cliente":
            if (input === "cliente_sim") {
                await addBotMessage("Que prazer ter você de volta! 😊");
                await addBotMessage("Como devo te chamar para verificarmos seu cadastro?");
                currentState = "nome_cliente";
            } else {
                await addBotMessage("Seja muito bem-vindo(a)! Cuidar da saúde dos seus pés é a nossa prioridade. 😁");
                await addBotMessage("Como devo te chamar?");
                currentState = "nome";
            }
            break;

        case "nome_cliente":
            usuario.nome = input;
            localStorage.setItem('wa_user_name', input);
            await addBotMessage(`Olá, ${usuario.nome}! Como podemos ajudar hoje?`);
            addOptions([
                { text: "📅 Agendar Consulta", value: "agendamento" },
                { text: "💰 Dúvidas/Financeiro", value: "orcamento" },
                { text: "❓ Outro Assunto", value: "outro_assunto" }
            ]);
            currentState = "menu_cliente";
            break;

        case "nome":
            usuario.nome = input;
            localStorage.setItem('wa_user_name', input);
            updateProgress(2);
            await addBotMessage(`Prazer, ${usuario.nome}! ✨`);
            await addBotMessage("Nossa clínica é especialista em podologia clínica, unha encravada e pé diabético.");
            await addBotMessage("Qual tratamento você tem mais interesse?");
            addOptions([
                { text: "👣 Unha Encravada", value: "unha_encravada" },
                { text: "🩸 Pé Diabético", value: "pe_diabetico" },
                { text: "✨ Limpeza/Calosidades", value: "limpeza" }
            ]);
            currentState = "menu_vendas";
            break;

        case "lead_local":
            usuario.origem = input;
            localStorage.setItem('wa_user_origem', input);
            await addBotMessage("Perfeito!");
            await addBotMessage("Você gostaria de agendar uma avaliação para analisarmos o seu caso de perto?");
            addOptions([
                { text: "✨ Sim, quero agendar!", value: "sim_agendar" },
                { text: "🤔 Quero saber mais", value: "duvida_tratamento" }
            ]);
            currentState = "lead_preocupacao";
            break;

        case "lead_preocupacao":
            usuario.desejo = input;
            localStorage.setItem('wa_user_desejo', input);
            
            if (input.toLowerCase().includes("saber") || input.toLowerCase().includes("dúvida") || input.toLowerCase().includes("duvida") || input.toLowerCase().includes("mais")) {
                await addBotMessage("Sem problemas! Ao falarmos no WhatsApp, vou te explicar tudo sobre nossos tratamentos e como podemos te ajudar.");
            } else {
                await addBotMessage("Ótimo! No próximo passo já vamos abrir o WhatsApp para escolhermos o melhor horário para a sua avaliação.");
            }
            
            finalizarFlow();
            break;

        case "outro_desejo":
            usuario.desejo = input;
            localStorage.setItem('wa_user_desejo', input);
            if (usuario.nome) {
                finalizarFlowCliente(input);
            } else {
                finalizarFlow();
            }
            break;
    }
}

async function finalizarFlow() {
    updateProgress(3);
    await addBotMessage("Perfeito! Preparei tudo para o seu atendimento.");

    let resumo = `👤 Nome: ${usuario.nome}\n👣 Interesse: ${usuario.servico}\n🎯 Objetivo: ${usuario.origem}\n💡 Obs: ${usuario.desejo}`;

    await addBotMessage("Clique no botão abaixo para falarmos pelo WhatsApp e agendarmos sua visita! 👇");

    const mensagemWhats = `✨ [ATENDIMENTO] Adriana Podologia\n\n${resumo}\n\nOlá! Gostaria de agendar minha avaliação.`;
    const link = `https://wa.me/${DRIVER_PHONE}?text=${encodeURIComponent(mensagemWhats)}`;

    addOptions([
        { text: "🚀 FALAR NO WHATSAPP", value: "whatsapp", link: link }
    ]);
    currentState = "finalizado";
}

async function finalizarFlowCliente(setor) {
    updateProgress(3);
    await addBotMessage(`Perfeito! Clique abaixo para falar sobre **${setor}**.`);

    const mensagemWhats = `👋 Olá! Sou ${usuario.nome} e preciso tratar sobre: ${setor}`;
    const link = `https://wa.me/${DRIVER_PHONE}?text=${encodeURIComponent(mensagemWhats)}`;

    addOptions([
        { text: "💬 CONTINUAR NO WHATSAPP", value: "whatsapp", link: link }
    ]);
    currentState = "finalizado";
}

function updateProgress(step) {
    const progressEl = document.getElementById('wa-progress');
    if (progressEl) {
        progressEl.innerText = `ETAPA ${step} de 3`;
    }
}

// UI Helpers
function addBotMessage(text) {
    return new Promise(resolve => {
        const typing = document.getElementById('wa-typing');
        typing.style.display = 'block';
        scrollToBottom();

        // Delay aleatório para parecer mais humano
        const delay = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        setTimeout(() => {
            typing.style.display = 'none';
            const chatBody = document.getElementById('wa-chat-body');
            const msgDiv = document.createElement('div');
            msgDiv.className = 'msg-bubble msg-bot';

            // Usar textContent para o texto principal (segurança contra XSS)
            const textSpan = document.createElement('span');
            textSpan.innerHTML = text; // Bot messages might contain HTML like <br>
            msgDiv.appendChild(textSpan);

            const timeSpan = document.createElement('span');
            timeSpan.className = 'msg-time';
            timeSpan.innerText = getCurrentTime();
            msgDiv.appendChild(timeSpan);

            chatBody.appendChild(msgDiv);
            scrollToBottom();
            setTimeout(resolve, 300);
        }, delay);
    });
}

function addUserMessage(text) {
    const chatBody = document.getElementById('wa-chat-body');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'msg-bubble msg-user';

    // Usar textContent para o texto do usuário (Segurança CRÍTICA contra XSS)
    const textNode = document.createTextNode(text);
    msgDiv.appendChild(textNode);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'msg-time';
    timeSpan.innerText = getCurrentTime();
    msgDiv.appendChild(timeSpan);

    chatBody.appendChild(msgDiv);
    scrollToBottom();
}

function addOptions(options) {
    const chatBody = document.getElementById('wa-chat-body');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'wa-chat-options';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'wa-option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => {
            if (opt.link) {
                window.open(opt.link, '_blank');
            } else {
                handleOptionSelection(opt.value);
                optionsDiv.remove();
            }
        };
        optionsDiv.appendChild(btn);
    });

    chatBody.appendChild(optionsDiv);
    scrollToBottom();
}

function scrollToBottom() {
    const chatBody = document.getElementById('wa-chat-body');
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
}
