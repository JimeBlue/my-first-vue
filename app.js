const app = Vue.createApp({
  data() {
    return {
      // EXPLANATION: created the url property that we used as a dynamic html attribute
      url: 'https://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          // EXPLANATION: created the url property that we used as a dynamic html attribute
          img: 'assets/1.jpg',
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          // EXPLANATION: created the url property that we used as a dynamic html attribute
          img: 'assets/2.jpg',
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          // EXPLANATION: created the url property that we used as a dynamic html attribute
          img: 'assets/3.jpg',
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
