const app = Vue.createApp({
  data() {
    return {
      user: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert");
    },

    setUser(event) {
      this.user = event.target.value;
    },

    confirmInput() {
      this.confirmedInput = this.user;
    },
  },
});

app.mount("#assignment");
