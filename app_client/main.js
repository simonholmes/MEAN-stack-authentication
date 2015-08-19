(function () {

  angular.module('meanApp', ['ngRoute']);
    // .config(config)
    // .run(run);


  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm',
        access: {
          requiredLogin: false
        }
      })
      .when('/register', {
        templateUrl: '/auth/register/register.view.html',
        controller: 'registerCtrl',
        controllerAs: 'vm',
        access: {
          requiredLogin: false
        }
      })
      .when('/login', {
        templateUrl: '/auth/login/login.view.html',
        controller: 'loginCtrl',
        controllerAs: 'vm',
        access: {
          requiredLogin: false
        }
      })
      .when('/profile', {
        templateUrl: '/profile/profile.view.html',
        controller: 'profileCtrl',
        controllerAs: 'vm',
        access: {
          requiredLogin: false
        }
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  // run.$inject = ['$rootScope', '$location', '$window'];
  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      var restrictedPage = $location.path() === '/profile';
      var loggedIn = authentication.isLoggedIn();
      if (restrictedPage && !loggedIn) {
        $location.path('/');
      }
    });
  }
  
  angular
    .module('meanApp')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

  
})();