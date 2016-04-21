import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-examples-login',
    templateUrl: 'app/pages/examples/login.component.html'
})
export class LoginComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - LoginComponent");
  }
}
