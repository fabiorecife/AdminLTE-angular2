import {Component,ElementRef, OnInit} from 'angular2/core';

declare var System;
declare var $;

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/pages/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

  ngOnInit() {

    //wait bootstrap.datetimepicker
    setTimeout(() => $(this.elementRef.nativeElement).find("#calendar").datepicker(),1000);

    //<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    System.import('dist/js/pages/dashboard');
    //$(this.elementRef.nativeElement).find("#calendar").css({'width': '100%'});
  }
}
