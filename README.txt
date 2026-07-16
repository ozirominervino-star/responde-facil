# Responde Fácil com Firebase

Esta versão usa Firebase Firestore para sincronizar as mensagens entre computador, iPhone e outros dispositivos.

Arquivos necessários na raiz do GitHub:
- index.html
- manifest.json
- service-worker.js
- README.txt


VERSÃO 14.2
- Recupera primeiro as mensagens da coleção messages
- O tratamento amigo/amiga não bloqueia mais o carregamento
- Mantém todas as mensagens antigas no Firebase


VERSÃO 15 — LOGIN RESTAURADO
- Restaura a tela de usuário e senha do Firebase Authentication.
- Só inicia a leitura da coleção messages após autenticação.
- Preserva todas as mensagens antigas.
- Mantém as regras de segurança atuais.
- Inclui botão Sair e persistência da sessão.
