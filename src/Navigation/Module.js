import angular from 'angular'
import 'angular-route'
import NavigationRoutes from './Routes'
import { NavigationController } from './Controller'

angular.module('NavigationModule', ['ngRoute'])
  .controller('NavigationController', NavigationController)
  .config(NavigationRoutes)
