import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'app-sidebar',
    templateUrl: 'app/pages/sidebar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent implements OnInit{

  ngOnInit() {
      console.log("NG INIT - SIDEBAR");
  }


}
