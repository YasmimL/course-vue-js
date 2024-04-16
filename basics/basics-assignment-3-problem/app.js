const app = Vue.createApp({
  data() {
    return {
      number: 0,
      timeId: 0,
    };
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    },
  },
  watch: {
    number() {
      const that = this;
      if (this.timeId) clearTimeout(this.timeId);
      this.timeId = setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
});

app.mount("#assignment");
