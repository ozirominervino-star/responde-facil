# Responde Fácil v4 - Imagens no Firestore

Esta versão mantém a coleção Firestore `messages` e salva imagens compactadas diretamente no documento, sem Firebase Storage.

Arquivos necessários na raiz do projeto:
- index.html
- manifest.json
- service-worker.js
- README.txt
- favicon.ico
- pasta icons/ completa

Observação:
- Imagens são convertidas para JPG e compactadas automaticamente.
- PDFs são aceitos apenas até 520 KB, porque o Firestore tem limite de tamanho por documento.
- Depois de publicar, abra com ?v=imagens4 para evitar cache antigo.
