# Explicação do package.json do projeto Vue CLI

Este documento explica detalhadamente cada parte do arquivo `package.json` gerado pelo Vue CLI.

## Informações Gerais

```json
{
  "name": "vue-cli",
  "version": "0.1.0",
  "private": true,
```

- **`name`**: Define o nome do projeto.
- **`version`**: Indica a versão atual do projeto.
- **`private`**: Define o projeto como privado, impedindo sua publicação no npm.

---

## Scripts

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

- **`serve`**: Inicia o servidor de desenvolvimento.
- **`build`**: Gera a versão de produção do projeto.
- **`lint`**: Analisa o código-fonte para identificar e corrigir problemas de formatação e qualidade do código.

---

## Dependências

As dependências são divididas em duas categorias: `dependencies` (necessárias em produção) e `devDependencies` (necessárias apenas para desenvolvimento).

### Dependências de Produção

```json
  "dependencies": {
    "core-js": "^3.8.3",
    "vue": "^2.6.14"
  },
```

- **`core-js`**: Biblioteca para compatibilidade com recursos modernos do JavaScript.
- **`vue`**: Framework Vue.js, versão 2.6.14.

### Dependências de Desenvolvimento

```json
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3",
    "vue-template-compiler": "^2.6.14"
  },
```

- **`@babel/core`**: Compilador Babel para converter código moderno de JavaScript para versões mais antigas.
- **`@babel/eslint-parser`**: Permite que o ESLint analise código JavaScript compatível com Babel.
- **`@vue/cli-plugin-babel`**: Plugin do Vue CLI para suporte ao Babel.
- **`@vue/cli-plugin-eslint`**: Plugin do Vue CLI para suporte ao ESLint.
- **`@vue/cli-service`**: Serviço central do Vue CLI, que gerencia a execução dos comandos do projeto.
- **`eslint`**: Ferramenta de linting para garantir a qualidade do código JavaScript.
- **`eslint-plugin-vue`**: Plugin para ESLint que adiciona regras específicas para Vue.js.
- **`vue-template-compiler`**: Compilador necessário para processar templates do Vue.

---

## Configuração do ESLint

```json
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "rules": {}
  },
```

- **`root`**: Define que essa configuração do ESLint é a principal do projeto.
- **`env.node`**: Indica que o ambiente do código suporta Node.js.
- **`extends`**: Define regras de linting, incluindo:
  - `plugin:vue/essential`: Conjunto básico de regras para Vue.js.
  - `eslint:recommended`: Conjunto recomendado de regras gerais do ESLint.
- **`parserOptions.parser`**: Define o parser do Babel para processar o código-fonte.
- **`rules`**: Permite definir regras personalizadas para o linting (está vazio por padrão).

---

## Browserslist

```json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
```

Define os navegadores-alvo para a construção do projeto:
- `> 1%`: Suporta navegadores usados por mais de 1% dos usuários.
- `last 2 versions`: Mantém compatibilidade com as duas versões mais recentes de cada navegador.
- `not dead`: Exclui navegadores que não são mais suportados.

Essa configuração é usada pelo Babel e pelo Autoprefixer para garantir compatibilidade com os navegadores definidos.

---

Este arquivo `package.json` configura um projeto Vue.js 2, incluindo dependências essenciais para desenvolvimento, linting e compatibilidade com navegadores modernos.
