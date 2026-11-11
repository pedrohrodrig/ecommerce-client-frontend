# Contribuindo

## Branches (git flow)

| Branch                | Papel                                                                               |
| --------------------- | ----------------------------------------------------------------------------------- |
| `main`                | Código em produção. Só recebe merges de `release/*` (e `hotfix/*`).                 |
| `develop`             | Integração. Base de todo trabalho novo.                                             |
| `feature/<descricao>` | Uma funcionalidade ou ajuste. Sai de `develop` e volta por PR.                      |
| `release/<versao>`    | Preparação de uma versão. Sai de `develop`, entra em `main` e volta para `develop`. |

## Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```text
feat(catalog): adiciona página de produto
fix(cart): corrige total do carrinho
chore: atualiza dependências
```

## Antes de abrir o PR

```bash
pnpm format
pnpm lint
pnpm test:run
pnpm build
```

## Estrutura do projeto

Pastas são criadas **somente quando recebem o primeiro arquivo** (sem
`.gitkeep`). Estrutura alvo:

```text
src/
├── app/                     # rotas (App Router)
│   ├── (store)/             # loja: URLs sem prefixo
│   │   ├── page.tsx         # home
│   │   ├── produtos/        # /produtos e /produtos/[slug]
│   │   ├── categorias/      # /categorias/[slug]
│   │   └── carrinho/
│   ├── (auth)/
│   │   ├── login/
│   │   └── cadastro/
│   └── minha-conta/
├── features/                # lógica por funcionalidade
│   └── <feature>/           # catalog, cart, checkout, account
│       ├── components/
│       └── api/             # chamadas HTTP (tipos do ecommerce-contracts)
├── components/              # componentes da loja usados por várias features
├── services/                # cliente HTTP e integrações
├── hooks/
├── lib/                     # utilitários sem React
└── types/
```

Regras:

- Páginas em `app/` são finas: buscam dados e compõem componentes de
  `features/`.
- Server Component por padrão; `'use client'` só onde há interação (carrinho,
  formulários).
- Componente visual genérico vem da Mistral UI; não recrie aqui.
- Uma feature não importa arquivos internos de outra feature.
- Regras comerciais (preço, frete, estoque) ficam no backend.
- Testes ficam ao lado do arquivo testado (`arquivo.test.tsx`).
- Mudou a estrutura alvo? Atualize esta seção no mesmo PR.

## Decisões de arquitetura

Decisões relevantes viram um ADR na base
[ADRs do Notion do projeto](https://app.notion.com/p/415cc60b2a2980b6b738f80c72276480).
