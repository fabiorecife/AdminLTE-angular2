import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-tables-simple',
    templateUrl: 'app/pages/tables/simple.tables.component.html'
})
export class SimpleTablesComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - SimpleTablesComponent");
  }
}
