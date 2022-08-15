const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
          // EXPLANATION: add the isFav attribute to each book to signal whether the book is a favourite or not and set them to be initially false
          isFav: false,
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
          // note: attribute signaling whether book is favourite or not
          isFav: false,
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpg',
          // note: attribute signaling whether book is favourite or not
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // EXPLANATION: 1)Create a funtion to handle the click event attached to each <li> in the html file and accept book as a parameter
    //              2) Say that the isFav property in the clicked book is equal to its oppisite value
    toggleFavBooks(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount('#app');
