const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45,
      //note:   properties for the positon of mouse over my div
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    // EXPLANATION: when we have an event we automatically get access to an optional event object, which is taken as the first parameter in our function (e).
    handleEvent(e, data) {
      console.log('event');
      console.log(e.type, e);
      if (data) {
        console.log(data);
      }
    },
    //note:   with this function I update the position of the mouse over the corresponding div. the offsetX and offsetY are part of the event object.
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
