const vm = new Vue({
  el: "#app",
  data: {
    bgColor: ""
  },
  methods: {
    randomColorGenerator() {
      // Gera uma cor aleatória usando o modelo HSL:
      // H (Hue): valor entre 0 e 360, representa o tom da cor (vermelho, verde, azul, etc.)
      // S (Saturation): 100% deixa a cor bem viva
      // L (Lightness): 50% mantém a cor com brilho médio, nem muito escura nem muito clara
      this.bgColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    
  }
});
