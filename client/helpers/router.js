/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop(); 
    }
  }

}

Router.before(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  // Items

  this.route('items', {
    waitOn: function () {
      return Meteor.subscribe('allItems');
    },
    data: function () {
      return {
        items: Items.find()
      }
    }
  });

  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });


  // Pages

  this.route('homepage', {
    path: '/'
  });

  this.route('html');
  this.route('css');



  for(i = 1; i < 5; i++)
  {
    this.route('html' + i, {
      path: '/html/html' + i + '/'
    });
  }

  for(i = 1; i < 5; i++)
  {
    this.route('css' + i, {
      path: '/css/css' + i + '/'
    });
  }

this.route('htmlIntro', {
    path: '/html/htmlIn'
  });



  this.route('about');

  this.route('profile');

  this.route('items');

  this.route('lessons');

  this.route('achievements');


  // Users

  this.route('login'); 

  this.route('signup'); 

  this.route('forgot'); 

});
