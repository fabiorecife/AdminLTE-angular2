import {Component,ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-examples-lockscreen',
    templateUrl: 'app/pages/examples/lockscreen.component.html'
})
export class LockscreenComponent implements OnInit {
  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
  ngOnInit() {
      console.log("NG INIT - LockscreenComponent");
  }
}
