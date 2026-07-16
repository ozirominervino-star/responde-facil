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


VERSÃO 15.1
- Alteração segura sobre a versão estável com login.
- {tratamento} agora gera "meu amigo" ou "minha amiga".
- Mantém a coleção messages, autenticação e mensagens antigas.
- Mantém compatibilidade com tratamentos já memorizados como amigo/amiga.


VERSÃO 1.2 — ETAPA 1: FAVORITOS
- Estrela em cada mensagem.
- Favoritas aparecem no topo.
- Filtro "Somente favoritas".
- Favorito salvo no Firebase e sincronizado entre dispositivos.
- Login, mensagens antigas e regras existentes preservados.
