import {Component,ElementRef, OnInit} from 'angular2/core';
import {Router, ComponentInstruction, RouteParams} from 'angular2/router';
import {Auth} from '../../Auth';
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
  target: string;
  constructor(elementRef: ElementRef, public auth: Auth,
    public router: Router, public params: RouteParams) {
        this.elementRef = elementRef;
    }

  login(event) {
    this.auth.login();

    //this.target = this.params.get('target');

    this.router.navigate(['Home']);
    //window.location.href  = "http://localhost:3000/#/home/dashboard";
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
