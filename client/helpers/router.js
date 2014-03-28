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


// Routes

Router.map(function() {


  // Pages

  this.route('homepage', {
    path: '/'
  });

  this.route('html');

  for(i = 0; i < 7; i++)
  {
    this.route('html' + i, {
      path: '/html/html' + i + '/'
    });
  }
  
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
