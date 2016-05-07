import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from './app.component';

import {LockscreenComponent} from './pages/examples/lockscreen.component';
import {LoginComponent} from './pages/examples/login.component';
import {RegisterComponent} from './pages/examples/register.component';
import {LoggedInRouterOutlet} from './logged-in-router-outlet';
import {UserService} from './service/user.service';

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet],
    providers:[UserService]
})

@RouteConfig([
  { path: '/login',  name: 'Login',  component: LoginComponent },
  { path: '/register',  name: 'Register',  component: LoginComponent },
  { path: '/lockscreen',  name: 'Lockscreen',  component: LockscreenComponent },
  {
    path: '/home/...',
    name: 'Home',
    component: AppComponent,
    useAsDefault: true
  }
])
export class RootComponent { }
