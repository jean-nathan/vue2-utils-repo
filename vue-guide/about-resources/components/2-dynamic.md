## Sobre

Os componentes dinâmicos no Vue.js permitem alternar entre diferentes componentes dentro da mesma estrutura de layout, sem precisar recarregar toda a aplicação. Isso é útil para criar interfaces modulares e reutilizáveis, garantindo uma experiência fluida para o usuário.

## Falando sobre o código e pontos importantes

Para criar componentes dinâmicos, utilizamos a tag `<component>` com a diretiva `:is`:

```vue
<component :is="componenteAtivo"></component>
```

O valor de `componenteAtivo` determinará qual componente será renderizado. Esse valor pode ser alterado dinamicamente, permitindo alternar entre componentes diferentes.

### Exemplo de implementação

#### Componente Pai

```vue
<template>
  <div id="app">
    <button @click="componentActive = 'VueCliHeader'">Renderizar componente VueCliHeader</button>
    <button @click="componentActive = 'VueCliFooter'">Renderizar componente VueCliFooter</button>
    <component :is="componentActive"></component>
  </div>
</template>

<script>
import VueCliHeader from './components/VueCliHeader.vue';
import VueCliFooter from './components/VueCliFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      componentActive: "VueCliHeader"
    }
  },
  components: {
    VueCliHeader,
    VueCliFooter
  }
}
</script>
```

#### Componente Filho 1 (VueCliHeader)

```vue
<template>
  <div>
    <h1>Componente 1 - VueCliHeader</h1>
  </div>
</template>

<script>
export default {
  name: "VueCliHeader",
  data() {
    return {
      title: "Componente - VueCliHeader"
    }
  }
}
</script>
```

#### Componente Filho 2 (VueCliFooter)

Aqui podemos ver que, quando o componente é trocado, ele é destruído. Para verificar isso, utilizamos o hook `destroyed`:

```vue
<template>
  <div>
    <h1>Componente 2 - VueCliFooter</h1>
  </div>
</template>

<script>
export default {
  name: "VueCliFooter",
  data() {
    return {
      title: "Componente - VueCliFooter"
    }
  },
  destroyed() {
    console.log("Componente VueCliFooter foi destruído!")
  }
}
</script>
```

### Mantendo os componentes vivos com `keep-alive`

Se quisermos evitar que os componentes sejam destruídos ao trocar entre eles, podemos usar `<keep-alive>`:

```vue
<template>
  <div id="app">
    <button @click="componentActive = 'VueCliHeader'">Renderizar componente VueCliHeader</button>
    <button @click="componentActive = 'VueCliFooter'">Renderizar componente VueCliFooter</button>
    <keep-alive>
      <component :is="componentActive"></component>
    </keep-alive>
  </div>
</template>
```

Com isso, tanto o `VueCliHeader` quanto o `VueCliFooter` permanecerão na memória mesmo após a troca, evitando re-renderizações desnecessárias.

## Quando usar e quando não usar

### Quando usar:
- Quando precisar alternar entre componentes dinamicamente sem perder estado.
- Quando os componentes compartilham a mesma estrutura de layout.
- Quando deseja melhorar a performance evitando re-renderizações desnecessárias.

### Quando não usar:
- Quando cada troca de componente deve reiniciar seu estado.
- Quando os componentes exigem inicializações específicas toda vez que são carregados.
- Quando há risco de consumir muita memória ao manter muitos componentes em `keep-alive`.

## Conclusão

Os componentes dinâmicos no Vue.js são uma poderosa ferramenta para criar interfaces flexíveis e modulares. Eles permitem alternar entre componentes facilmente, mantendo ou reiniciando o estado conforme necessário. O uso de `<keep-alive>` pode ser uma solução eficiente para preservar estados importantes e otimizar o desempenho da aplicação.
