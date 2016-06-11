import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

@Component({
  selector: 'pagenotfound',
  template: `
    URL Not Found: {{ route }}

    <br><br>

    <a [routerLink]="['/Home']">Go Home</a>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class NotFound {
  route: string;
  constructor(public params: RouteParams) {
    this.route = params.get('path');
  }
}
