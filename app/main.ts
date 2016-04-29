import {bootstrap}    from 'angular2/platform/browser';

import {RootComponent} from './root.component';

import {ROUTER_PROVIDERS} from "angular2/router";

// Add these symbols to override the `LocationStrategy`
// Useful for plunker
import {provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy,
         {useClass: HashLocationStrategy})
]);
