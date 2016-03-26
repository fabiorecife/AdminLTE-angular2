import {Component, OnInit, AfterViewInit} from 'angular2/core';


@Component({
    templateUrl: 'app/pages/UI/modals.component.html'
})

export class ModalsComponent implements OnInit, AfterViewInit {

  ngOnInit() {
      console.log("ngOnInit - MODALS");

  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT - MODALS");
  }


}
