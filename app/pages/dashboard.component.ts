import {Component, OnInit} from 'angular2/core';

declare var System;
declare var $;

@Component({
    selector: 'dashboard',
    templateUrl: 'app/pages/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    //<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    System.import('dist/js/pages/dashboard');
  }
}
