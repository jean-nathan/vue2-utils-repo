<template>
  <header>
  <nav>
    <div class="logo">
      <router-link to="/">Techno</router-link>
    </div>
    <ul>
      <li><router-link to="/cursos">Cursos</router-link></li>
      <li><router-link to="/contato">Contato</router-link></li>
      <li><router-link to="/teste">Teste</router-link></li>
    </ul>
  </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style  scoped>

header {
  background: #234;
}

header a {
  color: white;
}

/* 
# Forma de pegar somente o link ativo, pois a home sempre ficará por ser o barra / usando o exact

a.router-link-exact-active {
  color: #4b8;
}

*/
a.router-link-active {
  color: #4b8;
}


nav {
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 1.25rem;
}

.logo {
  flex: 1; /* Deixa o logo ocupar todo espaço disponivel de nav, empurrando os li e a para o final */
}

.logo a { /* lembre-se o router-link é definido como uma tag a e pode ser mudado com prop tag="" */
  color: white;
  font-size: 1.2rem;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 .625rem;
  margin-left: .625rem;
}
</style>
