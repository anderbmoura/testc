# PR Creation Prompt Templates

Use estes prompts como templates para solicitar a criação automatizada de PRs.

## Template Básico

```
Create a branch, commit, push and PR for these changes:
- Branch type: [chore/feat/fix/docs/refactor/style/test/ci/build]
- Branch name: [descriptive-name]
- Commit message: [conventional commit message]
- PR description: [detailed description in English]
- Target branch: main-develop
```

## Exemplos de Uso

### Exemplo 1: Chore (Manutenção)

```
Create a branch, commit, push and PR for these changes:
- Branch type: chore
- Branch name: update-dependencies
- Commit message: chore: update project dependencies to latest versions
- PR description: Update all npm dependencies to their latest stable versions. Includes security patches and performance improvements.
- Target branch: main-develop
```

### Exemplo 2: Feature (Nova Funcionalidade)

```
Create a branch, commit, push and PR for these changes:
- Branch type: feat
- Branch name: add-dark-mode
- Commit message: feat: add dark mode support to application
- PR description: Implement dark mode theme switching capability. Includes theme context, toggle component, and persistent storage of user preference.
- Target branch: main-develop
```

### Exemplo 3: Fix (Correção)

```
Create a branch, commit, push and PR for these changes:
- Branch type: fix
- Branch name: button-padding-issue
- Commit message: fix: correct button padding on mobile devices
- PR description: Fix padding inconsistency in Button component on mobile viewports. Adjusts spacing to match design system specifications.
- Target branch: main-develop
```

### Exemplo 4: Docs (Documentação)

```
Create a branch, commit, push and PR for these changes:
- Branch type: docs
- Branch name: update-readme
- Commit message: docs: update installation and setup instructions
- PR description: Update README with clearer installation steps, prerequisites, and troubleshooting section for common issues.
- Target branch: main-develop
```

### Exemplo 5: Refactor (Refatoração)

```
Create a branch, commit, push and PR for these changes:
- Branch type: refactor
- Branch name: simplify-theme-logic
- Commit message: refactor: simplify theme switching logic
- PR description: Refactor theme context to reduce complexity and improve maintainability. No functional changes to user-facing features.
- Target branch: main-develop
```

## Prompt Simplificado (para mudanças já feitas)

```
Create a PR for my current changes:
- Type: [chore/feat/fix/docs]
- Name: [short-description]
- Message: [commit message following conventional commits]
- Description: [PR description in English]
```

## Prompt Ultra-Simplificado

```
Create a PR: [type]/[name] - [description]
Example: Create a PR: chore/update-scripts - update build scripts for better performance
```

## Prompt Totalmente Automático (AI decide tudo)

Use este quando quiser que o Copilot analise suas mudanças e decida os melhores nomes, mensagens e descrições:

```
Create a PR for my current changes. Analyze the changes and decide the best branch type, name, commit message, and PR description.
```

ou simplesmente:

```
Create a PR with AI suggestions
```

ou ainda mais simples:

```
Auto PR
```

O Copilot irá:

1. Analisar os arquivos modificados
2. Determinar o tipo de mudança (feat/fix/chore/docs/etc)
3. Sugerir um nome de branch apropriado
4. Gerar uma mensagem de commit descritiva
5. Criar uma descrição de PR relevante
6. Executar todo o fluxo automaticamente

## Tipos de Branch (Conventional Commits)

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Apenas documentação
- **style**: Formatação, ponto e vírgula, etc (sem mudança de código)
- **refactor**: Refatoração de código (sem mudança funcional)
- **perf**: Melhorias de performance
- **test**: Adição ou correção de testes
- **chore**: Tarefas de manutenção, atualizações de dependências
- **ci**: Mudanças em arquivos de CI/CD
- **build**: Mudanças no sistema de build

## Dicas

1. Sempre escreva commit messages e PR descriptions em **inglês**
2. Use **conventional commits** format
3. Seja **descritivo** mas **conciso** no commit message
4. Adicione **contexto adicional** na PR description
5. O processo automático inclui:
   - ✓ Checkout e update da branch develop
   - ✓ Criação da nova branch
   - ✓ Staging de todas as alterações
   - ✓ Commit com a mensagem fornecida
   - ✓ Push para o remoto
   - ✓ Criação do PR com auto-complete ativado
   - ✓ Merge automático quando passar nas validações
