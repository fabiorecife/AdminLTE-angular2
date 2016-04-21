import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-examples-profile',
    templateUrl: 'app/pages/examples/profile.component.html'
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - ProfileComponent");
  }
}
