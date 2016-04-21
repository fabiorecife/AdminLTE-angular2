import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'pages-examples-invoice',
    templateUrl: 'app/pages/examples/invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  ngOnInit() {
      console.log("NG INIT - InvoiceComponent");
  }
}
