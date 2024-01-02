Parece que há um pequeno erro de digitação em sua pergunta. Se você estiver se referindo a transformar uma branch secundária (branch secundária, ou "brack secubdaria" pode ser um erro de digitação) em uma branch principal em um repositório Git, você pode fazer isso usando os seguintes passos:

1. **Confirme todas as mudanças na branch secundária:**
   Certifique-se de que todos os seus trabalhos na branch secundária estejam confirmados.

   ```bash
   git add .
   git commit -m "Comentário do commit"
   ```

2. **Mude para a branch principal:**
   Troque para a branch principal onde você deseja integrar as mudanças da branch secundária.

   ```bash
   git checkout nome-da-branca-principal
   ```

3. **Integre as mudanças da branch secundária:**
   Você pode usar o comando `merge` para incorporar as mudanças da branch secundária na branch principal.

   ```bash
   git merge nome-da-branch-secundaria
   ```

   Se você quiser reescrever a história e não manter um histórico de merge, pode considerar o uso do `rebase`. No entanto, isso deve ser feito com cuidado, especialmente se a branch secundária já foi compartilhada com outros.

   ```bash
   git rebase nome-da-branch-secundaria
   ```

4. **Resolva quaisquer conflitos:**
   Se houver conflitos durante a mesclagem ou rebase, você precisará resolvê-los. O Git informará quais arquivos têm conflitos, e você pode usar um editor de código para resolvê-los.

5. **Confirme as mudanças na branch principal:**
   Depois de resolver os conflitos (se houver), confirme as mudanças na branch principal.

   ```bash
   git add .
   git commit -m "Integrar mudanças da branch secundária"
   ```

6. **Opcional: Exclua a branch secundária (se necessário):**
   Se você não precisar mais da branch secundária, pode excluí-la.

   ```bash
   git branch -d nome-da-branch-secundaria
   ```

   O `-d` significa "delete", mas apenas excluirá a branch se todas as alterações nela já foram mescladas na branch atual.

Esses passos assumem que você está trabalhando localmente. Se você estiver trabalhando com um repositório remoto, você também precisará enviar as alterações para o repositório remoto.

Lembre-se de fazer backup ou criar um novo branch antes de fazer alterações significativas, especialmente ao reescrever o histórico com o rebase.