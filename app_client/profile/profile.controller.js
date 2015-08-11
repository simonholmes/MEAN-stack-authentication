(function() {
  
  angular
    .module('meanApp')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location'];
  function profileCtrl($location) {
    var vm = this;
  }

})();