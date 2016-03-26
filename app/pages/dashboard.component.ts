import {Component,ElementRef, OnInit} from 'angular2/core';

declare var System;
declare var $;
declare var jQuery;

@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/pages/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  elementRef: ElementRef;

  initVectorMap(element) {
        //jvectormap data
        var visitorsData = {
          "US": 398, //USA
          "SA": 400, //Saudi Arabia
          "CA": 1000, //Canada
          "DE": 500, //Germany
          "FR": 760, //France
          "CN": 300, //China
          "AU": 700, //Australia
          "BR": 600, //Brazil
          "IN": 800, //India
          "GB": 320, //Great Britain
          "RU": 3000 //Russia
        };
        //World map by jvectormap

        element.find('#world-map').vectorMap({
          map: 'world_mill_en',
          backgroundColor: "transparent",
          regionStyle: {
            initial: {
              fill: '#e4e4e4',
              "fill-opacity": 1,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 1
            }
          },
          series: {
            regions: [{
              values: visitorsData,
              scale: ["#92c1dc", "#ebf4f9"],
              normalizeFunction: 'polynomial'
            }]
          },
          onRegionLabelShow: function (e, el, code) {
            //if (typeof visitorsData[code] != "undefined")
            //  el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
          }
        });

  }

  constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

  ngOnInit() {
    console.log("NG INIT - DashboardComponent");
    //<!-- jvectormap -->
    System.import('plugins/jvectormap/jquery-jvectormap-1.2.2.min');
    System.import('plugins/jvectormap/jquery-jvectormap-world-mill-en');

    //wait bootstrap.datetimepicker
    setTimeout(() => $(this.elementRef.nativeElement).find("#calendar").datepicker(),1000);

    //wait vectormap
    setTimeout(() => this.initVectorMap($(this.elementRef.nativeElement)), 1000);

    //<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    System.import('dist/js/pages/dashboard');
    //$(this.elementRef.nativeElement).find("#calendar").css({'width': '100%'});


  }
}
