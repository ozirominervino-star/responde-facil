# Responde Fácil v6 — Login, usuários e senha

Esta versão mantém as mensagens no Firebase Firestore e inclui:

- Login com usuário ou e-mail.
  - Exemplo: digitar `oziro.teste` equivale a `oziro.teste@winnerhorse.com.br`.
- Administrador principal: oziro@winnerhorse.com.br.
- Cadastro de usuários e permissões pelo administrador.
- Alteração da própria senha pelo botão "Minha senha".
- Redefinição de senha de usuários pelo administrador, via e-mail do Firebase.
- Usuários que existem no Firebase Auth, mas ainda não têm perfil no Firestore, passam a aparecer como bloqueados/pendentes após tentarem entrar uma vez. O administrador pode ativar e definir permissões.

Importante:
1. Ative Authentication > Sign-in method > Email/Password no Firebase.
2. Publique as regras do arquivo firestore-rules.txt no Firestore Database > Rules.
3. Faça deploy de todos os arquivos e da pasta icons.
4. Após publicar no Vercel, abra com ?v=senha6 para limpar cache.

Observação sobre senha:
Por segurança, o Firebase não permite que um app web simples veja ou defina diretamente a senha de outro usuário. Por isso, o administrador envia um link de redefinição de senha para o usuário.


V7 - Inclui opção de excluir usuário na área administrativa.
Observação: a exclusão remove o perfil/permissões do Firestore; para apagar o login definitivamente, remova também em Firebase Authentication > Users.
