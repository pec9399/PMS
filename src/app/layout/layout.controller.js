(function () {
  angular
    .module('pms')
    .controller('LayoutController', LayoutController);

  /** @ngInject */
  function LayoutController($log, $state, $stateParams, $mdSidenav, $http) {
    const vm = this;
    /* 교수 정보 */
    vm.state = $state;
    vm.stateParams = $stateParams;
    vm.log = $log.log;
    vm.act = 'none';
    vm.toggleLeft = () => {
      $mdSidenav('left').toggle();
    };

    vm.close = () => {
      $mdSidenav('left').close();
    };

    vm.change = () => {
      if (vm.act === 'none') vm.act = 'block';
      else if (vm.act === 'block') vm.act = 'none';
    };

    $http.get('/rest/session').then((result) => {
      /* if (result.data.auth === 1) {
       vm.user = 'admin';
     } else if (result.data.auth === 0 && result.data.auth > 1) {
      vm.user = 'user';
    } */
      console.log(result.data.name);
      vm.name = result.data.name;
    });

    // link에 state이름, title에 사이드바에 띄우는 항목명
    vm.admin = [{
      link: '/admin/users',
      title: 'User List',
      icon: 'face'
    }, {
      link: '/admin/project',
      title: 'PM page',
      icon: 'event'
    }, {
      link: '/admin/users/approve',
      title: 'User Approve',
      icon: 'dns'
    },
    ];
  }
}());
