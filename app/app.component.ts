import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './pages/dashboard.component';
import {ButtonsComponent} from './pages/UI/buttons.component';
import {FooterComponent} from './pages/footer.component';

declare var System;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, FooterComponent],
    providers: [
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/ui/buttons',
    name: 'Buttons',
    component: ButtonsComponent
  }
])
export class AppComponent implements OnInit {
  title = "Admin";
  subtitle = "LTE";

  ngOnInit() {
    //<!-- Bootstrap 3.3.5 -->
    System.import('bootstrap/js/bootstrap.min');
    //<!-- Morris.js charts -->
    System.import('plugins/outros/raphael-min');
    System.import('plugins/morris/morris.min');
    //<!-- Sparkline -->
    System.import('plugins/sparkline/jquery.sparkline.min');
    //<!-- jvectormap -->
    System.import('plugins/jvectormap/jquery-jvectormap-1.2.2.min');
    System.import('plugins/jvectormap/jquery-jvectormap-world-mill-en');
    //<!-- jQuery Knob Chart -->
    System.import('plugins/knob/jquery.knob');
    //<!-- daterangepicker -->
    System.import('plugins/outros/moment.min');
    System.import('plugins/daterangepicker/daterangepicker');
    //<!-- datepicker -->
    System.import('plugins/datepicker/bootstrap-datepicker');
    //<!-- Bootstrap WYSIHTML5 -->
    System.import('plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min');
    //<!-- Slimscroll -->
    System.import('plugins/slimScroll/jquery.slimscroll.min');
    //<!-- FastClick -->
    System.import('plugins/fastclick/fastclick');
    //<!-- AdminLTE App -->
    System.import('dist/js/app.min');
    //<!-- AdminLTE for demo purposes -->
    System.import('dist/js/demo');

  }

}
