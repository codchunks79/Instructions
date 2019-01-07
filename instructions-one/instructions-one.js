Vue.component('monthly-counter', {
  data: function () {
    return {
      count: 0,
      counter:0,
    }
  },


  template: `<div class="col-12 col-md-3 card ">
  <div class="form">
  <div class="innerCard">
  <div class="form-lock-up">
  <p class="input">Monthly Sales {{count}}</p>
  </div>
  </div>
  </div>
  </div>`,
});

Vue.component('weekly-counter', {
  data: function () {
    return {
      count: 0,
      counter:0,
    }
  },


  template: `<div class="col-12 col-md-3 card ">
  <div class="form">
  <div class="innerCard">
  <div class="form-lock-up">
  <p class="input">Weekly Sales {{count}}</p>
  </div>
  </div>
  </div>
  </div>`,
});



Vue.component('daily-counter', {
  data: function () {
    return {
      count: 0,
      counter:0,
    }
  },


  template: `<div class="col-12 col-md-3 card ">
  <div class="form">
  <div class="innerCard">
  <div class="form-lock-up">
  <p class="input"><span class="smallFont">Daily Sales</span> {{count}}</p>
  </div>
  </div>
  </div>
  </div>`,
});


Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
      counter:0,
    }
  },


  template: `<div class="col-12 col-md-2 card ">
  <div class="form">
  <div class="innerCard">
  <div class="form-lock-up">
  <div class="value-button-down" v-on:click="count --"><i class="fas fa-sort-down"></i></div>
  <p class="input">{{count}}</p><div class="value-button-up" v-on:click="count++">
  <i class="fas fa-sort-up"></i></button></div></div></div></div></div>`,
});

/*Vue.component('header-nav', {

  template: `<header class="container-fluid headerWrapper">
  <nav class="navbar navbar-light bg-light">
  <img src="img/lifetime-logo-e1527083477978.gif" alt="lifetime_logo">
  </nav>
  </header>`,
});*/

Vue.component("header-nav", {
  template:`
      <header>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-inverse bg-inverse">
          <a class="navbar-brand" href="instructions.html"><img src="img/lifetime-logo-e1527083477978.gif" class="img-fluid"></a>
          <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="new-user.html" class="nav-link" ><contained-button-two>Add a user</contained-button-two> </a>
            </li>
              <li class="nav-item active">
                <a href="sales-total.html" class="nav-link" ><contained-button-two>Sales Totals</contained-button-two> </a>
              </li>
              <li class="nav-item d-sm-block">
                <a href="#" class="nav-link"><contained-button-two>Log Out</contained-button-two></a>
              </li>
              </ul>
          </div>
        </nav>
    <!-- End Navigation -->
  `
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
  template:'<input type="password"  class="primaryInput " placeholder="Password" required>'
});

Vue.component('contained-button',{
	template: `<!--<a href="instructions.html">-->
  <button class='primaryContained'  type='submit'>
  login <i class='fas fa-plus'></i>
  </button>
  <!--</a>-->`,

});

Vue.component('contained-button-two',{
	template: `
  <button class='primaryContained' type='submit'>
  <slot></slot>
  </button>
  `,

});

Vue.component('modal-button',{
	template: `
  <button class='modalButton d-block mx-auto' type='submit'>
  <slot></slot>
  </button>
  `,
});

Vue.component('form-last-name',{
  template:`<input type="input" class="primaryInput " placeholder="Last Name" required>`
});

Vue.component('form-new-user-password',{
  template:`<input type="input" class="primaryInput " placeholder="Password" required>`
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
