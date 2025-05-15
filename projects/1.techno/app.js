const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: null,
    carrinho: [],
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false,
    carrinhoAtivo: false
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
  },
  computed: {
    carrinhoTotal() {
      let total = 0
      if (this.carrinho.length) {
        this.carrinho.forEach(item => {
          total += item.preco
        })
      }
      return total
    }
  },
  watch: {
    produto() {
      window.document.title = this.produto.nome || "Techno"

      const hash = this.produto.id || ""
      history.pushState(null, null, `#${hash}`)

      if(this.carrinho) {
        this.compararEstoque()
      }
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho) // Converte o array JavaScript em uma string JSON para salvar no localStorage
    }
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json").then(r => r.json()).then(r => {
        this.produtos = r
      })
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`).then(r => r.json()).then(r => {
        this.produto = r
      })
    },
    abrirModal(id) {
      this.fetchProduto(id)

      window.scrollTo({
        top: 0,
        behavior: "smooth" // Efeito: Vai pra cima de forma suave
      })
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) {
        this.produto = false;
      }
    },
    clickForaCarrinho({ target, currentTarget }) {
      if (target === currentTarget) {
        this.carrinhoAtivo = false;
      }
    },
    adicionarItem() {
      this.produto.estoque--
      const { id, nome, preco } = this.produto
      this.carrinho.push({
        id,
        nome,
        preco
      })
      this.alerta(`${nome} adicionado ao carrinho.`)
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho) // Converte a string JSON para salvar em array JavaScript no data
      }
    },
    compararEstoque() {
      const items = this.carrinho.filter(({id}) => id === this.produto.id)
      this.produto.estoque = this.produto.estoque - items.length
      this.produto.estoque -= items.length
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem
      this.alertaAtivo = true
      setTimeout(() => {
        this.alertaAtivo = false
      }, 1500) // 1.5 segundos
    },
    router() {
      const hash = document.location.hash.replace("#", "")

      if (hash) {
        this.fetchProduto(hash)
      }
    }
  },
  created() {
    this.fetchProdutos()
    this.checarLocalStorage()
    this.router()
  }
});
