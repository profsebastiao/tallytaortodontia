# Progressive Web Apps (PWAs) - Guia Completo

Este projeto utiliza a tecnologia **PWA** para transformar seu site em uma experiência semelhante a um aplicativo nativo.

## O que é uma PWA?
Progressive Web App é uma tecnologia que combina o melhor dos sites e o melhor dos aplicativos. Ele é um site comum que, quando acessado por um navegador moderno, ganha superpoderes.

## Pilares de uma PWA

### 1. Web App Manifest (`manifest.json`)
É um arquivo JSON que diz ao navegador como o seu app deve se comportar quando instalado.
- **Nome e Ícone**: Define como o app aparece na tela do celular.
- **Modo Standalone**: Abre sem a barra de endereços do navegador, parecendo um app real.
- **Cores**: Define a cor da barra de status.

### 2. Service Worker (`sw.js`)
É o "motor" que roda em segundo plano.
- **Offline**: Permite que o site abra mesmo sem internet (usando arquivos salvos no cache).
- **Performance**: Carrega o site instantaneamente ao reutilizar arquivos já baixados.
- **Background Sync**: Permite sincronizar dados quando a internet volta.

### 3. HTTPS (Segurança)
Essencial para o funcionamento. Garante que os dados trafeguem de forma segura entre o usuário e o servidor.

## Benefícios para este Projeto
1. **Instalação Direta**: Seus clientes podem adicionar a barbearia à tela inicial do celular sem precisar ir à App Store ou Google Play.
2. **Engajamento**: Carregamento instantâneo aumenta a retenção dos usuários.
3. **Economia de Dados**: Menos requisições ao servidor, pois os arquivos principais já estão no celular do cliente.

## Como funciona na Barbearia Seu Moreira
- O arquivo `manifest.json` está na raiz do projeto.
- O `sw.js` está localizado em `assets/js/sw.js` (gerenciando o cache da página principal, CSS e scripts).
- A ativação é feita automaticamente no carregamento da página através do `app.js`.

---
*Documentação gerada para o projeto Barbearia Seu Moreira.*
