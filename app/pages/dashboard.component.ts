import {Component,ElementRef, OnInit} from 'angular2/core';

declare var System;
declare var $;

@Component({
    selector: 'dashboard',
    templateUrl: 'app/pages/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

  ngOnInit() {
    //<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    $(this.elementRef.nativeElement).find("#calendar").datepicker();
    System.import('dist/js/pages/dashboard');
    //$(this.elementRef.nativeElement).find("#calendar").css({'width': '100%'});
  }
}
