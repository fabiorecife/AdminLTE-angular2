import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-calendar',
    templateUrl: 'app/pages/calendar.component.html'
})
export class CalendarComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - CalendarComponent");
  }
}
