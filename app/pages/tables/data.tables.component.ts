import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-tables-data',
    templateUrl: 'app/pages/tables/data.tables.component.html'
})
export class DataTablesComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - DataTablesComponent");
  }
}
