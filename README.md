

# 📺 TuaTelinha - Landing Page de Streaming Premium

Landing Page de alta conversão desenvolvida para o serviço de streaming e IPTV **TuaTelinha**. O projeto foi construído com foco em performance, experiência do usuário (UX) inspirada em grandes players (como HBO Max e Netflix) e conversão direta via WhatsApp.

---

## 🚀 Funcionalidades Principais

* **Seção de Planos Dinâmica:** Toggle (interruptor) suave que alterna entre planos Mensais e Anuais, destacando descontos.
* **Catálogo Interativo:** Navegação horizontal por categorias (Canais, Futebol, Filmes, Séries, Novelas) com renderização dinâmica de conteúdo.
* **FAQ Sanfona (Accordion):** Seção de perguntas frequentes com animação de expansão e links diretos para o suporte.
* **Checkout via WhatsApp (Modal):** Formulário de captura de leads (Nome, Telefone, Cidade) que redireciona o usuário para o WhatsApp com uma mensagem pré-formatada contendo o plano escolhido.
* **Forçar Topo (Scroll Control):** Script customizado que impede o navegador de "lembrar" a rolagem antiga, forçando a página a sempre carregar na capa principal.

---

## 🛠️ Tecnologias e Linguagens Utilizadas

Este projeto foi construído **sem o uso de frameworks pesados** (como React ou Vue) para garantir o carregamento ultrarrápido (Fast Load), utilizando apenas:

* **HTML5:** Estruturação semântica.
* **CSS3:** Estilização, variáveis de cor, Grid Layout, Flexbox e animações puras.
* **Vanilla JavaScript (ES6+):** Lógica de negócios, manipulação do DOM e injeção de dados sem dependências de bibliotecas externas.

---

## 🧠 Métodos e Técnicas Aplicadas

Para resolver problemas comuns de navegadores e otimizar a manutenção, as seguintes técnicas avançadas foram implementadas:

### 1. Separação de Preocupações (Separation of Concerns - SoC)
A arquitetura do projeto divide claramente a estrutura, o design, a lógica e o banco de dados:
* `index.html`: Apenas a "casca" (esqueleto) do site.
* `style.css`: Toda a camada de apresentação.
* `app.js`: O "cérebro" (eventos, cliques, lógica).
* `data.js`: O "banco de dados" (arrays e objetos com os preços, links de imagens e textos do FAQ).

### 2. Renderização Dinâmica (DOM Manipulation)
Em vez de escrever dezenas de imagens e planos no HTML, usamos JavaScript (`document.createElement` e *Template Literals*) para ler os arrays do arquivo `data.js` e injetar o código HTML na tela. Isso facilita a atualização do catálogo no futuro sem tocar no HTML.

### 3. Cache Busting (Quebra de Cache)
Uso de *Query Strings* nos arquivos estáticos (`style.css?v=5`, `app.js?v=5`). 
* **Por que?** Impede que o navegador do cliente carregue versões antigas do site, forçando o download imediato das atualizações visuais e lógicas.

### 4. Controle de Scroll "Nuclear"
Resolução do problema crônico de navegadores modernos (Chrome/Safari) que tentam restaurar a posição de rolagem (Anchor Jumps):
* Uso de `history.scrollRestoration = 'manual'` para desativar a memória do navegador.
* Uso de `history.replaceState` para limpar *hashbangs* (`#plans`) da URL silenciosamente.
* Aplicação atrasada de `scroll-behavior: smooth` via `setTimeout` para garantir que o *smooth scroll* só funcione para o usuário, não atrapalhando o carregamento inicial no topo da página.

### 5. Padronização Visual Estrita (Aspect-Ratio)
* Uso da propriedade CSS `aspect-ratio: 16 / 9` combinada com `object-fit: cover`.
* **Resultado:** Independentemente do tamanho ou formato original da imagem cadastrada no `data.js`, todas as capas do catálogo são renderizadas em formato idêntico de cinema, garantindo um layout perfeito e simétrico.

### 6. Integração com API do WhatsApp (Deep Linking)
* Uso de `encodeURIComponent()` no JavaScript para transformar os dados do formulário e o plano escolhido em uma URL válida (`wa.me`).
* Transição fluida (Modal escuro com `backdrop-filter: blur`) que retém o usuário na página até a submissão dos dados.

---

## 📁 Estrutura de Diretórios

```text

lp/
│
├── index.html              # O esqueleto (Arquivo principal em HTML)
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilização global, variáveis e Media Queries (Responsividade)
│   │   
│   │
│   ├── js/
│   │   ├── data.js         # Arrays e Objetos de configuração (Planos, Catálogo, FAQ)
│   │   └── app.js          # Lógica de renderização, controle de scroll e envio de form
│   │
│   └── img/
│       ├── background.jpg  # Imagem do Hero( opcional)
│       └── favicon.ico     # Ícone do site (opcional)
│
└── README.md               # Documentação para você não esquecer como rodar