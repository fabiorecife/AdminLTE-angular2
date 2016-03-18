import {Component,ElementRef, OnInit} from 'angular2/core';


@Component({
    selector: 'app-footer',
    templateUrl: 'app/pages/footer.component.html'

})

export class FooterComponent {
  copyright = {
    url: "http://fabioalmeida.net",
    name: "Fabio Almeida",
    year: "2016"
  };
  version = "0.1";

}
