import {Component,ElementRef, OnInit} from 'angular2/core';
declare var System;
declare var $;
declare var jQuery;

@Component({
    selector: 'pages-examples-login',
    templateUrl: 'app/pages/examples/login.component.html'
    /*
    <!-- iCheck -->
    <link rel="stylesheet" href="plugins/iCheck/square/blue.css">
    */
})
export class LoginComponent implements OnInit {
  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
  ngOnInit() {

      console.log("NG INIT - LoginComponent");
      /*
      System.import('plugins/iCheck/icheck.min');
      setTimeout(() => $(this.elementRef.nativeElement).find('#rememberme').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
      }), 1000);
      */

  }
}
