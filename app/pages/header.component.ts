import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'app-header',
    templateUrl: 'app/pages/header.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
  title = "Admin";
  subtitle = "NG2";
}
