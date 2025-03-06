```markdown
# Anotações Importantes para Vue.js

## 1. O que é o Vue CLI?

O Vue CLI (Command Line Interface) é uma ferramenta que facilita o desenvolvimento de aplicações Vue.js, fornecendo um conjunto de utilitários para criar, configurar e gerenciar projetos Vue de maneira simples. Algumas de suas funcionalidades incluem:

- **Criar uma estrutura padrão inicial de um aplicativo**: O Vue CLI gera automaticamente uma estrutura básica de diretórios e arquivos para começar o desenvolvimento de uma aplicação Vue.js.
- **Instalar automaticamente facilitadores**: O Vue CLI pode instalar ferramentas e dependências essenciais para o desenvolvimento, como Babel, Webpack, Vue Router, Vuex, entre outras.
- **Compilar arquivos `.vue`**: Ele também permite compilar arquivos `.vue`, que são componentes de Vue com HTML, CSS e JavaScript em um único arquivo.

---

## 2. Como tornar um componente global dentro da minha aplicação Vue?

Para tornar um componente global em sua aplicação Vue, você pode registrá-lo no arquivo `main.js`. Basta importar o componente e registrá-lo com o método `Vue.component()`.

### Exemplo:

1. **Importe o componente:**

   ```javascript
   import MeuComponente from './components/MeuComponente.vue';
   ```

2. **Registre o componente globalmente:**

   ```javascript
   Vue.component('MeuComponente', MeuComponente);
   ```

Agora, você pode usar `<MeuComponente />` em qualquer lugar de sua aplicação sem precisar importá-lo novamente nos componentes onde deseja utilizá-lo.

---

Essas são anotações úteis para quando precisar de um lembrete rápido sobre o Vue CLI e como tornar um componente global. Mantenha este arquivo atualizado à medida que novas informações surgirem!

## Como instalar o Vue Router no Vue2?
Execute o comando: npm install vue-router@3
```
