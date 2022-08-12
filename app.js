const app = Vue.createApp({
  data() {
    return {
      title: 'the final empire',
      author: 'Brandon',
      age: 45,
    };
    // EXPLANATION: CLICK EVENTS: I need to add another property to the app component. So far I have data() function, now I will add a methods property after it, inside which we can add any function or method that we want to run for the app component
  },
  methods: {
    // EXPLANATION: I create the method   changeTitle() to update the value of the title inside data. So whenever the fucntion changeTitle() is called we are going to update the title. note: This function/method changeTitle() will be called inside the correponding div in the html file
    changeTitle(title) {
      // note: we use this to reference the component itself first, cause otherwise we don´t have access to the property title inside this function
      //   EXAMPLE: updatng title by giving a string as a value
      this.title = 'a brand new title :)';
      //   EXAMPLE: updatng title by setting it to be the argument that was passed from the function call in the corresponding div in the html. In this function, I accept the passed value: changeTitle(title)
      this.title = title;
    },
  },
});

// indicate where the app shoulg be mounted, in this case in the div with the id app
app.mount('#app');
