const app = Vue.createApp({
  data() {
    return {
      name: "Yasmim Nogueira",
      age: 26,
      imageLink: "butterfly.jpg",
    };
  },
  methods: {
    setAge5Years() {
      return this.age + 5;
    },

    generateFavoriteNumber() {
      const favoriteNumber = Math.random().toFixed(2);
      return favoriteNumber;
    },
  },
});

app.mount("#assignment");
