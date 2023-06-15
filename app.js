const App = {
  data() {
    return {
      title: "ToDo",
      input: {
        value: "",
        placeholder: "Введите значение...",
      },
      notes: ["тили-тили", "трали-вали"],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = "";
      console.log(this.input.value);
    },
    remove(idx){
      this.notes.splice(idx, 1);
    }
  },
};

Vue.createApp(App).mount("#app");
