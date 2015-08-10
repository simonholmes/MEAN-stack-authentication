(function () {

  angular
    .module('meanApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location'];
  function navigationCtrl($location) {
    var vm = this;

    // vm.currentPath = $location.path();

    // vm.isLoggedIn = authentication.isLoggedIn();

    // vm.currentUser = authentication.currentUser();

    // vm.logout = function() {
    //   authentication.logout();
    //   $location.path('/');
    // };

  }
})();