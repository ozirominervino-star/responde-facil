# Responde Fácil com Firebase - versão corrigida v2

Esta versão corrige o travamento em "Enviando anexo 0%".

Principais ajustes:
- Troca do envio resumível por envio simples ao Firebase Storage, que é mais estável para este app.
- Timeout de 45 segundos: o app não fica mais travado indefinidamente.
- Plano B para anexos pequenos: se o Storage falhar, o app oferece salvar o arquivo pequeno no Firestore em modo compatível.
- Service worker atualizado para não interferir em requisições externas.

Arquivos necessários na raiz do GitHub/Vercel:
- index.html
- manifest.json
- service-worker.js
- README.txt
- pasta icons completa

Atenção: para anexos funcionarem no modo ideal, o Firebase Storage precisa estar ativado e com regra permitindo escrita/leitura para este app.

Regra simples para teste, no Firebase Console > Storage > Rules:

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /attachments/{allPaths=**} {
      allow read, write: if true;
    }
  }
}

Essa regra é permissiva para facilitar o uso sem login. Para produção, o ideal é configurar autenticação e regras mais restritas.
