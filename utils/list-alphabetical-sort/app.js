const vm = new Vue({
  el: "#app",
  data: {
    languages: ["PHP", "JS", "PYTHON", "C++"]
  },
  methods: {
    filterAZ() {
      this.languages.sort();
    },
    filterZA() {
      this.languages.sort().reverse();
    }
  }
});
