import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-forms-general',
    templateUrl: 'app/pages/forms/general.forms.component.html'
})
export class GeneralFormsComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - GeneralFormsComponent");
  }
}
