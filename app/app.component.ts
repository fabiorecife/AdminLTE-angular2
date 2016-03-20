import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './pages/dashboard.component';
import {ButtonsComponent} from './pages/UI/buttons.component';
import {FooterComponent} from './pages/footer.component';
import {SidebarComponent} from './pages/sidebar.component';
import {ControlSidebarComponent} from './pages/control-sidebar.component';
import {HeaderComponent} from './pages/header.component';
import {GeneralComponent} from './pages/UI/general.component';
import {IconsComponent} from './pages/UI/icons.component';




declare var System;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES,
      FooterComponent,SidebarComponent,
      ControlSidebarComponent,HeaderComponent],
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
  //UI PAGES
  { path: '/ui/buttons',  name: 'Buttons',  component: ButtonsComponent },
  { path: '/ui/general',  name: 'General',  component: GeneralComponent },
  { path: '/ui/icons',  name: 'Icons',  component: IconsComponent }
])
export class AppComponent implements OnInit {


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
