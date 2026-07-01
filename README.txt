# Responde Fácil v8 — Backup, lixeira, histórico, perfis e favoritos

Esta versão mantém login, usuários e permissões da v7 e acrescenta as melhorias 1 a 6 solicitadas:

1. Backup completo
- Botão Backup exporta mensagens, usuários/permissões e histórico.
- Administrador também tem botão de restauração de backup na área Usuários.

2. Histórico de alterações
- Cria registros em auditLogs para criação, edição, lixeira, restauração, exclusão definitiva, usuários e restauração de backup.

3. Lixeira
- Excluir mensagem agora move para a lixeira.
- Administrador pode restaurar ou excluir definitivamente.

4. Anexos/imagens
- Mantém compactação automática de imagens no Firestore.
- Mostra prévia antes de salvar.
- Permite substituir ou remover imagem/anexo existente.
- PDF continua limitado para evitar travamento.

5. Perfis prontos
- Atendimento: ver e copiar.
- Supervisor: ver, cadastrar, editar e exportar.
- Marketing: ver, cadastrar, editar e exportar.
- Administrador: acesso total.
- Personalizado: permissões manuais.

6. Favoritos e mais usadas
- Botão estrela nas mensagens.
- Filtros: Favoritas, Mais usadas e Últimas usadas.

Importante para publicar:
1. Suba todos os arquivos e a pasta icons no Vercel/GitHub.
2. No Firebase > Firestore Database > Rules, publique o conteúdo de firestore-rules.txt.
3. Abra o app com ?v=v8 para limpar cache, por exemplo:
   https://responde-facil.vercel.app/?v=v8

Observação:
A restauração recupera mensagens e perfis/permissões do Firestore. Ela não cria senhas no Firebase Authentication.


Versão v8.1: correção de login parado, mensagens de diagnóstico e timeout no Firebase.
