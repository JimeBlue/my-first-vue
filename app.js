//  EXPLANATION: COMPUTED PROPOERTIES: is a way to define a data property inside our components which depends on other data that we have inside that component. EXAMPLE: we may want to create an array called filtered books. The  filtered books would depend on the books array that we already have. So if our books array changes so will change our filtered books array

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,

      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
          img: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          img: 'assets/3.jpg',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;

      // if (book.isFav) {
      //   book.isFav = false;
      // } else {
      //   book.isFav = true;
      // }
    },
  },
  //  EXPLANATION: out task is to create a filteredBooks array which will only contained the books that were added to favourite. To do that:
  // 1)Create a computed property insise the component object
  // 2)Inside the computed property we create a function, in this case filteredBooks(). This function will return a value, and then we can access that value and show it in html, by calling the filteredBooks() function in the html.
  // 3) Inside filteredBooks() we want to return a filtered array with the books that are favourite. So, we filter/iterate the books array (this.books.filter) and ask it to return the books which isFav value is true ((book) => book.isFav)
  // 4) Output the function filteredBooks in html
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
