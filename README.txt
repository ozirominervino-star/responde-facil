Responde Fácil v5 - Login, usuários e permissões

Novidades:
- Login com e-mail e senha pelo Firebase Authentication.
- Administrador principal: oziro@winnerhorse.com.br.
- Área de administração para criar usuários e definir permissões.
- Imagens continuam sendo compactadas e salvas no Firestore, sem Firebase Storage.
- As mensagens continuam na coleção messages.

Antes de testar:
1. No Firebase Console, vá em Authentication > Sign-in method.
2. Ative Email/Password.
3. No Firestore Database > Rules, cole as regras do arquivo firestore-rules.txt e publique.
4. Publique esta pasta no Vercel.
5. Abra o app com ?v=login5 para evitar cache antigo.

Primeiro acesso:
1. Na tela de login, informe oziro@winnerhorse.com.br.
2. Digite a senha inicial desejada, com no mínimo 6 caracteres.
3. Clique em Criar administrador inicial.
4. Depois, use o botão Usuários para cadastrar outros acessos.

Observação:
A senha criada para novos usuários não fica salva no Firestore. Se precisar trocar senha depois, use o Firebase Authentication ou crie um novo usuário.
