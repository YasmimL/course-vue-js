const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(number) {
      this.counter = this.counter + number;
    },

    reduce(number) {
      this.counter = this.counter - number;
    },

    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    submitForm(event) {
      alert("Submitted");
    },

    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
