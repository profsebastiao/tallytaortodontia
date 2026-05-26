# 📺 Análise Técnica: TuaTelinha - Landing Page de Streaming

Esta documentação fornece uma visão detalhada da arquitetura, funcionalidades e escolhas técnicas do projeto **TuaTelinha**.

---

## 🏗️ 1. Arquitetura do Projeto

O projeto segue o princípio de **Separação de Preocupações (Separation of Concerns - SoC)**, dividindo a aplicação em camadas lógicas distintas para facilitar a manutenção e escalabilidade.

### 📁 Estrutura de Diretórios
- `index.html`: Camada de Estrutura (Esqueleto).
- `assets/css/style.css`: Camada de Apresentação (Design e Responsividade).
- `assets/js/app.js`: Camada de Comportamento (Lógica e Eventos).
- `assets/js/data.js`: Camada de Dados (Configurações de Planos, Catálogo e FAQ).

---

## 🛠️ 2. Stack Tecnológica

Optou-se por uma abordagem **"Vanilla"** (sem frameworks) para garantir performance máxima, carregamento instantâneo e total controle sobre o código.

- **HTML5 Semântico**: Uso de tags como `<nav>`, `<section>`, `<header>` e `<footer>` para melhor SEO e acessibilidade.
- **CSS3 Moderno**: Utilização de Variáveis CSS (Custom Properties), Flexbox e Grid Layout para layouts complexos e responsivos.
- **JavaScript ES6+**: Manipulação do DOM, Template Literals, e Arrow Functions para uma lógica limpa e eficiente.

---

## 🚀 3. Funcionalidades Principais

### 💎 Seleção de Planos Dinâmica
O site apresenta um seletor entre planos **Mensais** e **Anuais**. Ao alternar, o JavaScript lê os dados de `data.js` e reconstrói os cartões de preço instantaneamente sem recarregar a página.

### 🎬 Catálogo de Conteúdo Interativo
O catálogo é dividido por categorias (Canais, Futebol, Filmes, Séries, Novelas). A navegação é feita horizontalmente com setas e via menu de tópicos. As imagens possuem um efeito de *fade* e zoom ao passar o mouse.

### 💬 Checkout via WhatsApp
Em vez de um checkout complexo, o sistema captura o lead através de um **Modal**. Após o preenchimento (Nome, Telefone, Cidade), o usuário é redirecionado para o WhatsApp com uma mensagem pré-formatada contendo todos os detalhes do plano escolhido.

### ❓ FAQ Accordion
Seção de perguntas frequentes com efeito sanfona, permitindo que o usuário tire dúvidas rapidamente sem perder o foco na oferta principal.

---

## 🧠 4. Técnicas Avançadas Implementadas

### ☢️ Controle de Scroll "Nuclear"
Para evitar que o navegador "pule" para seções anteriores ao atualizar (devido a âncoras na URL), foram implementadas três camadas de segurança no `app.js` e `index.html`:
1. `history.scrollRestoration = 'manual'`: Desativa a memória de scroll do browser.
2. `history.replaceState()`: Limpa *hashes* da URL ao carregar.
3. `window.scrollTo(0, 0)`: Garante que o carregamento inicial seja sempre no topo.

### 🖼️ Aspect-Ratio e Object-Fit
Para garantir que o catálogo seja sempre simétrico, independentemente do tamanho original das imagens enviadas no `data.js`, utiliza-se:
- `aspect-ratio: 16 / 9` para forçar o formato de cinema.
- `object-fit: cover` para que a imagem preencha o espaço sem distorcer.

### ⚡ Cache Busting
Arquivos estáticos são carregados com parâmetros de versão (ex: `style.css?v=6`). Isso força o navegador a baixar a versão mais recente sempre que houver uma atualização, evitando problemas de cache antigo no cliente.

---

## 📊 5. Estrutura de Dados (`data.js`)

A lógica de dados foi isolada para que leigos ou administradores possam atualizar preços e catálogos facilmente:

- `planosMensais` / `planosAnuais`: Arrays de objetos contendo nome, preço, período e lista de benefícios.
- `catalogoPorCategoria`: Um objeto onde cada chave é uma categoria e o valor é um array de títulos e URLs de imagens.
- `faqData`: Lista de objetos com perguntas e respostas.

---

## 🎨 6. Identidade Visual (UI/UX)

- **Cores**: Predomínio do preto (`#000`) para simular o ambiente de cinema, com o Roxo HBO (`#673AB7`) como cor de destaque (CTA - Call To Action).
- **Tipografia**: Fonte 'Inter', moderna e de alta legibilidade.
- **Micro-interações**: Botões com *hover* suave, efeitos de transparência (Glassmorphism) e animações de entrada.

---

**Documentação gerada automaticamente em: 2026-03-20**
