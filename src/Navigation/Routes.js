import greeterTmpl from './greeter.partial.html'

export default function NavigationRoutes(r) {
  r.when('/hello', {
    template: greeterTmpl,
    controller: 'NavigationController',
    controllerAs: 'nav'
  })
}

NavigationRoutes.$inject = [ '$routeProvider' ]
