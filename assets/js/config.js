/**
 * SITE CONFIGURATION - ISAACARTTE TATTOO
 * Arquivo centralizado de configurações do projeto.
 * Variáveis aqui definidas são lidas tanto pelo JavaScript quanto pelo PHP (via regex).
 */

/**
 * Objeto global de configuração do site.
 * @constant {Object}
 * @property {string} DRIVER_NAME - Nome do profissional (Tatuador).
 * @property {string} DRIVER_PHONE - Número do WhatsApp com DDI e DDD (ex: 558399999999).
 * @property {string} DRIVER_PHOTO - Caminho para a foto do tatuador.
 * @property {string} DRIVER_AVATAR - Caminho para o avatar usado no widget do chat.
 * @property {string} FAVICON - Caminho para o ícone do site.
 * @property {string} LOGO_HEADER - Caminho para o logo usado na barra de navegação.
 * @property {string} LOGO_FOOTER - Caminho para o logo usado no rodapé.
 * @property {string} HERO_BACKGROUND - Imagem de fundo da seção principal (Hero).
 * @property {string} CTA_BACKGROUND - Imagem de fundo da seção de Call To Action (final).
 */
const SITE_CONFIG = {
    DRIVER_NAME: "Dra. Tallyta Alves",
    DRIVER_PHONE: "83987898263",
    DRIVER_PHOTO: "assets/img/motorista/foto-tatuador.webp",
    DRIVER_AVATAR: "assets/img/motorista/foto-tatuador.webp",
    FAVICON: "assets/img/favicon.png",
    LOGO_HEADER: "assets/img/logo.webp",
    LOGO_FOOTER: "assets/img/logo.webp",
    HERO_BACKGROUND: "assets/img/capa.webp",
    HERO_BACKGROUND_MOBILE: "assets/img/capa-mobile.webp",
    CTA_BACKGROUND: "assets/img/capa1.webp",
    CTA_BACKGROUND_MOBILE: "assets/img/capa1-mobile.webp"
};
