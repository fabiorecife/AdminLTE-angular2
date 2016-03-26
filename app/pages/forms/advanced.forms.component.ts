import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-forms-advanced',
    templateUrl: 'app/pages/forms/advanced.forms.component.html'
})
export class AdvancedFormsComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - AdvancedFormsComponent");
  }
}
