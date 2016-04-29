import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-root',
    template: `
    <div class="hold-transition skin-blue sidebar-mini">
    <router-outlet></router-outlet>
    <div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/home/...',
    name: 'Home',
    component: AppComponent,
    useAsDefault: true
  }
])
export class RootComponent { }
