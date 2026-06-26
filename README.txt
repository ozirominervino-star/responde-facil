# Responde Fácil - versão v3 restauração

Esta versão prioriza restaurar a visualização dos registros existentes e evitar o travamento em "Enviando anexo 0%".

O que mudou:
- Voltou a usar somente Firestore na coleção "messages".
- Removeu Firebase Storage do app para evitar travamento no upload.
- Mostra no topo quantas respostas foram carregadas.
- Não intercepta Firebase no service-worker.
- Compacta imagens automaticamente antes de salvar.
- PDFs precisam ter até aproximadamente 520 KB nesta versão.

Arquivos necessários na raiz do projeto:
- index.html
- manifest.json
- service-worker.js
- README.txt
- favicon.ico
- pasta icons completa
