import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {provide, ComponentRef} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


import {Auth} from './Auth';
import {RouterState} from './RouterState';
import {appInjector} from './app-injector';
import 'rxjs/Rx';
// Add these symbols to override the `LocationStrategy`
// Useful for plunker

import {RootComponent} from './root.component';


bootstrap(RootComponent, [
  Auth,
  RouterState,

  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}) // Use hashed route URLs instead of HTML5 urls
]).then((appRef: ComponentRef) => {
  // Store a reference to the injector
  // Workaround for Dependency Injection
  // in Router CanActivate lifecycle hook
  appInjector(appRef.injector);
});
