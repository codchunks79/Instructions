Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
      counter:0,
    }
  },


  template: '<div class="col-12 col-md-2 card content text-center"><div class="form row"><div class="innerCard"><div class="form-lock-up"><div class="value-button-down" v-on:click="count --"><i class="fas fa-sort-down"></i></div><p class="input">{{count}}</p><div class="value-button-up" v-on:click="count++"><i class="fas fa-sort-up"></i></button></div></div></div></div></div>',
});

Vue.component('header-nav', {

  template: `<header class="container-fluid headerWrapper">
  <nav class="navbar navbar-light bg-light">
  <img src="img/lifetime-logo-e1527083477978.gif" alt="lifetime_logo">
  </nav>
  </header>`,
});

Vue.component('name-instructions', {
  data: function () {
    return {
      title: "Name",
      instruct: "Instructions",
    }
  },
  template: '<section class="container-fluid wrapperTwo"><div class="row"><div class="col-md-8 d-none d-md-block noPadding"><h2>{{title}}</h2></div><div class="col-md-3 offset-sm-1 d-none d-md-block noPadding"><h2>{{instruct}}</h2></div></div></section>',
});

Vue.component('name-instructions-two', {
  data: function () {
    return {
      title: "Name / ",
      instruct: "Instructions",
    }
  },
  template: '<section class="container-fluid wrapperTwo"><div class="row"><div class="col-md-8 d-none d-md-block noPadding"><h2>{{title}}</h2></div><div class="col-md-3 offset-sm-1 d-none d-md-block noPadding"><h2>{{instruct}}</h2></div></div></section>',
});

Vue.component('form-one-name',{
  template:'"<input type="input" class="primaryInput " placeholder="User Name" required>'
});

Vue.component('form-one-password',{
  template:'<input type="password" class="primaryInput " placeholder="Password" required>'
});

Vue.component('contained-button',{
	template: `<a href="instructions.html">
  <button class='primaryContained' type='submit'>
  login <i class='fas fa-plus'></i>
  </button>
  </a>`,

});

new Vue({
  el: "#app",
  data:{
    title: "Name",
    instruct: "Instructions",
    gregg: "Gregg Dillon",
    molly: "Molly Jones",
    ineta:"Ineta Virbalaite",
    beth:"Bethany Barton",
    matt:"Matt Whipp",
    keira: "Keira Beswick",
    jordan: "Jordan Pasquale",
    jack: "Jack Davies",
    daily: "Daily Total",
      count: 0,

  },
});
