import greeterTmpl from './greeter.partial.html'

export default function NavigationRoutes(route, location) {
  route
    .when('/', {
      template: greeterTmpl,
      controller: 'NavigationController',
      controllerAs: 'nav'
    })
    .otherwise({ redirectTo: '/' })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

NavigationRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
