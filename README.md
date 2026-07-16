# Responde Fácil PRO v1.1

## Publicação

Envie todos os arquivos e pastas deste pacote para a raiz do repositório GitHub usado pelo Vercel.

Estrutura obrigatória:

- index.html
- manifest.json
- service-worker.js
- css/styles.css
- js/app.js
- icons/

A versão usa o mesmo projeto Firebase e a mesma coleção `messages`. As mensagens existentes não são migradas nem apagadas.

## Observação sobre tratamento

A correção manual de `meu amigo`/`minha amiga` é memorizada no navegador do dispositivo. Isso evita criar uma nova coleção que não esteja contemplada nas regras atuais do Firestore.
