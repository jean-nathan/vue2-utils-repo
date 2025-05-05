const fetchDataMixin = {
  methods: {
    async fetchData(url) {
      try {
        this.loading = true;
        this.api = null;

        const response = await fetch(`http://localhost:3000${url}`);
        const data = await response.json();

        this.api = data;
        this.loading = false;

        return data; // 🔁 Retorna os dados!
      } catch (error) {
        console.error(`Erro ao buscar os dados: ${error}`);
        this.loading = false;
        return null;
      }
    }
  }
}

export default fetchDataMixin
