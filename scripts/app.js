'use strict';

/**
 * @ngdoc overview
 * @name forumBlogApp
 * @description
 * # forumBlogApp
 *
 * Main module of the application.
 */
var app = angular.module('forumBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'infinite-scroll',
    'ngDraggable'
  ])
  .constant('FIREBASE_URL', 'https://alexandros.firebaseio.com/');


  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
      })
      .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl'
      })
      .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl'
      })
      .when('/createpost', {
            templateUrl: 'views/createpost.html',
            controller: 'CreatepostCtrl'
      })
      .when('/policy', {
            templateUrl: 'views/policy.html',
            controller: 'PolicyCtrl'
      })
      .when('/posts/access/tonpoulo/users', {
            templateUrl: 'views/users.html',
            controller: 'UsersCtrl'
      })
      .when('/posts/access/tonpoulo/denied', {
            templateUrl: 'views/accessdenied.html',
            controller: 'AccessdeniedCtrl'
      })
      .when('/posts/access/tonpoulo/emails', {
            templateUrl: 'views/email.html',
            controller: 'EmailCtrl'
      })
      .when('/posts/access/tonpoulo/comments', {
            templateUrl: 'views/accessdeniedcomments.html',
            controller: 'AccessDeniedCommentsCtrl'
      })
      .when('/posts/access/tonpoulo/denied/:postId', {
            templateUrl: 'views/accessdeniedsingle.html',
            controller: 'AccessDeniedSingleCtrl'
      })
      .when('/profile/:username', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
      })
      .when('/:postId', {
            templateUrl: 'views/singlepost.html',
            controller: 'SinglePostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
