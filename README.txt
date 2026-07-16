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

- Exibição da versão 1.2 na tela inicial.


VERSÃO 1.3 PRO
- Identidade visual verde, grafite e dourado.
- Dashboard com mensagens, favoritas, utilizações e categorias.
- Tags por mensagem.
- Busca em título, categoria, texto, tags e nome do anexo.
- Atalhos Todas, Favoritas e Mais usadas.
- Tela Sobre.
- Verificação simples de versão.
- Login, Firebase, favoritos e mensagens antigas preservados.


VERSÃO 1.4 PRO
- Backup com metadados e data de exportação.
- Restauração de backup por mesclagem.
- Botão para duplicar mensagens.
- Sugestões automáticas de tags por palavras-chave.
- Dashboard ampliado: mensagens recentes, mais usada e categoria principal.
- Refinamentos visuais e notificações.
- Login, Firebase, mensagens antigas, anexos e favoritos preservados.


VERSÃO 1.5 — CLIENTES E TEMAS
- Cadastro simples de clientes.
- Empresa/Haras vinculado ao cliente.
- Temas vinculados ao cliente.
- Ao selecionar o cliente, seus temas aparecem primeiro.
- Clicar em um tema aplica o tema na busca de mensagens.
- Usa a coleção messages já autorizada pelas regras atuais.
- Não exige alteração nas regras do Firebase.
- Login, mensagens, favoritos, backup e demais recursos preservados.


VERSÃO 1.6 — FLUXO GUIADO
- Tela principal organizada em quatro passos:
  1. Cliente
  2. Assunto
  3. Resposta
  4. Copiar
- Ferramentas avançadas recolhidas.
- Cadastro de mensagens, clientes, estatísticas e backup em abas secundárias.
- Nome e tratamento preenchidos automaticamente ao selecionar o cliente.
- Assuntos do cliente exibidos primeiro.
- Respostas filtradas pelo assunto.
- Login, Firebase, mensagens antigas, favoritos e backups preservados.


VERSÃO 1.6.1 — CORREÇÃO DE LOGIN
- Corrigido travamento na tela de usuário.
- Restaurados controles ocultos exigidos pelo tratamento inteligente.
- Login, Firebase, mensagens, clientes e fluxo guiado preservados.


VERSÃO 1.6.2 — EDIÇÃO CORRIGIDA
- Novo botão "Editar resposta" na área de prévia.
- A mensagem selecionada é carregada automaticamente no formulário.
- A aba Mensagens é aberta automaticamente.
- Após salvar, a alteração continua sincronizada no Firebase.
