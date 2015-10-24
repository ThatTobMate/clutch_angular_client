'use strict';

/**
 * @ngdoc overview
 * @name clutchApp
 * @description
 * # clutchApp
 *
 * Main module of the application.
 */
 var app = angular.module('clutchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'ngStorage',
    'ui.router'
  ]);

  app.config(function ($routeProvider, $authProvider, $stateProvider) {
    $authProvider.configure({
                apiUrl: '/api'
                // proxyUrl: '/clutch_proxy'
            });
    // $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
      .state('contact', {
              url: '/contact',
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            })
      .state('login', {
        url: '/login',
        templateUrl: 'views/User/login.html',
        controller: 'AuthCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/User/signUp.html',
        controller: 'AuthCtrl'
      })
      .state('editUser', {
        url: '/edit',
        templateUrl: 'views/User/editUser.html',
        controller: 'AuthCtrl'
      })
      .state('profile', {
        url: '/profile/:userId',
        templateUrl: 'views/User/profile.html',
        controller: 'ConsolesCtrl'
      })
      .state('consoles', {
        url: '/consoles',
        templateUrl: 'views/Console/consoles.html',
        controller: 'ConsolesCtrl'
      })
      .state('console.games', {
        url: '/:consoleName/games',
        templateUrl: 'views/Game/console_games.html',
        controller: 'GamesCtrl'
      })
      .state('games', {
        url: '/:consoleName/games/:gameId',
        templateUrl: 'views/Ladder/games_ladders.html',
        controller: 'LaddersCtrl'
      })
      .state('ladders', {
        url: '/ladders/:ladderId',
        templateUrl: 'views/Ladder/ladder.html',
        controller: 'LaddersCtrl'
      })
      .state('clans', {
        url: '/ladders/:ladderId/:clanId',
        templateUrl: 'views/Clan/clan.html',
        controller: 'ClansCtrl'
      })
      .state('clansCreate', {
        url: '/clan/create',
        templateUrl: 'views/Clan/create_clan.html',
        controller: 'ClansCtrl'
      })
      .state('rules', {
        url: '/ladders/:ladderId/rules',
        templateUrl: 'views/Ladder/rules.html',
        controller: 'LaddersCtrl'
      })
      .state('clansResults', {
        url: '/ladders/:ladderId/:clanId/results',
        templateUrl: 'views/Clan/results.html',
        controller: 'ClansCtrl'
      })
      .state('matchDetails', {
        url: '/ladders/:ladderId/:clanId/results/:matchId',
        templateUrl: 'views/Match/match_details.html',
        controller: 'ClansCtrl'
      })
      .state('matches', {
        url: '/ladders/:ladderId/matches',
        templateUrl: 'views/Match/matches.html',
        controller: 'LaddersCtrl'
      })
      .state('matchesCreate', {
        url: '/ladders/:ladderId/matches/create',
        templateUrl: 'views/Match/create_match.html',
        controller: 'LaddersCtrl'
      })
});

