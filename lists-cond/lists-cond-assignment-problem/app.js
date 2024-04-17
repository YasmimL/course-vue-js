const app = Vue.createApp({
  data() {
    return {
      task: "",
      tasks: [],
      visible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },

    toggleList() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");
