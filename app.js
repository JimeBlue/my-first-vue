const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'the final empire',
      author: 'Brandon',
      age: 45,
    };
  },
  methods: {
    // EXPLANATION: When the toggleShowBooks function is called, the showBooks property is set to the opposite of what originally was, creating the toggle functionallity and therefore the content of the div in the html file is not shown
    // EXAMPLE:
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
