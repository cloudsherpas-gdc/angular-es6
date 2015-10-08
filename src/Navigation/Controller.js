export class NavigationController {
  constructor(t) {
    this.name = "Ben"
    t(() => console.log("Here's a delayed 'Hello, Ben'"), 2500)
  }
}

NavigationController.$inject = [ '$timeout' ]
