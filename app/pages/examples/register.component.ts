import {Component,ElementRef, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-examples-register',
    templateUrl: 'app/pages/examples/register.component.html'
})
export class RegisterComponent implements OnInit {
  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
  ngOnInit() {
      console.log("NG INIT - LoginComponent");
  }
}
