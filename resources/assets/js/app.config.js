/**
 * @description
 * Configurações do app.
 */

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/resources/assets/tpl/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: '/resources/assets/tpl/about.html'
        })

        .state('error', {
            url: '/error',
            templateUrl: '/resources/assets/tpl/404.html'
        })
    ;

    $urlRouterProvider.otherwise('/error');
});
