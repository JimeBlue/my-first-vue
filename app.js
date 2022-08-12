//  EXPLANATION: create a vue app
const app = Vue.createApp({
  // EXPLANATION: This is the vue object in which we can set up any data or functions to react to events that we want. Below I call the data function and inside of it we return an object. The properties inside this object are accesible throughout our template as variables
  data() {
    return {
      title: 'the final empire',
      author: 'Brandon',
      age: 45,
    };
  },
  // EXPLANATION: Another thing we can specify inside the object is the component template, i.e the tamplate that will be renderes inside #app. To do that, I create a template property, which is a string that contains html. But when the template is to big it is not appropriate to write it here, instead we write inside #app in the html file
  //   template: '<h2> I am the template</h2>',
  //
});

// indicate where the app shoulg be mounted, in this case in the div with the id app
app.mount('#app');
