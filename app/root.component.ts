import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from './app.component';

import {LoginComponent} from './pages/examples/login.component';
import {RegisterComponent} from './pages/examples/register.component';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/login',  name: 'Login',  component: LoginComponent },
  { path: '/register',  name: 'Register',  component: LoginComponent },
  {
    path: '/home/...',
    name: 'Home',
    component: AppComponent,
    useAsDefault: true
  }
])
export class RootComponent { }
