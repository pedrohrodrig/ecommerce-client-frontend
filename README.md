# ecommerce-client-frontend

Loja pública do e-commerce da ótica, em Next.js (App Router), servida em
`loja.dominio.com.br`.

> **Fase atual:** configuração base. Só a home placeholder existe. Produtos,
> categorias, busca e carrinho chegam na etapa 6. A Mistral UI entra quando a
> primeira versão dela for publicada.

## Stack

| Ferramenta                 | Para quê                                       |
| -------------------------- | ---------------------------------------------- |
| Next.js 16 (App Router)    | SSR/SSG, rotas, otimização de imagens, SEO     |
| React 19 + TypeScript 7    | interface                                      |
| Tailwind CSS 4             | estilos específicos da loja                    |
| Vitest 5 + Testing Library | testes de componentes                          |
| oxlint                     | lint (com o plugin `nextjs`)                   |
| oxfmt                      | formatação (com ordenação de classes Tailwind) |

O `next.config.ts` mantém os padrões do `create-next-app` 16: Turbopack com o
loader do Tailwind, `cacheComponents` e `partialPrefetching` ligados.

## Requisitos

| Ferramenta                     | Versão                          | Como instalar                      |
| ------------------------------ | ------------------------------- | ---------------------------------- |
| [Node.js](https://nodejs.org/) | 24 LTS (ver `.nvmrc`)           | instalador oficial, `nvm` ou `fnm` |
| [pnpm](https://pnpm.io/)       | 12 (fixado em `packageManager`) | `npm install -g pnpm@12`           |

## Comandos

```bash
pnpm install        # instala as dependências
pnpm dev            # http://localhost:3000
pnpm build          # build de produção (inclui typecheck)
pnpm start          # serve o build
pnpm typecheck      # gera os tipos de rotas do Next e roda o tsc
pnpm lint           # oxlint (falha também com warnings)
pnpm lint:fix       # corrige o que o oxlint souber corrigir
pnpm format         # formata com oxfmt
pnpm format:check   # verifica a formatação
pnpm test           # Vitest em modo watch
pnpm test:run       # Vitest uma vez (CI)
```

## Lint e formatação

Mesma configuração do admin:

- **oxlint** ([`.oxlintrc.json`](.oxlintrc.json)): categorias `correctness`
  (erro), `suspicious` e `perf` (aviso); plugins de React, TypeScript, imports,
  acessibilidade, **Next.js** e Vitest. O CI roda com `--deny-warnings`.
- **oxfmt** ([`.oxfmtrc.json`](.oxfmtrc.json)): regras da Mistral UI e
  `sortTailwindcss` para ordenar as classes.
- O oxlint não tem regras de estilo ligadas, então não conflita com o oxfmt.

## VS Code

As extensões sugeridas em [`.vscode/extensions.json`](.vscode/extensions.json)
são as mesmas do admin:

- **Oxc** (`oxc.oxc-vscode`): lint e formatação ao salvar.
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`).
- **TypeScript (Native Preview)** (`typescriptteam.native-preview`): faz o
  editor usar o TypeScript 7 do projeto.
- **Vitest** (`vitest.explorer`).
- **EditorConfig** (`editorconfig.editorconfig`).

## Estrutura

```text
src/
├── app/
│   ├── layout.tsx       # layout raiz (html, metadata padrão)
│   ├── globals.css      # Tailwind
│   └── (store)/         # route group da loja
│       └── page.tsx     # home
└── test/setup.ts
```

Novas pastas são criadas quando recebem o primeiro arquivo. A estrutura alvo
está em [CONTRIBUTING.md](CONTRIBUTING.md#estrutura-do-projeto).

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) roda em PRs e pushes para
`develop` e `main`: lint e formatação, testes, typecheck e build.
