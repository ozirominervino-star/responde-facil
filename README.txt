# Responde Fácil - versão inicial de testes

## Como testar no Windows
1. Extraia o arquivo ZIP.
2. Abra o arquivo `index.html` no Google Chrome ou Edge.
3. Para deixar como app:
   - No Chrome/Edge, clique nos três pontinhos.
   - Procure por "Instalar app" ou "Apps > Instalar este site como aplicativo".
   - Ele ficará como um aplicativo no Windows.

## Como testar no iPhone
Para instalar como app na tela inicial, o ideal é subir essa pasta em um link HTTPS.
Depois:
1. Abra o link no Safari do iPhone.
2. Toque em compartilhar.
3. Toque em "Adicionar à Tela de Início".

Observação:
Abrir o arquivo diretamente no iPhone pode funcionar para visualizar, mas para instalar como app/PWA normalmente precisa estar hospedado em um link HTTPS.

## O que já funciona
- Mensagens prontas
- Busca
- Saudação automática por horário
- Campo de nome do cliente
- Copiar resposta
- Cadastrar mensagem
- Editar mensagem
- Apagar mensagem
- Salvar no navegador usando localStorage

## Importante
Nesta versão, os dados ficam salvos no navegador/dispositivo.
Ainda não sincroniza automaticamente entre Windows e iPhone.
